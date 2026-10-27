# Puppet Desk — Free PNGTuber & VTuber Software for Windows

![Puppet Desk controls, Hands editor and animated puppet](https://github.com/user-attachments/assets/2b86d325-b221-4713-8ff0-137c1d669e4c)

**Developed by Hate and LaMDA.** Puppet Desk is free PNGTuber and 2D VTuber software for Windows. Turn your own character images into a voice-reactive streaming avatar, with microphone-driven talking, automatic blinking, layered hands and props, and OBS scene switching.

Use Puppet Desk for PNGTubing, virtual puppets, livestreams, and recorded videos with OBS Studio. Save six characters with three puppet profiles each, switch views with hotkeys, and position, resize, rotate, or mirror your hand layers. Your microphone drives the mouth states; no webcam or face tracking is required.

[**Download Puppet Desk for Windows**](https://github.com/anonimations696/Puppet-Desk/releases/latest/download/PuppetDesk-Windows.zip) · [Release notes](https://github.com/anonimations696/Puppet-Desk/releases)

Download **PuppetDesk-Windows.zip** from Releases, extract it, and run **Install or Update Puppet Desk.cmd**. Use the desktop **Puppet Desk** shortcut afterwards. Future updates use **Update Puppet Desk**. No GitHub login, GitHub CLI, Python or compiler is needed.

Windows 11 with .NET Framework 4.8 or later is recommended. The executable is unsigned. Updates preserve local settings and retain a previous version for rollback.

## New in 1.2.0 — Hand Studio Update with Live Hand Puppeteering Window

Create gestures in **Hand Animation Studio** with blue motion keys, automatic pose saving, thumbnail image clips, drag-and-drop replacement, split/trim tools and Undo/Redo. Perform with saved gestures in the separate **Live Hand Puppeteering** window. Each character has its own saved hand library.

## Full user manual

Find sections by the names printed on the controls. Use Ctrl+F for a control name.

CONTENTS

  1. Puppet Desk overview
  2. Install or Update Puppet Desk
  3. First-time setup
  4. PuppetDesk Controls and PuppetDesk Puppet
  5. Character 1-6 / Puppet 1-3 / Rename
  6. Align all puppets
  7. Puppet views / View pictures / Fade between views
  8. Select Puppet / Puppet size (arms scale with it)
  9. Hands — Load, Select, Hand off / Hand on, Clear, Size, Rotate, Mirror, Play / Pause, Reset hand pose
  10. Hand joints — Pin Left hand / Pin Right hand / Lock joint
  11. Microphone — Start Mic / Stop Mic / Voice threshold / Mouth hold (ms) / Blink automatically for selected view / All puppets
  12. Key bindings — Left / Front / Right / Global (also active in other applications)
  13. Undo (Ctrl+Z) / Redo (Ctrl+Y)
  14. Saved settings, artwork and backups
  15. Sharing Puppet Desk
  16. OBS Window Capture setup
  17. Copy view report / Troubleshooting
  18. Control reference and current limits
  19. OBS settings — Connection, character scenes and puppet scene overrides
  20. Update Puppet Desk / Rollback Puppet Desk
  21. Minimize puppet / Restore puppet
  22. Donate
  23. Hand Animation Studio
  24. Hand keyframes — automatic saving, timing, copy and paste
  25. Image-clip timeline — add, drag, stretch, split and replace
  26. Animation name / Save / Saved hands / Load saved / Undo keyframe
  27. Hands — Live Hand Puppeteering


## 1. Puppet Desk overview

Puppet Desk displays a character assembled from your pictures. Microphone
activity switches between idle and talking pictures. Optional automatic
blinking selects blink pictures. Buttons or assigned keys turn the character
Front, Left or Right.

Each puppet can have two independently positioned hand/arm layers. These
layers accept still pictures or movie clips. You can resize, rotate, mirror,
hide, and pin them. Once arranged, the hands follow the puppet when you move
or resize its body.

Six named character buttons each hold three named puppet setups: 18 total.
For example, Hate can have three outfits/poses, and Beavis has three separate
setups. Only the selected character and puppet setup is displayed.


## 2. Install or Update Puppet Desk

Extract the complete download ZIP and double-click Install or Update Puppet Desk.cmd.
The installer downloads and verifies the published app, creates desktop shortcuts,
and keeps a rollback copy when updating. No compilation is needed.
Launch from the Puppet Desk desktop shortcut. Close the app before updating.
Settings are stored separately in AppData and are preserved by updates.


## 3. First-time setup

  1. Select Character 1, then Puppet 1. Right-click either button to rename it.
  2. Expand View pictures and load your Front and Right pictures.
  3. Select Front and set the Puppet size slider.
  4. Click Select Puppet, then left-drag the puppet in the preview to place it.
  5. Expand Microphone, click Start Mic, and tune Voice threshold and Mouth hold.
  6. Load hand pictures or movies in Hands, if wanted.
  7. Select each hand, position it, and adjust its size and rotation.
  8. Set and lock joints if you want a particular rotation pivot.
  9. Set up Puppets 2 and 3 in the same way.
 10. Close normally with X or Exit Puppet Desk to save the current setup.

An empty Front setup displays a simple built-in demo face. Loading your own
Front picture replaces that demo. Hands are optional.


## 4. PuppetDesk Controls and PuppetDesk Puppet

The controls window contains the buttons, image pickers and sliders. The
separate preview displays the puppet and hands on the desktop.

The top area stays above the scrolling controls:
  Undo | Redo | Align all puppets
  Character 1 | Character 2 | Character 3 | Character 4 | Character 5 | Character 6
  Puppet 1 | Puppet 2 | Puppet 3 for the selected character.

Right-click any character or puppet button and choose Rename. Enter a name
and press Enter/Save, or Escape/Cancel. Hover to see a long name in full.

Below that, the sections appear in this order:
  Puppet views
  Hands — Live Hand Puppeteering / Hand Animation Studio
  Microphone
  View pictures
  Key bindings
  Copy view report / Exit Puppet Desk / developer credit

Hand joints is inside Hand Animation Studio. Microphone, View pictures and Key bindings can collapse by
clicking their headings. Click again to expand. Collapsing a section hides
its controls; it does not disable its features. Collapse state is not currently
saved between launches.

Resize the controls window by dragging an edge, maximise it, or scroll to
reach lower sections. The preview follows normal window stacking, so an
active application such as OBS can cover it.

Sliders ignore the mouse wheel. Click or drag a slider deliberately to change
its value. The wheel no longer resizes hands over the preview either.


## 5. Character 1-6 / Puppet 1-3 / Rename

Click one of the six character buttons beneath Undo/Redo, then choose one
of its three puppet buttons. Active buttons are green. Character 1 always
opens on launch; each character remembers which of its three setups you last
selected. Right-click a character or puppet button, choose Rename, and type
up to 30 characters. Enter saves; Escape cancels. There are no permanent name
fields. Each character has separate pose names, artwork, settings and histories.

Each slot keeps its own:
  - Front and Right artwork selections.
  - Both hand/arm files, whether pictures or movies.
  - Puppet size, position and selected view.
  - Hand sizes, positions, rotations, mirrors and visibility.
  - Joint positions and locks.
  - Voice threshold, mouth hold and per-view blink settings.
  - Fade preference, view key assignments and Global preference.

Switching saves the outgoing setup and restores the incoming one. Their
microphone/playback states can also change when switching during a session.
After reopening the app, microphone and movies start stopped; use Start Mic
and Play as needed.

Names and setups are saved between launches. Existing three-puppet data is
imported into Character 1 automatically. The older files are retained. The
other five characters start with empty setups. Character 1 opens by default.

Each puppet has its own Undo/Redo history for the current session. Editing the
Pirate does not undo the Demon's edits when you return to the Demon.


## 6. Align all puppets

This button is immediately to the right of Redo. The SELECTED puppet is the
reference. Within the SELECTED CHARACTER, clicking it gives the other two slots the same puppet width and
screen position as that reference.

Example:
  Set Demon to a width of 400 and position him where you want him.
  Keep Demon selected and click Align all puppets.
  Pirate and Judge receive that width and position. Switching between them
  now uses the same placement without manually repositioning each character.

Attached hands move and scale proportionally with their own puppet. Their
relative placement, rotation, joint positions and locks are retained. The
button does not copy the Demon's pictures or hands onto the other puppets.

Alignment matches the image drawing origin and width. Different source-image
aspect ratios can produce different heights, and different empty margins in
your artwork can make the visible characters appear slightly offset. It does
not detect faces or automatically crop artwork to equal visible body sizes.

Changes are saved. To undo alignment for a particular affected puppet, switch
to that puppet and click Undo. Each affected slot has its own alignment edit;
the reference puppet is unchanged.


## 7. Puppet views / View pictures / Fade between views

The view buttons are ordered Left, Front, Right. Front is in the middle.
Left is a horizontal reflection of the Right artwork. There are no separate
Left image slots in this version.

In View pictures, load these four states for Front and again for Right:
  Idle:            Mouth closed, eyes open.
  Talking:         Mouth open, eyes open.
  Blink:           Mouth closed, eyes closed.
  Talk blink:      Mouth open, eyes closed.

The picker accepts PNG, JPG/JPEG, GIF and BMP. Puppet GIFs are treated as
pictures, not as an animated character system. Use matching canvas sizes and
character placement across states for stable visual changes. Repeated file
names in different folders are permitted; the program uses full file paths.

Click a picture button to choose or replace its file. Click the adjacent X
button to clear that slot. Clearing a slot does not delete its file from disk.
Hover over the displayed filename to see the full path.

When a state is missing, the program tries another available picture from the
same view. Left uses Right's available pictures, mirrored. Load at least one
Right picture before selecting Left or Right. A side view does not deliberately
borrow a Front picture as its missing-state fallback.

Fade between views is optional. Enabled: the newly selected view briefly
fades up to full opacity over about 300 milliseconds. Disabled: the switch is
immediate. It is not an animation that turns or morphs the body.

The status beside Fade identifies the active view and drawing slot. Hover
there to inspect the selected image path.


## 8. Select Puppet / Puppet size (arms scale with it)

Select Puppet chooses the body for dragging. Left-drag a visible part of the
preview to move the selected layer. Selection comes from the controls buttons,
so you can choose the body even when a hand overlaps it.

Right-drag moves the entire preview window, carrying its contents together.
When dragging a layer toward the left or top edge, the preview can reposition
itself to allow movement onto monitors left of or above the primary screen.

Puppet size sets the body image's drawing width, currently 150 to 1,000 pixels.
Its height follows the reference artwork's aspect ratio. This slider scales
both hands and their offsets from the body at the same time, including hidden
hands. Arrange the arms first, then resize the whole puppet as a group.

Moving the body also carries both hands. Selecting and moving a hand adjusts
that hand independently, unless its joint is locked.


## 9. Hands — Load, Select, Hand off / Hand on, Clear, Size, Rotate, Mirror, Play / Pause, Reset hand pose

Click Hand Animation Studio to access the hand controls and joints. See sections 23–27
for keyframes, image clips, saved presets and live puppeteering.

Left hand and Right hand are independent overlay slots. They can also hold
props such as a martini glass, gavel, or other artwork.

Load left hand / Load right hand:
  Choose PNG, JPG/JPEG, BMP, GIF or a movie. The movie filter includes MP4,
  WMV, AVI, MOV and M4V; playback depends on Windows codec support. Transparent
  PNGs preserve their transparency. GIFs are loaded as still hand images.

  Loading turns that hand on and selects it for movement. A first-time load,
  very tiny hand, or hand detected outside the preview/screens is repositioned
  beside the puppet at a useful size. Replacing an already visible hand usually
  keeps its pose. A file with saved keyframes starts at its first saved key.
  Automatic loading of saved profiles restores the saved profile pose.

Select Left hand / Select Right hand:
  Choose which hand responds to left-dragging in the preview.

Hand off / Hand on:
  The button describes its NEXT action. Hand off means the hand is currently
  shown; click to hide it. Hand on means it is hidden; click to show it.
  This stops keyframe playback and restores the normal pose, then hides or
  shows the hand. It retains the file and does not pause a playing movie.

Clear:
  Removes the loaded hand file from the slot without deleting it from disk.
  It does not serve as a pose reset. Undo can restore the selection if its
  original file is still available.

Size:
  Resizes this hand independently while retaining its aspect ratio. The
  slider normally spans 1 to 10,000 pixels; group scaling may extend it.
  The chosen pivot stays in place during independent resizing.

Rotate:
  Turns the hand from -180 to +180 degrees around its pivot. A new/reset
  hand uses its centre until you choose a different joint.

Mirror:
  Flips the hand picture or movie horizontally. Each hand has its own switch.
  This is separate from the Left body view mirroring the Right body artwork.

Play / Pause:
  Available for movie hands once the movie opens. Play runs the clip, Pause
  stops at the current point, and a playing clip loops at its end. Movie audio
  is muted. This button is disabled for still pictures.

Reset hand pose:
  Places the hand beside the puppet at roughly half the puppet's width,
  resets rotation to zero and the pivot to its centre, unlocks the joint,
  turns the hand on, and selects it. The file and Mirror setting are retained.
  This action can be undone. Use it when a hand is lost, tiny or badly placed.

Movie transparency:
  The program removes vivid green pixels from movie frames. This is a fixed
  green-key operation, not an adjustable keying panel. Green objects within
  the clip can also be affected. Ordinary image backgrounds are not processed
  by that movie keyer. A JPG has no alpha transparency; use a transparent PNG
  for a clean still-image cutout.

Hands render above the body. The right-hand layer renders above the left-hand
layer where they overlap. Selecting a layer does not change that drawing order.


## 10. Hand joints — Pin Left hand / Pin Right hand / Lock joint

Use a joint to make an arm rotate around an elbow, wrist or another point.

  1. Load and position the hand.
  2. Expand Hand joints.
  3. Unlock that hand if necessary.
  4. Click Pin left hand or Pin right hand.
  5. With the cross cursor, click the intended joint on the hand in the preview.
  6. Adjust Rotate to check the movement.
  7. Enable Lock joint when satisfied, then collapse Hand joints if desired.

Choosing a pivot preserves the hand's current visible placement. Rotation and
independent resizing then use that pivot. Clicking the pin button again cancels
picking; choosing a layer also cancels it.

Lock joint prevents repinning and dragging that hand independently. It still
allows rotation and resizing. Moving/scaling the whole puppet carries locked
hands with it. Unlock the joint when you want to reposition the arm.

This is one pivot per hand layer. It does not bend a single picture into a
multi-joint skeleton, track a face, or automatically reposition arms for each
Front/Left/Right view. Each puppet currently has one shared hand pose across
its body views.


## 11. Microphone — Start Mic / Stop Mic / Voice threshold / Mouth hold (ms) / Blink automatically for selected view / All puppets

All puppets (share microphone across all characters):
  Check this to use the current Voice threshold and Mouth hold for all six
  characters and all three profiles within each character (18 setups).
  Adjusting either slider changes the shared tuning. Switching characters or
  profiles keeps the mic's current running state while sharing is enabled.
  Uncheck to tune each profile independently again; each starts from the last
  shared values. This option and shared values are saved between launches.
  The app still starts with the microphone stopped after reopening.
  Blink preferences remain specific to each view/profile.


Start Mic starts capture from the Windows default recording microphone.
Stop Mic stops it. Choose the desired default device in Windows before starting
capture; this version has no device selector inside Puppet Desk.

Voice threshold:
  Sets how loud the input must be to trigger talking. Lower values react to
  quieter sounds. Raise it if room noise triggers the mouth. Speak normally
  while watching the green live level and adjust until speech opens the mouth
  while background noise does not.

Mouth hold:
  Keeps the mouth open briefly after the last above-threshold input. Range:
  0 to 500 milliseconds. Increasing it helps bridge tiny gaps between syllables;
  decreasing it makes closing more immediate. Zero can prevent visible talking
  because the hold interval has no duration; start above zero when tuning.

Both sliders display live microphone activity in green. The hold slider's
value is a duration, not another loudness threshold. A separate level bar is
also shown beside Start/Stop Mic. These are relative indicators, not calibrated
sound-pressure or decibel meters.

Blink automatically for selected view:
  Enables periodic blinking for the current Front, Left or Right view. Blinks
  last about 140 milliseconds, with random intervals of 2.5 to 6.5 seconds. Each
  view remembers its own preference. Blink still works while the mic is off.
  If an appropriate blink picture is missing, the same-view fallback applies.
  While silent, a blink uses Blink; while talking, it uses Talk blink.
  Voice above the threshold selects Talking; after Mouth hold expires it
  returns to Idle. This swaps your supplied pictures; it does not animate
  eyes or mouths inside one picture.

After launching the app, click Start Mic. Changing puppet slots restores that
slot's tuning and can change whether the microphone is running in that session.


## 12. Key bindings — Left / Front / Right / Global (also active in other applications)

Default view keys:
  F6 = Left
  F7 = Front
  F8 = Right

To change one, click its field and press your preferred key. Ordinary letters
and numbers are allowed; modifiers are optional. You can also use combinations
such as Ctrl+Alt+1. Click elsewhere when finished. Backspace or Delete clears
the assignment. Duplicate view assignments are rejected.

Global unchecked:
  View keys act only while Puppet Desk Controls is the active window. Merely
  leaving the controls open behind Firefox is not enough. They do not operate
  the puppet while another application, or the separate preview, is active.

Global checked:
  View keys can operate while Firefox, OBS or another application is active.
  A globally reserved plain letter also acts as a puppet key when you type in
  another application. Choose keys with that behaviour in mind.

Bindings are temporarily released while you edit key fields or puppet names.
If Windows cannot reserve a binding, its field can show "in use". Choose a
free key or combination. Ctrl+Z, Ctrl+Y and Ctrl+Shift+Z are reserved for history.
These view bindings and Global preference are stored per puppet slot.
Global view hotkeys and shared microphone settings are separate options.

For a mouse with programmable buttons, assign the matching keyboard keystroke
in your mouse's software. Puppet Desk receives that keystroke as a view command.
There are currently no separate bindings for switching characters, puppet slots or hands.


## 13. Undo (Ctrl+Z) / Redo (Ctrl+Y)

Undo and Redo stay at the top of the controls.
  Ctrl+Z         Undo
  Ctrl+Y         Redo
  Ctrl+Shift+Z   Redo

These editing shortcuts work with the controls or preview active. They are
not system-wide Undo commands. When editing a name text field, normal text
editing takes priority; key-binding fields capture input for assignment.

History covers completed setup changes such as moving the puppet/window,
scaling, rotating, moving or pinning hands, changing visibility or mirrors,
selecting/clearing artwork, and changing tuning/settings or playback state.
A continuous mouse drag is normally one completed edit.

Each puppet keeps up to 100 previous edits for the current session. A new
edit after Undo clears that puppet's Redo history. History is not retained
when the app closes. Names, section expansion and selecting which layer to
work with are not puppet-pose history items. Undo does not seek a movie back
to an earlier timestamp or recover files deleted from the hard drive.

After Align all puppets, switch to each affected puppet to undo its alignment.


## 14. Saved settings, artwork and backups

Puppet Desk stores settings separately from the EXE in:
  %APPDATA%\PuppetDesk

To open the folder:
  1. Press Windows key + R.
  2. Paste %APPDATA%\PuppetDesk
  3. Press Enter.

Files there include:
  characters.txt  Character/profile names, selected poses, and shared mic options.
  character-1 through character-6: folders, each containing puppet-1.txt,
                  puppet-2.txt and puppet-3.txt for that character.
  Root puppet-1.txt / puppet-2.txt / puppet-3.txt and puppets.txt may remain
                  from the earlier version; those are migration sources.
  settings.txt  Possible older single-puppet file retained from earlier builds.

Several actions save immediately, including loading/clearing files, changing
slots, alignment and leaving name fields. Close normally with X or Exit Puppet
Desk to save the latest adjustments. A forced process termination can lose
changes made since the last save.

Artwork and movies remain in their original folders. Settings contain paths
to them, not copies of their contents. Renaming or moving a selected file can
prevent it loading next time; use its picker to select the new location.

To back up a setup, close the app, copy the settings folder, and separately
back up the artwork/movie files. Restoring to another PC may require reselecting
files because the original folder paths differ.

Different downloaded EXEs reuse this same settings folder. Deleting old build
folders does not create or remove separate installed versions. Do not delete
the settings folder unless you intend to remove your saved configurations.
Avoid running multiple copies at once because they write to the same files.


## 15. Sharing Puppet Desk

Share Puppet Desk using its official GitHub page:
https://github.com/anonimations696/Puppet-Desk

Only trust Puppet Desk downloads and updates from this original repository and
its Releases page. Do not trust download links, mirrors or copies hosted elsewhere,
even if they use the Puppet Desk name or logo. Share the official link above.


## 16. OBS Window Capture setup

Choose the separate PuppetDesk Puppet preview as the window source for your
scene, rather than the controls window. If the capture displays a green
background, apply a green Chroma Key filter to that source in OBS. Exact
capture results depend on OBS capture settings and the Windows environment.

Puppet Desk does not provide its own virtual camera, recording timeline or
finished-video export. OBS handles your scene composition, recording or
virtual-camera output. Puppet Desk supplies the animated visual.

Microphone activity drives the mouth. Computer or browser audio is not
intentionally used as the input; routing it into your recording microphone
through another program can make it trigger talking.


## 17. Copy view report / Troubleshooting

Hand is missing:
  - If the button says Hand on, click it to show that hand.
  - Check the slot has a filename.
  - Select that hand and use Reset hand pose.
  - Reload its file; loading turns it on and selects it.
  - Check whether an opaque right-hand picture is covering the left hand.
  - A still image's Play button being disabled is normal.
  - If the problem persists, provide the exact image and a diagnostic report.

Hand will not move independently:
  - Select the correct layer.
  - Unlock its joint. A locked joint deliberately prevents hand dragging.
  - Finish or cancel pin-picking mode before attempting a normal drag.

Hand shows a solid background:
  - Verify that the source is a transparent PNG if you need a cutout.
  - A JPG's background is part of the picture.
  - Movie green keying applies to movie frames, not arbitrary still backgrounds.

Body changes appear to jump or flip:
  - Confirm each loaded state actually faces the intended direction.
  - Left is always a mirror of Right in this version.
  - Check alignment and empty margins within the different source images.
  - Copy the view report to identify which path is being drawn.

Mouth does not respond:
  - Start Mic and check the live level.
  - Confirm Windows' default recording microphone.
  - Lower Voice threshold and set Mouth hold above zero.
  - Verify a talking picture is loaded and visibly differs from idle.

Movie will not play:
  - Allow it time to open before using Play.
  - Read any decoder error shown by the app.
  - File extension alone does not guarantee Windows can decode the codec.

Hotkey does not respond:
  - With Global off, activate the controls window.
  - Click away from a key field or name field after editing.
  - Check for "in use" and try a different binding.
  - Remember that each puppet has its own assignments.

Build fails:
  - Close the existing Puppet Desk.exe before rebuilding it.
  - Extract the ZIP fully and keep the source/icon beside the batch file.
  - Copy the full compiler error text if further help is needed.

Old blue-border icon still appears:
  - Check you rebuilt and opened the current EXE.
  - Windows may retain an old small icon for an existing path/shortcut.
  - Recreate an old shortcut or taskbar pin for the current EXE if needed.

Copy view report:
  This button copies diagnostic text to the clipboard. It includes the active
  view, drawing slots, loaded artwork paths, blink/fade state, hand paths,
  visibility, dimensions, positions, rotation and pivots, plus recent frame
  changes. Paste it when requesting troubleshooting. It includes full local
  paths, so inspect it before posting publicly. It does not upload itself.


## 18. Control reference and current limits

Current limits:
  - Six characters, each with three setups; one displayed puppet at a time.
  - Two hand/prop layers per puppet.
  - Front artwork plus Right artwork; Left mirrors Right.
  - One hand pose per puppet, shared across its directional views.
  - One pivot per hand; no automatic skeletal bending or face tracking.
  - GIFs are still pictures in this workflow.
  - Video support depends on Windows codecs.
  - No built-in project packaging, movie trimming/speed editing, virtual camera or video export.
  - Windows behaviour must be checked on the recipient's actual PC; source
    syntax checks alone do not verify capture, drivers or movie decoding.

Quick reference:
  Left drag           Move the selected puppet/hand layer.
  Right drag          Move the whole preview window.
  Puppet size         Scale the puppet and both attached hands together.
  Hand Size           Scale that hand independently around its pivot.
  Hand Rotate         Rotate that hand around its pivot.
  Hand off/on         Hide/show without clearing its file.
  Clear               Remove a slot's file selection, not the disk file.
  Reset hand pose     Recover a hand beside the puppet; reset pivot/rotation.
  Pin hand            Choose a rotation joint by clicking the preview.
  Lock joint          Prevent independent dragging and repinning.
  Align all puppets   Match other slots to the active body's width/location.
  Ctrl+Z              Undo in the current puppet's session history.
  Ctrl+Y              Redo (Ctrl+Shift+Z also works).
  F6 / F7 / F8        Default Left / Front / Right view keys.
  X / Exit            Close and save.

Developed by Hate and LaMDA.


## 19. OBS settings — Connection, character scenes and puppet scene overrides

Right-click any of the six character buttons, or one of the three puppet
profile buttons, and choose OBS settings. Rename remains in the same menu.
Opening this menu or dialog does not select that character or change the
live OBS scene.

Requires .NET Framework 4.5 or newer (Windows 11 includes a newer version).

First-time connection (OBS 28 or newer, WebSocket v5):
  1. In OBS, open Tools > WebSocket Server Settings and enable the server.
  2. In Puppet Desk, right-click a character > OBS settings.
  3. Leave Host at 127.0.0.1 when OBS runs on this same PC. Enter the port
     and password shown in OBS (the usual port is 4455).
  4. Click Test connection / refresh scenes. This fetches scenes from the
     current OBS scene collection and reports connection errors in the dialog.
  5. Tick Enable automatic OBS scene switching. This is one global switch.
  6. Choose Use the scene selected below, then select a scene from the list.
     You can also type its exact name, including spaces and capitalisation.
  7. Save, then click that character button to apply its scene.

Character scenes:
  Assign Vader to your Vader scene and Hate to your office scene, for example.
  Each character's three puppet profiles inherit that character's assignment
  by default. Front/Left/Right view changes do not change OBS scenes.
  Do not change the OBS scene leaves OBS on whatever scene it already has.

Optional profile overrides:
  Right-click a Puppet 1/2/3 button within the selected character.
  Use this character's scene: inherit the parent character's assignment.
  Use the scene selected below: this profile uses its own assigned scene.
  Do not change the OBS scene: this profile leaves OBS untouched, even when
  its parent character has an assigned scene.
  A character remembers its last puppet profile, so that profile's override
  also applies when you return to the character.

Operation:
  - Click a character or puppet profile to load it and request its scene.
  - Clicking the already-selected button retries the scene request. This is
    useful after starting OBS later or after restoring a lost connection.
  - Saving settings or starting Puppet Desk does not switch live output by
    itself. Click a character/profile when you are ready.
  - The request changes OBS's PROGRAM (live/output) scene, including when
    Studio Mode is on. It is not limited to Studio Mode's preview pane.
  - Requests run asynchronously with a five-second timeout; missing OBS,
    a wrong password, or a missing scene does not freeze puppet controls.
  - Rapid button changes cancel older pending requests in favour of the
    newest choice. A request already received by OBS may briefly take effect.
  - Reopen OBS settings to see the last switch result or test the connection.
  - This uses short connections for each operation. Connected successfully
    describes the completed test; it is not a permanent online indicator.
  - OBS settings are saved separately and are not part of Undo/Redo.
  - Changes to host, port, password, or the enable checkbox affect all
    characters. Scene choices belong to the button you right-clicked.
  - If you rename a scene in OBS or switch scene collections, refresh the
    list and update the saved scene assignment in Puppet Desk.

Set up your backdrop scenes in OBS first and include the PuppetDesk Puppet
capture in each appropriate scene. Puppet Desk changes scenes; it does not
create backdrops, sources, or scene collections. No Python or additional OBS
plugin is required for this connection on OBS 28 and newer.

OBS settings live in %APPDATA%\PuppetDesk\obs.txt. The password is protected
for your Windows user account rather than embedded in the EXE. Moving this
settings file to another Windows account can require re-entering the password.
The distributed ZIP contains no personal OBS settings or passwords.


## 20. Update Puppet Desk / Rollback Puppet Desk

Close Puppet Desk, then use the Update Puppet Desk desktop shortcut.
The first installation uses Install or Update Puppet Desk.cmd and its PS1 companion.
The public updater downloads the latest published stable Puppet Desk release.
No GitHub account or GitHub CLI is needed. Your settings remain in AppData.


## 21. Minimize puppet / Restore puppet

Use Minimize puppet under Puppet views to temporarily get the puppet off your
desktop. The same button changes to Restore puppet and brings it back.
OBS Window Capture may freeze or go blank while the puppet is minimized;
this is expected. Restore resumes normal drawing with the current character,
profile, view, hands and size. Existing dragging/resizing behaviour is retained.
The app keeps normal window coordinates separately from Windows' minimized
coordinates, so minimize/restore does not change saved placement or alignments.
Character/profile changes while minimized load normally and appear on restore.

RETURNING FROM THE EXPERIMENTAL BROWSER OUTPUT
The separate Browser output and Hide desktop puppet option have been removed.
In OBS, disable/remove Puppet Desk's Browser Source and re-enable your original
Window Capture source. If needed, select the PuppetDesk Puppet window again.
All your saved characters and OBS scene-switching assignments are preserved.
The old browser-output.txt settings file is ignored and can be left alone.
The app no longer runs the local Browser output server.


## 22. Donate

Click **Donate** at the top of **Puppet Desk Controls** to open the support dialog. It links to [@DemonSir696 on X](https://x.com/DemonSir696) and explains how to support future Puppet Desk projects, including Puppet Desk Audio Bridge.

The X Money instructions apply when that feature is available to your X account. Review the recipient and payment details in X before sending. Puppet Desk does not collect payment details or process donations. Click **Close** to return to the controls.


## 23. Hand Animation Studio

Click **Hand Animation Studio** in the main controls to create and edit hand animations. It replaces the former **Open Hands window** editor. The Studio contains both hand slots, joints, blue motion keyframes, an image-clip timeline and a preview of the puppet with its hands.

Use the Studio when making animations; use **Hands — Live Hand Puppeteering** when performing with saved animations. Both windows are independent: click a window to bring it forward. Their X buttons hide them without closing Puppet Desk or stopping an animation. Use the playback controls to stop it.

The output window is still named **PuppetDesk Puppet**, and the main controls are still **Puppet Desk Controls**. Keep OBS Window Capture pointed at **PuppetDesk Puppet**. The Studio and live hand windows are tool windows excluded from normal OBS capture matching.

### Left hand / Right hand / Load Left hand / Load Right hand

Choose the slot in the animation dropdown or with **Select Left hand** / **Select Right hand**. Load a PNG, JPG, BMP, GIF still image or a movie supported by Windows. The two hand slots play independently. They are separate layers, not automatically mirrored copies.

Use **Size**, **Rotate** and **Mirror** to match the artwork to your puppet. Size arrows change the width by one pixel; rotation arrows change the angle by one degree. Hold the left mouse button on an arrow to repeat the adjustment. Mouse-wheel scrolling does not adjust these sliders.

**Match size from Left** copies the left hand's width to the right hand; **Match size from Right** copies the right hand's width to the left. Each hand retains its own image proportions.

### Preview / Hand joints

The embedded preview shows the puppet and both hands. Select the layer to manipulate, then hold the left mouse button and drag in the preview. The Studio preview moves the selected layer.

Use **Pin left hand** / **Pin right hand** to pick a rotation pivot on that hand. Rotation then works around that point. **Lock joint** prevents independent dragging and repinning; unlock it to reposition the hand. Collapse **Hand joints** once configured. Hands and their saved motion are relative to the puppet, so they follow its position and scale.

### Create an animation: facepalm example

1. Load the facepalm hand, select it and set **Time (seconds)** to 0.00.
2. Position, resize and rotate it for the start of the gesture. Click **Add / replace key**.
3. Set the time to 1.00, move the hand to the forehead and click **Add / replace key**.
4. Copy that key and paste it later to hold the pose. Paste a copy of the first key later still to return to the starting pose.
5. Enter an **Animation name**, click **Save**, then **Play animation**.

## 24. Hand keyframes — automatic saving, timing, copy and paste

### Add / replace key / Update frame pose

**Add / replace key** captures position, size, rotation, pivot, mirror and visibility at the displayed time. A blue circle marks the key. At an occupied time it replaces that key. **Update frame pose** also captures the current pose at the displayed time.

Position, size and rotation interpolate between keys. Mirror and visibility switch at key times. A still-image clip can hold a pose over its duration; use multiple motion keys to animate movement.

### Automatic keyframe saving

Select an existing blue keyframe and change the hand's position in the Studio preview, size, rotation or mirror setting. Those edits save automatically: you do not need to press **Add / replace key** again. Preview dragging saves when you release the mouse.

At an exact existing key time, pose adjustments can also update that key. Between existing keys, creating a new motion key remains an explicit **Add / replace key** action. Scrubbing, playback and live puppeteering do not automatically rewrite the animation.

### Blue keyframe circles

Click a blue circle to select and preview it. Drag it left or right to retime it; release to save. Keys stop before neighbouring keys to avoid overwriting them accidentally. Selected dots remain selected while using the time arrows or supported pose controls.

### Time arrows / Time (seconds) / Preview time

With a blue dot selected, the time arrows move that key by 0.10 seconds and save its timing. Without a selected dot, they rewind or advance the preview time. Hold an arrow to repeat.

The orange playhead shows the current time. Click or drag empty motion-timeline space to scrub. Entering a value in **Time (seconds)** chooses the time; click **Preview time** to apply the animation there. The timeline supports up to 120 seconds.

### Copy keyframe / Paste keyframe

Right-click a blue dot and choose **Copy keyframe**. Right-click the motion timeline at the desired time and choose **Paste keyframe**. The copied pose is saved at that time. Copying makes a snapshot, so later edits to the original do not change the copy.

At an occupied time the option says **Paste keyframe (replace here)**. Copy once and paste repeatedly to create holds or repeated poses. The clipboard copy lasts for the app session.

### Delete key / Clear keys

Select a dot and use **Delete key** to remove it. **Clear keys** asks before clearing the animation. Neither deletes the original artwork. See **Undo keyframe / Redo keyframe** below.

## 25. Image-clip timeline — add, drag, stretch, split and replace

The thumbnail strip controls which still image is displayed and for how long. The blue-dot timeline controls movement. Use them together for an open hand changing into a clenched fist while the arm moves.

### Add image frame / drag and drop

Use **Add image frame** to browse for an image, or drag an image file from Windows into empty image-timeline space at the desired time. Adding an image frame creates a pose key and a timed image clip. PNG, JPG/JPEG, BMP and GIF still images are supported.

The file picker remains available; drag and drop is an additional option.

### Stretch / trim / move a clip

Select a thumbnail clip. Drag its left or right edge to shorten or extend the image's displayed duration. Drag the clip body left or right to move it. Neighbouring clips limit movement and trimming so clips do not overlap.

The image strip and blue keys are separate: moving or trimming an image clip does not retime the motion keys. Gaps in the image sequence hide the hand during those gaps.

### Split at playhead / Delete clip

Place the orange playhead inside a clip and click **Split at playhead**. This makes two image segments without changing the existing motion keys. Select a clip and click **Delete clip** to remove that segment.

### Replace an image by dropping onto a clip

Drop one image file directly onto an existing clip to replace its picture. This preserves that clip's timing and the animation's position, size and rotation. You can split a clip, then replace just one segment—for example, an open hand becoming a fist. The same drop-to-replace action works on a blue key or a thumbnail in **View details**.

### Movie files and current editing limits

Movie files still work as hand layers, and keyframes can animate their position, size and rotation. The hand's movie **Play / Pause** controls video playback separately from **Play animation**.

The thumbnail clip editor edits still-image durations. It does not trim movie footage, change video playback speed, stretch video or export a rendered video. GIF files are treated as still images. Movie decoding depends on the codecs available in Windows.

### View details

Click **View details** to open the keyframe information and image list in a separate window. Close it with X when finished; the Studio stays open.

## 26. Animation name / Save / Saved hands / Load saved / Undo keyframe

### Saving and character-specific hand libraries

Enter an **Animation name**, then click **Save**. Click **Save** after changing the name or **Loop** preference. Adding, replacing, deleting, pasting and retiming keys, editing image clips and adjusting an existing key's pose save automatically.

Each of the six characters has its own saved hand library. The three puppet profiles within that character share its library, while each profile retains its own loaded hand slots and setup. A hand saved for Agent Hate does not appear in Vader's library.

There is one saved animation per full hand-file path within each character. Different files—even identically named files in different folders—can have separate presets. Using the same file in another character gives that character its own preset. Renaming an animation changes its label; it does not create a second preset for the same file.

Choose a preset in **Saved hands** and click **Load saved**. The artwork and animation load into the selected hand slot at its first saved pose. Playback does not begin automatically. Save a facepalm, load and save a different martini hand, then reload either gesture whenever needed.

### Play animation / Pause / Stop / restore / Loop

**Play animation** plays or resumes the saved gesture. **Pause** holds the current pose. A non-looping gesture holds its final pose; **Loop** repeats it. **Stop / restore** returns to the pose from before preview/playback. Switching character or puppet profile stops its animations.

### Undo keyframe / Redo keyframe

The Studio's **Undo keyframe** and **Redo keyframe** buttons reverse and restore saved animation edits, including dropped/replaced pictures, added or deleted keys, timing changes, clip splits/trims and automatically saved pose changes.

Use **Ctrl+Z** to undo and **Ctrl+Y** or **Ctrl+Shift+Z** to redo while the Studio is active. Animation history is separate from the main controls' puppet setup history. It is session history, not a permanent version archive; up to 100 animation edits are retained per hand/character during the session.

### Saved animation files and older presets

Public presets are saved under **%APPDATA%\PuppetDesk\hand-animations\character-1** through **character-6**. Updates preserve these settings. Existing legacy presets are copied into a character's library when their hand file is loaded; the legacy copy is retained.

Back up the hand-animations folder and the original image/movie files. Presets store file paths, not embedded artwork. Moving or renaming artwork can break the association. There is no portable animation export/import button. Public and development settings remain separate.

## 27. Hands — Live Hand Puppeteering

Click the wide **Hands — Live Hand Puppeteering** button in the main controls. This opens the performance window for using saved hands without keeping the Studio open. Its header identifies the active character and puppet profile.

### Load saved / Load file...

Each hand has a dropdown listing the active character's saved animations. Pick one and click **Load saved**. Use **Load file...** to choose artwork directly. Changing character refreshes the libraries to that character's hands.

### Select left hand / Select right hand / drag in the preview

Use the selection buttons or click a visible hand in the preview. Hold the left mouse button and move it to puppet the hand in real time. Dragging pauses that hand's keyframe playback. Unlock its joint in the Studio if you need to move a locked hand.

Live dragging changes the performance pose; it does not overwrite the saved keyframes. The selected hand is highlighted in the preview.

### Play / Pause / Stop

Each hand has independent playback controls for its saved keyframe animation. These are separate from a movie file's own playback controls.

### Reset to original position

This stops the hand's keyframe animation and restores the original pose remembered for that loaded hand in the current character/profile. Loading a saved animation establishes its starting pose for reset. Use it to recover after moving a hand during a performance.

### Hand off / Hand on / Size / Rotate / Mirror

The visibility button says what clicking it will do: **Hand off** hides a visible hand; **Hand on** shows it. Changing selection does not hide the other hand.

Adjust size, rotation and mirroring independently for either hand. The size and rotation arrows support press-and-hold repetition. Live adjustments do not rewrite saved animation keys.

### Open Hand Animation Studio / window behaviour / hotkeys

Click **Open Hand Animation Studio** when you need to edit or create a saved animation. Close either hand window with X to hide it; playback can continue.

Click the main controls, Studio or live window to bring that window forward. With **Global (also active in other applications)** checked, the assigned Left / Front / Right hotkeys remain active while either hand window is active. With Global off, view hotkeys are restricted to the main controls.
