---
id: releaseNotes
title: Release Notes
---

# Release notes

All notable changes to ModuOps

## ModuOps 5.6.0

- adds report for Module/Town equipment requests
  - ability to filter report by Module/Town or owner
  - ability to export report in csv, tsv or print
- navigate to Layout screen after creating a new layout
- adds open source license to comply with Livecode license
- clean up about box to comply with Livecode license
- upgrade to Livecode v9.6.13

## ModuOps 5.5.1

- changes to switchlist format to provide more room for reporting marks

## ModuOps 5.5.0

- adds switch list option to trainlists
- change field labeled `Code` to `AAR code` on Equipment edit screen

## ModuOps 5.4.1

- fix issue where Courier font name changed over the years
- re-enable 1/2 page MRBT trainlist

## ModuOps 5.4.0

- updated UI on Modules/Towns screen
- modules can now be added and removed from layout on Modules/Towns screen
- adds Layout screen where information about the layout can be added
- Preferences moved to Preferences menu (Windows Edit menu) or Settings menu (Mac OS X Application menu)
- relabeled "Random" scheduling to "Mad River and Big Timber" on Trainlist screen
- adds notice on train route screen when Mad River and Big Timber is selected on Trainlist screen
- fixed train module limit so it now correctly limits modules (does not apply to Mad River and Big Timber scheduler)
- drop zone ref field now supports 11 character input. field was formally zone id.
- fixed car length of 0 results in odd trainlists
- misc other bug fixes

## ModuOps 5.3.1

- clean up default UI when no layout file is opened
- adds an option on preference screen to open last layout file when app opens
- fix issues related to the new recently opened menu

## ModuOps 5.3.0

- can select multiple car types when creating work orders. Each car type selected creates a work order for that car type.
- double clicking a ModuOps data file will open the file in ModuOps once you tell your system to open .mop2 files with ModuOps.
- add a recently opened files menu showing, well, recently opened files :-)

## ModuOps 5.2.0

- finally, all versions are code signed
- adds minimum length to trains
- fixes issue where ModuOps would not work on macOS Sonoma 14.1 or later
- bug fixes
- Native Apple Silicon binary
- legacy version 2018.1.1 no longer available for download

## ModuOps 5.1.3

- fix issue where a blank line can be inserted into train routes
- add notification when new version is released

## ModuOps 5.1.2

- Disable navigation when first launched until a file is opened.

## ModuOps 5.1.1

### Breaking Changes

#### File Format

The file format is changed. This allows for faster access to the data in the files. Overall the performance has increased with the new file format. New files are saved with the `.mop2` extension.

Old files are not compatible with this version. Conversion process:

1. Launch ModuOps v5.1.1 or later
1. Select `Convert...` in the File menu
1. Step 1 is to create a new, blank data file, name the file and save it where you will be able to find it again
1. Click `Save`
1. Step 2 locate the old .mop data file and select it

The data in the file is converted to the new format and saved in the `.mop2` file. Going forward you will always use the `.mop2` file.

### Changes

- version numbers now follow Semantic Versioning standard (aka. MAJOR.MINOR.PATCH)
- data layer completely re-written
- renamed scheduling engines to what they do, "random" and "use cars/week"
- drop zone favoring slider to vary probability of drop zone being re-used
- supports native Apple Silicon hardware
- save menu removed, no longer needed
- close menu removed, no longer needed
- Mac versions now code signed

#### Import/Export Module file

The file format of import/export files now uses standard JSON format. Unfortunately there is no conversion process for the old files. If you need existing files converted please contact Bob Hall directly.

## ModuOps 2017.2.4

- Now includes installers for both macOS and Windows
- Workaround of bug in compiler for Train Route re-ordering
- Fixed new Consignees were not scheduled
- Fixed error when loading files and there is no data
- Select File dialog no longer opens when launched
- Moved to Levure Framework
- Built with Livecode 8.1.7

## ModuOps 2017.1

- Drop Zone can now be designated as a Yard/Interchange/Staging
- Trains must originate and terminate at a Yard/Interchange/Staging
- Added Yard storage capacity based on percent or standard deviation of car requests
- Added AAR Code field to Car Types
- Added AAR Code as an option on Trainlists
- Added Report module (more reports coming soon)
- Fixed/Expanded options for Train Type
- Built with Livecode 8.1.3

**NOTICE**
:::important
NEW Added "Yards" to the system. Old data files are compatible with one small caveat. Trains must now originate from a Drop Zone that is designated as a Yard. Until you define at least 1 Yard and assign trains to originate and terminate at Yards, YOU WILL NOT BE ABLE TO GENERATE TRAINLISTS.

This change was unavoidable and needed for future enhancements.

Yards are Drop Zones marked as a Yard/Interchange/Staging. A Drop Zone designated as a yard should not have any Equipment Orders assigned it. The length of the drop zone should be the total length of all tracks making up the yard (aka. If there are 6 tracks in the yard each 500' long, the Drop Zone length should be 6 x 500 = 3000).

Trains must specify an origin and destination that is a Yard/Interchange/Staging drop zone. Trainlists are not generated unless a train originates and terminates at a Yard/Interchange/Staging drop zone.
:::

## ModuOps 2016.8

- This is the version of ModuOps used at the 2016 National Train Show in Indianapolis!
- Changed versioning numbers to be the "year.release" Number (aka. 2016.7)
- Compiled with Livecode 8.0.2rc4
- Fixed a bug when there is no route for a train
- When quitting, ModuOps now asks if you'd like to save your data
- Small performance enhancements

## ModuOps 1.0.0drc3

- Changes made on Edit screens are now saved automatically when leaving the screen
- When quitting, Application now clears out all data after saving
- When opening, Application displays file dialog to open a data file
- fixed an issue where windows was not adding the .mop extension to data files
- fixed link to the manual

## ModuOps 1.0.0rc2

- Fixed a bug on the Train editing screen which prevented applying any changes to Trains.

## ModuOps 1.0.0rc1

- Preferences are now saved/loaded between sessions.
- Some optimization of code
- Cleaned up some UI issues
- Fixed formatting issues with MRBT Full page printout.
- Remove MRBT 1/2-page printout option

## ModuOps 1.0.0d61

- Removed scheduler selection on Preferences screen
- Report that Windows version d60 has issues with corrupting data files. I've checked and rechecked and don't see anything. Let me know if it continues and what version of Windows you are running (I do testing on Windows 10 only)

## ModuOps 1.0.0d60

- Equipment Register now sorts by Length+Description+Class
- Adding a specific Consignee to route now in Route direction
- Added ability to Not Service Consignee when creating train route
- Fixed issues with output formatting
- Mac version is crashing sometimes on initial launch. Just re-launch and you should be good to go. No fix yet but looking into the cause.

## ModuOps 1.0.0d59

- Added Remarks to Consignee's
- Module remarks can now be multiple lines
- About ModuOps menu now works
- Fixed Limit Modules in Train Edit screen not updating.
- Decided to leave Windows disabled buttons alone. I don't like the way Windows shows disabled buttons but this it is what it is. I'll wait and see if any comments come in about not being able to tell what is enabled/disabled...

## ModuOps 1.0.0d58

- Train Orders and Crew Instructions working
- Trains with no car requests now print trainlists (Passenger trains)
- All Delete and Clone buttons should be working
- Changed "Spots" to "Drop Zones" as the terminology caused confusion with how the software defined a Spot versus how the Railroad world defines a Spot.
- Fixed graphic issue on Windows with sidebar menu
- Experimenting on Windows how to best show buttons that are disabled. - Disabled buttons are not as obvious on Windows compared to macOS.
- fixed position of Train Overview and Crew Instruction fields
- numeric entry fields now only accept numbers
- all data entry fields default to selecting all text when tabbing between fields.
- Fixed tab order on Edit Module/Town screen
- Re-ordered Equipment Needs field columns
- fixed color on scrolling fields
- fixed some UI issues that I came across

## What's Not Working...

Drop Zones in a Module/Town have a "Direction" which is the direction the zone faces to be a trailing drop (A or B). Zones that are accessible by both sides of a module are not supported (faces A & B). For now, designate these zones as either an A or B.

## Feedback and Bugs

Your feedback and bug reports are important to us. There's big plans for ModuOps but we can't get there without your help.

Please use our Forums to post Feedback you have on the software.

Bug reports are tracked on Github. However, we understand that you may not be familiar with the system so please feel free to post bug reports in our Forums as well.
