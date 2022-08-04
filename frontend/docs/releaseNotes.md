---
id: releaseNotes
title: Release Notes
---

# Release notes

All notable changes to ModuOps

## Moduops 2022.1.1 (coming soon...)

### Breaking Changes

#### File Format

The file format is changed. This allows for faster access to the data in the files. Overall the performance has increased with the new file format. New files are saved with the `.mop2` extension.

Old files are not compatible with this version. Conversion process:

1. Launch ModuOps v2022.1.1 or later.
1. Select `New File` in th File menu of ModuOps v2022.1.1 or later.
1. Name the file and save it where you will be able to find it again.
1. Next select `Convert...` in the File menu.
1. Locate the old .mop data file and select it.

The data in the file is converted to the new format and saved in the `.mop2` file. Going forward you will always use the `.mop2` file.

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