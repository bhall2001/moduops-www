---
id: module
title: Modules/Towns
sidebar_label: Modules/Towns
---

# Modules/Towns

The Modules/Towns screen is where you set up the places on your layout. Each module/town holds its own consignees, drop zones and equipment requests. ModuOps uses all of this to build trainlists for your trains.

Click `Modules/Towns` in the sidebar menu to open the screen.

## The Modules/Towns screen

The screen has two parts.

**On the left** is the list of modules/towns in your layout, sorted by name. Each one shows its name, with the owner underneath if one is entered. Type in the `Jump to module...` box at the top to narrow the list to modules/towns whose name contains what you typed. It shows "No matches" if nothing does.

Below the search box are four buttons:

| Button   | What it does                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| `New`    | Creates a new module/town.                                                                                   |
| `Add`    | Adds one or more modules/towns from files. See [Add modules/towns from files](#add-modulestowns-from-files). |
| `Export` | Saves the selected module/town to a file you can share. See [Export a module/town](#export-a-moduletown).   |
| `Del`    | Deletes the selected module/town. See [Delete a module/town](#delete-a-moduletown).                          |

Click a module/town to select it. Until you do, the right side says "Select a module to view consignees and drop zones". If your layout has no modules yet, the list shows "No modules" and reminds you to click `New`.

**On the right** you see the selected module/town. Its name is shown at the top, with the owner below it if one is entered. Below that are four tabs: `Info`, `Consignees`, `Drop Zones` and `Equipment`. `Info` is the one that opens first. The other three show how many items they hold, for example `Consignees (4)`.

:::info[Screenshot needed]
Modules/Towns screen with a module selected and the Info tab showing.
:::

### Info tab

The `Info` tab holds the module/town's own details, and you edit them right there. There's no separate edit screen for an existing module/town. The `New` form uses the same fields.

:::info[Screenshot needed]
The Info tab with its fields and the Save and Revert buttons.
:::

| Field                   | Description                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| `Name` (required)       | The name of the module/town.                                                                             |
| `Short Name` (required) | An abbreviated name. Used where space is tight, such as the timetable, string diagram and station order. |
| `Owner` (optional)      | The owner of the module/town. It shows under the name in the list and at the top of the screen.          |
| `Size` (optional)       | A short description of the size of the module/town.                                                      |
| `City` (optional)       | The city the module/town depicts.                                                                        |
| `State` (optional)      | The state the module/town depicts.                                                                       |
| `Description` (optional) | A short description of the module/town.                                                                 |
| `Remarks` (optional)    | Notes for crews about operating this module/town. Remarks are printed on trainlists that have work here. See [Formatting remarks](#formatting-remarks). |
| `Passing Track Length` (optional) | The length of the module/town's passing track. Whole numbers only.                             |

If `Name` or `Short Name` is blank, ModuOps won't save and shows "Name is required" or "Short name is required" under the field.

Under the fields are two buttons:

| Button   | What it does |
| -------- | ------------ |
| `Save`   | Keeps your changes and shows "Module saved" at the bottom of the screen. |
| `Revert` | Throws your changes away and puts back what was saved. |

Both stay greyed out until you change something.

Changes on the `Info` tab stay put while you look at the other tabs, so you can check a consignee and come back to finish. If you click another module/town before saving, ModuOps asks "Module details have unsaved changes. Discard them and switch modules?" Click `Stay` to go back and save, or `Discard` to lose the changes and move on. `Export` is greyed out while there are unsaved changes, so the file always matches what's saved.

#### Formatting remarks

The `Remarks` box has a small toolbar:

- **Bold** and _Italic_ buttons (or Ctrl+B / Ctrl+I, Cmd on a Mac).
- `Insert checklist item` adds `[ ] ` for a tick box.
- `Insert indent` adds four spaces.
- `Insert underline input` adds a blank line (`________________`) for crews to write on.
- `½ Page` shows the box at half-page width, so you can see how the text will wrap on a half-page trainlist. It's on by default. ModuOps remembers your choice, and it applies to every formatted text box.

Press Enter for a new line.

### Consignees tab

Lists the businesses on this module/town that request equipment. Use the `New`, `Edit` and `Delete` buttons to manage them. Double-click a consignee to open it.

| Column  | Description                                    |
| ------- | ---------------------------------------------- |
| Name    | The consignee name.                            |
| Req     | How many equipment requests the consignee has. |
| Producers | How many of those requests are Producers. Shows a dash for none. |
| Consumers | How many of those requests are Consumers. Shows a dash for none. |
| Remarks | The consignee's remarks.                       |

Hover over the `Producers` or `Consumers` heading for a short explanation. If no request in the layout uses that Flow Type yet, the tooltip also says how to start using it.

`New` and `Edit` open the consignee form, which has these fields:

| Field                | Description |
| -------------------- | ----------- |
| `Name` (required)    | The name of the consignee. ModuOps shows "Name is required" if it's blank. |
| `Remarks` (optional) | Notes a crew may need when working this consignee. Printed on the trainlist when the consignee gets work. |

Equipment requests are added on the consignee form once it's saved. See [Consignees](consignees.md) and [Equipment Requests](equipment-requests.md) for details.

### Drop Zones tab

Lists the sections of track on this module/town where equipment can be set out. Use the `New`, `Edit`, `Clone` and `Delete` buttons to manage them. Double-click a drop zone to open it.

| Column    | Description                               |
| --------- | ----------------------------------------- |
| Spot      | The drop zone name.                       |
| Length    | The drop zone length.                     |
| Direction | `A`, `B` or `AB` (A and B).               |
| Active    | `Yes` or `No`.                            |

`New`, `Edit` and `Clone` open the drop zone form, which has these fields:

| Field                              | Description |
| ---------------------------------- | ----------- |
| `Drop Zone Name` (required)        | The name of the drop zone. ModuOps shows "Drop Zone Name is required" if it's blank. |
| `Length` (required)                | How much track the drop zone has, in your layout's unit. |
| `Zone Reference` (optional)        | A short code for the track, up to 10 characters. |
| `Direction` (optional)             | `A Only`, `B Only` or `A and B`. New drop zones start as `A Only`. |
| `Active` (optional)                | Checked by default. Uncheck to take the drop zone out of use. |
| `Train Origin/Terminus` (optional) | Check this for a yard, staging or interchange track where trains start or end. |

See [Drop Zones](drop-zones.md) for details.

### Equipment tab

A read-only summary of the equipment types this module/town uses. The list is built from the equipment requests of all its consignees. The `Requests` column shows how many requests use each type.

This is a quick way to see what rolling stock a module/town needs before an operating session. To change equipment types, use the [Equipment Register](equipment.md).

## Create a module/town

1. Click `Modules/Towns` in the sidebar menu.
2. Click `New` above the module/town list.
3. Fill in the fields (see the [Info tab](#info-tab) table). `Name` and `Short Name` are required. Everything else is optional.
4. Click `Save`.

You return to the Modules/Towns screen and the new module/town appears in the list. From then on you edit it on the `Info` tab.

## Edit a module/town

1. Click the module/town in the list. The `Info` tab opens.
2. Change the fields you need.
3. Click `Save`. Click `Revert` instead to undo your changes.

ModuOps shows "Module saved" when it's done. If `Name` or `Short Name` is blank, it won't save and shows a message under the field.

## Add modules/towns from files

Module/town files, such as those on the [ModuOps Xchange](xchange.md), can be added to your layout. You can add several at once.

1. Click `Modules/Towns` in the sidebar menu.
2. Click `Add`.
3. In the file dialog, find the module/town file(s). Select one, or select several using your operating system's usual keys (Ctrl or Shift click, Cmd on a Mac).
4. Click `Open`.

Each module/town is added with its consignees, drop zones and equipment requests. A message at the bottom of the screen tells you what was added, for example how many consignees, drop zones and car requests came in.

A module/town that's already in your layout is not added again. The message lists any that were skipped, and if every file was a duplicate it says "All selected modules already exist". Equipment types are matched up too. If your layout already has an equipment type with the same class, description and length, the module uses it rather than making a copy, and the message tells you how many were reused. Anything new goes into your [Equipment Register](equipment.md).

:::tip
After adding a module/town, check its drop zones and equipment requests. Imported equipment requests have no Flow Type set. See [Equipment Requests](equipment-requests.md).
:::

## Export a module/town

1. Click the module/town in the list. Save any changes on the `Info` tab first.
2. Click `Export`.
3. Choose where to save the file and click `Save`. It's a `Module JSON` (`.json`) file named after the module/town.

ModuOps shows "Exported to" and the file's location. The file holds the module/town with its consignees, drop zones and equipment requests, ready to share or add to another layout with `Add`.

## Delete a module/town

1. Select a module/town in the list.
2. Click `Del`.
3. Click `Delete` in the confirmation box.

:::warning
Deleting a module/town also deletes all of its consignees, drop zones and equipment requests. Any trainlist lines for those requests are removed too. This cannot be undone.

Deleting a module/town does not change your trains. Check any train routes that used it. See [Train Route](train-route.md).
:::

## Changes from version 5

- `Remove` is now `Delete`, with a clear warning about what is deleted.
- Deleting a module/town no longer removes unused equipment types or train route entries.
- `Depicted city` is now `City`. `Short name` is now `Short Name`.
- `Add` can add several module/town files at once, skips modules already in the layout, and reuses matching equipment types.
- The v5 `Save` button for saving a module/town to a file is now `Export`.
- New `Equipment` tab, and new `Req`, `Producers` and `Consumers` columns on the Consignees tab.
- Remarks now have a formatting toolbar. You no longer type `<b></b>` or `<i></i>` tags.
- An existing module/town is edited on the new `Info` tab, with `Save` and `Revert` buttons, instead of a separate screen with `Done`.
- A `Jump to module...` box filters the module/town list.
