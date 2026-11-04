'use strict';
const $=id=>document.getElementById(id),names=['Front','Left','Right'],frames=['Idle','Talk','Blink','Talk + blink'];
let touchMode=false,touchDown=false,pointer=null;
let face=0,ws=null,base='',key='',pending=null,old='',ctx=null,stream=null,an=null,data,lastVoice=-Infinity,nextBlink=0,blinkEnd=0;
let blobs=Array(8).fill(null),urls=Array(8).fill(''),revs=Array(8).fill(0),db,drawn='';
const msg=t=>$('status').textContent=t;
function draw(now){let peak=0;if(an&&ctx.state==='running'&&!document.hidden){an.getFloatTimeDomainData(data);for(let s of data)peak=Math.max(peak,Math.abs(s));}
 let v=Math.min(100,peak*400),hold=+$('hold').value,loud=peak>=Math.max(.002,+$('sensitivity').value*.0025);if(loud)lastVoice=now;
 let remain=Math.max(0,hold-(now-lastVoice)),talk=touchMode?touchDown:(loud||remain>0);if(now>=nextBlink){blinkEnd=now+140;nextBlink=now+2500+4000*Math.random();}
 let blink=now<blinkEnd,frame=Number(talk)+2*Number(blink),packet=face+' '+frame;if(ws&&ws.readyState===1&&(ws.protocol!=='pd-return-v1'||key)&&packet!==old){ws.send(packet);old=packet;}
 $('level').value=v;$('tail').value=hold?100*remain/hold:100*Number(loud);$('sensitivity').style.setProperty('--fill',v+'%');$('hold').style.setProperty('--fill',$('tail').value+'%');
 const offset=face===0?0:4,order=[[0,2,1,3],[1,0,3,2],[2,0,3,1],[3,1,2,0]][frame],url=order.map(i=>urls[offset+i]).find(Boolean)||'';
 if(drawn!==url){drawn=url;if(url)$('puppet').src=url;else $('puppet').removeAttribute('src');}
 $('puppet').hidden=!url;$('empty').hidden=!!url;$('puppet').style.transform=face===1?'scaleX(-1)':'';$('pose').textContent=names[face].toUpperCase()+' · '+frames[frame].toUpperCase();
}
setInterval(()=>draw(performance.now()),40);document.querySelectorAll('[data-face]').forEach(b=>b.onclick=()=>{face=+b.dataset.face;document.querySelectorAll('[data-face]').forEach(x=>x.setAttribute('aria-pressed',+x.dataset.face===face));draw(performance.now());});
for(const [id,out,unit] of [['sensitivity','sv','%'],['hold','hv',' ms']]){let el=$(id);try{let v=localStorage.getItem(id);if(v!==null)el.value=v;}catch{}el.oninput=()=>{$(out).textContent=el.value+unit;try{localStorage.setItem(id,el.value)}catch{}};el.oninput();}
let micEpoch=0,source=null,lastResume=-Infinity,log=[];
function micEvent(what){log.push(new Date().toLocaleTimeString()+' '+what);if(log.length>12)log.shift();$('miclog').textContent=log.join('\n');}
function micStatus(){if(!stream||!ctx)return;const t=stream.getAudioTracks()[0];
 let paused=ctx.state!=='running',blocked=t.muted||t.readyState!=='live';
 $('micstate').textContent=blocked?'Mic interrupted':paused?'Mic processing paused':'Listening';
 $('retryMic').hidden=false;$('resumeMic').hidden=!paused||document.hidden;
 $('micdiag').textContent='Page: '+(document.hidden?'background':'foreground')+' · Audio: '+ctx.state+' · Mic: '+(t.muted?'muted':t.readyState);}
function recoverMic(manual){const c=ctx,t=stream?.getAudioTracks()[0];micStatus();
 if(document.hidden||!c||!t||t.readyState!=='live'||c.state==='running'||c.state==='closed'||(!manual&&(t.muted||performance.now()-lastResume<600)))return;
 lastResume=performance.now();micEvent(manual?'Resume tapped':'Resuming existing audio session');
 try{c.resume().then(()=>{if(c===ctx)micStatus()},()=>{if(c===ctx)micStatus()});}catch{micStatus();}}
$('resumeMic').onclick=()=>recoverMic(true);
function stopMic(reason){++micEpoch;$('retryMic').hidden=true;let s=stream,c=ctx;an=null;source=null;stream=null;ctx=null;lastVoice=-Infinity;lastResume=-Infinity;
 if(s)s.getTracks().forEach(t=>t.stop());if(c){c.onstatechange=null;c.close().catch(()=>{});}
 $('mic').textContent='Start Mic';$('mic').disabled=false;$('resumeMic').hidden=true;$('micdiag').textContent=$('micstate').textContent=reason||'Off';draw(performance.now());}
function pressMouth(on){touchDown=on;$('talkPad').setAttribute('aria-pressed',String(on));draw(performance.now());}
function releasePad(){pointer=null;pressMouth(false);}
function setTouch(on){touchMode=on;if(on)stopMic();releasePad();$('manual').setAttribute('aria-pressed',String(on));$('talkPad').hidden=$('touchHint').hidden=!on;$('manual').textContent=on?'Exit touch mouth':'Use touch mouth';}
$('manual').onclick=()=>setTouch(!touchMode);
const pad=$('talkPad');pad.onpointerdown=e=>{if(!touchMode||pointer!==null)return;e.preventDefault();pointer=e.pointerId;pad.setPointerCapture(pointer);pressMouth(true);};
pad.onpointerup=pad.onpointercancel=pad.onlostpointercapture=e=>{if(e.pointerId===pointer)releasePad();};
pad.onkeydown=e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();pressMouth(true);}};
pad.onkeyup=pad.onblur=()=>releasePad();window.addEventListener('blur',releasePad);
$('mic').onclick=()=>{if(stream){stopMic();return;}setTouch(false);startPhoneMic();};
$('retryMic').onclick=()=>{stopMic();startPhoneMic();};
async function startPhoneMic(){let id=++micEpoch,b=$('mic');b.disabled=true;try{
 const c=ctx=new (window.AudioContext||window.webkitAudioContext)();c.resume().catch(()=>{});const acquired=await navigator.mediaDevices.getUserMedia({audio:true});
 if(id!==micEpoch){acquired.getTracks().forEach(t=>t.stop());return;}stream=acquired;an=c.createAnalyser();an.fftSize=1024;data=new Float32Array(an.fftSize);source=c.createMediaStreamSource(stream);source.connect(an);
 let t=stream.getAudioTracks()[0];t.onended=()=>{if(id===micEpoch){micEvent('Track ended');stopMic('Mic ended');}};
 t.onmute=()=>{if(id===micEpoch){lastVoice=-Infinity;micEvent('Track muted');micStatus();}};
 t.onunmute=()=>{if(id===micEpoch){micEvent('Track unmuted');recoverMic(false);}};
 c.onstatechange=()=>{if(id===micEpoch){micEvent('Audio: '+c.state);micStatus();}};
 $('retryMic').hidden=false;b.textContent='Stop Mic';micEvent('Mic started');recoverMic(false);
 }catch(e){if(id===micEpoch)stopMic('Mic unavailable: '+e.message);}finally{if(id===micEpoch)b.disabled=false;}};
const slotsUI=[];
function show(i,b,name,state){if(urls[i])URL.revokeObjectURL(urls[i]);blobs[i]=b;urls[i]=b?URL.createObjectURL(b):'';const ui=slotsUI[i];ui.img.src=urls[i];ui.img.hidden=!b;ui.caption.textContent=(name||'Assigned picture')+' · '+state;ui.pick.textContent='Replace picture';refresh();}
function refresh(){$('offer').disabled=!key||!!pending||!blobs.some(Boolean);}
const ready=new Promise(resolve=>{try{const open=indexedDB.open('pd-lite-photos',1);open.onupgradeneeded=()=>open.result.createObjectStore('pictures');open.onerror=()=>resolve(null);open.onsuccess=()=>{db=open.result;resolve(db);for(let i=0;i<8;i++){let req=db.transaction('pictures').objectStore('pictures').get(i);req.onsuccess=()=>{const v=req.result;if(!revs[i]&&v){const b=v instanceof Blob?v:v.blob;if(b instanceof Blob)show(i,b,v.name,'Saved');}};}};}catch{resolve(null);}});
for(let i=0;i<8;i++){let l=document.createElement('div'),f=document.createElement('input'),img=document.createElement('img'),caption=document.createElement('small'),pick=document.createElement('button'),title=document.createElement('strong');l.className='assignedPhoto';title.textContent=(i<4?'Front':'Right')+' · '+frames[i%4];img.alt=title.textContent;img.hidden=true;caption.textContent='No picture assigned';pick.type='button';pick.textContent='Choose picture';pick.onclick=()=>f.click();f.type='file';f.accept='image/*';f.hidden=true;l.append(title,img,caption,pick,f);slotsUI.push({img,caption,pick});$('slots').append(l);f.onchange=async()=>{let file=f.files[0];if(!file)return;let rev=++revs[i],u=URL.createObjectURL(file);try{let im=new Image();im.src=u;await im.decode();let z=Math.min(1,1200/Math.max(im.naturalWidth,im.naturalHeight)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(im.naturalWidth*z));c.height=Math.max(1,Math.round(im.naturalHeight*z));c.getContext('2d').drawImage(im,0,0,c.width,c.height);let b=await new Promise(r=>c.toBlob(r,'image/png'));if(!b)throw Error('Image conversion failed');if(rev!==revs[i])return;show(i,b,file.name,'Saving…');draw(performance.now());const saved=await ready;if(rev!==revs[i])return;try{if(!saved)throw Error();await new Promise((ok,no)=>{const tx=saved.transaction('pictures','readwrite');tx.oncomplete=ok;tx.onabort=tx.onerror=no;tx.objectStore('pictures').put({blob:b,name:file.name},i);});if(rev===revs[i])caption.textContent=file.name+' · Saved';}catch{if(rev===revs[i])caption.textContent=file.name+' · Not saved on this device';}}catch(e){msg('Image unavailable: '+e.message)}finally{f.value='';URL.revokeObjectURL(u);}};}
function room(input){let u=new URL(input);if(u.origin==='https://anonimations696.github.io' && u.pathname==='/Puppet-Desk/mobile/')u=new URL(new URLSearchParams(u.hash.slice(1)).get('room'));if(!['https:','wss:'].includes(u.protocol)||!/^[-a-z0-9]+\.trycloudflare\.com$/.test(u.hostname)||u.port||u.username||u.password)throw Error('Use an internet room invitation from the host.');let id=u.pathname.match(/^\/([a-f0-9]{32})(?:\/guest)?\/?$/)?.[1]||(u.pathname==='/mobile/'&&/^#[a-f0-9]{32}$/.test(u.hash)?u.hash.slice(1):null);if(!id)throw Error('Incomplete room invitation.');return 'https://'+u.host+'/'+id;}
try{$('invite').value=localStorage.getItem('pd-last-room')||'';}catch{}
async function mobileProof(nonce){try{if(!db)throw Error();const read=()=>new Promise((res,rej)=>{let q=db.transaction('pictures').objectStore('pictures').get('return-key');q.onsuccess=()=>res(q.result);q.onerror=rej;});let keys=await read();if(!keys){keys=await crypto.subtle.generateKey({name:'RSASSA-PKCS1-v1_5',modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:'SHA-256'},false,['sign','verify']);await new Promise((res,rej)=>{let tx=db.transaction('pictures','readwrite');tx.objectStore('pictures').put(keys,'return-key');tx.oncomplete=res;tx.onerror=rej;tx.onabort=rej;});}
 const pub=await crypto.subtle.exportKey('jwk',keys.publicKey),sig=await crypto.subtle.sign('RSASSA-PKCS1-v1_5',keys.privateKey,new TextEncoder().encode('PuppetDesk return 1:'+nonce));return 'proof '+pub.n.replace(/-/g,'+').replace(/_/g,'/').padEnd(344,'=')+' '+btoa(String.fromCharCode(...new Uint8Array(sig)));}catch{return 'anonymous';}}
if(location.hash&&(location.pathname==='/mobile/'||location.pathname==='/Puppet-Desk/mobile/')){try{$('invite').value=room(location.href);history.replaceState(null,'','./');}catch{}}
$('join').onclick=()=>{if(ws){ws.close();return;}try{base=room($('invite').value.trim());try{localStorage.setItem('pd-last-room',base);}catch{}const sock=new WebSocket('wss:'+base.slice(6)+'/guest',['pd-return-v1']);ws=sock;old='';msg('Connecting…');$('join').textContent='Disconnect';
 sock.onopen=()=>{msg('Connected · waiting for host assignment');draw(performance.now());};sock.onmessage=async e=>{if(ws!==sock)return;if(sock.protocol==='pd-return-v1'&&/^prove [0-9a-f]{32}$/.test(e.data)){let p=await mobileProof(e.data.slice(6));if(ws===sock&&sock.readyState===1)sock.send(p);return;}let m=/^(art1|upload) ([0-9a-f]{32})$/.exec(e.data);if(!m)return;if(m[1]==='art1'){key=m[2];refresh();}else if(m[2]===key&&pending){try{let resp=await fetch(base+'/upload/'+key,{method:'POST',body:pending,referrerPolicy:'no-referrer'});if(!resp.ok)throw Error(resp.status);if(ws===sock)msg('Artwork sent to host');}catch(e){if(ws===sock)msg('Upload failed: '+e.message);} }};
 sock.onclose=()=>{if(ws!==sock)return;ws=null;releasePad();key='';pending=null;refresh();$('join').textContent='Join room';msg('Disconnected · check that the room is open and has a free guest slot.');};
 }catch(e){msg(e.message);}};
$('offer').onclick=async()=>{if(!key||pending||!confirm('Offer these view pictures to the host? If accepted, the host keeps copies.'))return;const sock=ws;try{let parts=['PDA1'];for(let b of blobs){let n=new Uint8Array(4);new DataView(n.buffer).setUint32(0,b?b.size:0,true);parts.push(n);if(b)parts.push(b);}pending=new Blob(parts);if(pending.size>32*1024*1024)throw Error('Pictures exceed 32 MB');refresh();let r=await fetch(base+'/offer/'+key,{method:'POST',referrerPolicy:'no-referrer'});if(!r.ok)throw Error(r.status);if(ws===sock)msg('Artwork offered · host can import and assign');}catch(e){if(ws===sock){pending=null;refresh();msg('Offer failed: '+e.message);}}};
document.addEventListener('visibilitychange',()=>{if(stream)micEvent(document.hidden?'Page hidden':'Page visible');if(document.hidden){releasePad();lastVoice=-Infinity;draw(performance.now());micStatus();}else recoverMic(false);});window.addEventListener('pagehide',()=>{stopMic();if(ws)ws.close();});
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
