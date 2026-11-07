# Puppet Desk 1.9.1

Application build: 86.

- Development: Licence Administration opens as a separate window, so Puppet Desk remains usable while the licence list is open. Opening administration again brings the existing window forward.
- Both editions: saves the installation identity before first-use dialogs and serializes licence storage across running copies, preventing simultaneous first launches from generating separate identities.
- Protects a newer saved revocation receipt from being overwritten by an older running copy.
- Existing licence numbers, names, artwork and settings are retained.

The administration list contains installation records, not a login history or verified people. Multiple launches normally reuse one record. Removing local licence data or using another Windows account can produce a new identity; this update does not add account-based activation or device identification.

Close Puppet Desk and run **Update Puppet Desk**. For a first installation, download **Install-Puppet-Desk.exe**, which installs the app and updater. The owner licensing server package does not need updating for this release.
