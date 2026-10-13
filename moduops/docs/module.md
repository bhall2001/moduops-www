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

**On the left** is the list of modules/towns in your layout, sorted by name. Above the list are four buttons:

| Button   | What it does                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| `New`    | Creates a new module/town.                                                                                   |
| `Add`    | Adds one or more modules/towns from files. See [Add modules/towns from files](#add-modulestowns-from-files). |
| `Edit`   | Opens the selected module/town for editing.                                                                  |
| `Delete` | Deletes the selected module/town.                                                                            |

Click a module/town to select it. Double-click it to open it for editing.

If your layout has no modules yet, the list shows "No modules" and reminds you to click `New`.

**On the right** you see the selected module/town. Its name is shown at the top, with the owner below it if one is entered. Below that are three tabs. Each tab shows how many items it holds, for example `Consignees (4)`.

:::info[Screenshot needed]
Modules/Towns screen with a module selected and the Consignees tab showing.
:::

### Consignees tab

Lists the businesses on this module/town that request equipment. Use the `New`, `Edit` and `Delete` buttons to manage them. Double-click a consignee to open it.

| Column  | Description                                    |
| ------- | ---------------------------------------------- |
| Name    | The consignee name.                            |
| Req     | How many equipment requests the consignee has. |
| Producers | How many of those requests are Producers. Shows a dash for none. |
| Consumers | How many of those requests are Consumers. Shows a dash for none. |
| Remarks | The consignee's remarks.                       |

See [Consignees](consignees.md) for details.

### Drop Zones tab

Lists the sections of track on this module/town where equipment can be set out. Use the `New`, `Edit`, `Clone` and `Delete` buttons to manage them. Double-click a drop zone to open it.

| Column    | Description                               |
| --------- | ----------------------------------------- |
| Spot      | The drop zone name.                       |
| Length    | The drop zone length.                     |
| Direction | `A`, `B` or `AB` (A and B).               |
| Active    | `Yes` or `No`.                            |
| Yard      | `Yes` if the drop zone represents a yard. |

See [Drop Zones](drop-zones.md) for details.

### Equipment tab

A read-only summary of the equipment types this module/town uses. The list is built from the equipment requests of all its consignees. The `Requests` column shows how many requests use each type.

This is a quick way to see what rolling stock a module/town needs before an operating session. To change equipment types, use the [Equipment Register](equipment.md).

## Create a module/town

1. Click `Modules/Towns` in the sidebar menu.
2. Click `New` above the module/town list.
3. Fill in the fields. `Name` and `Short Name` are required.
4. Click `Save`.

You return to the Modules/Towns screen and the new module/town appears in the list.

## Edit a module/town

1. Select a module/town in the list.
2. Click `Edit`.
3. Make your changes and click `Save`. Click `Cancel` to leave without saving.

:::tip
Double-click a module/town in the list to open it for editing.
:::

If you try to leave the screen with unsaved changes, ModuOps asks if you are sure. Click `Stay on Page` to keep editing, or `Leave Page` to throw away your changes.

## Module/town fields

| Field                   | Description                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| `Name` (required)       | The name of the module/town.                                                                             |
| `Short Name` (required) | An abbreviated name. Used where space is tight, such as the timetable, string diagram and station order. |
| `Owner`                 | The owner of the module/town.                                                                            |
| `Size`                  | A short description of the size of the module/town.                                                      |
| `City`                  | The city the module/town depicts.                                                                        |
| `State`                 | The state the module/town depicts.                                                                       |
| `Description`           | A short description of the module/town.                                                                  |
| `Remarks`               | Notes for crews about operating this module/town. Remarks are printed on trainlists that have work here. |

### Formatting remarks

The `Remarks` box has a small toolbar:

- **Bold** and _Italic_ buttons (or Ctrl+B / Ctrl+I, Cmd on a Mac).
- `Insert checklist item` adds `[ ] ` for a tick box.
- `Insert indent` adds four spaces.
- `Insert underline input` adds a blank line (`________________`) for crews to write on.
- `½ Page` shows the box at half-page width, so you can see how the text will wrap on a half-page trainlist. It's on by default. ModuOps remembers your choice, and it applies to every formatted text box.

Press Enter for a new line.

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

## Delete a module/town

1. Select a module/town in the list.
2. Click `Delete`.
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
- There is no `Save` button to save a single module/town to a file.
- New `Equipment` tab, and new `Req`, `Producers` and `Consumers` columns on the Consignees tab.
- Remarks now have a formatting toolbar. You no longer type `<b></b>` or `<i></i>` tags.
- The module edit screen uses `Save` and `Cancel` instead of `Done`.
