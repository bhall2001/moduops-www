---
id: upgrading
title: Upgrading from Version 5
sidebar_label: Upgrading from v5
---

# Upgrading from Version 5

ModuOps version 6 is a complete rebuild of the application. Your version 5 layouts come along with you, and most screens will feel familiar. This page explains how to bring a version 5 layout file into version 6 and lists what has been renamed, moved, added, or removed.

## Opening a version 5 layout

Version 5 layout files use the `.mop2` extension. Version 6 uses a new `.mop3` format. ModuOps never changes a `.mop2` file. Instead, it makes a `.mop3` copy the first time you open it.

1. In the `File` menu select `Open Layout...`, or click `Open Layout` on the [Dashboard](dashboard.md).
2. Select your `.mop2` file.
3. The `Migration Required` dialog opens. It shows:
   - `Source:` the full path of your `.mop2` file.
   - `Target:` the new `.mop3` file. It's always created in the same folder, with the same name.
   - `Your original file will be preserved.`
4. Click `Migrate & Open`.
5. The `Set Length Unit & Scale` step appears next. See below.

When you're done, the new `.mop3` layout is open and added to `File` > `Open Recent Layout`. From now on, open the `.mop3` file. Your original `.mop2` file is untouched and still works in version 5.

:::warning
If a `.mop3` file with the same name already exists in that folder, the dialog warns `The target file already exists. Migrating will overwrite it.` and the button reads `Overwrite & Migrate`. Click `Cancel` if you want to keep that file, and move or rename it first.
:::

:::info[Screenshot needed]
The Migration Required dialog showing the Source and Target files.
:::

If something goes wrong during migration, the error appears in a red box inside the dialog and no `.mop3` file is left behind.

## Set Length Unit & Scale

Version 6 lets each layout have a length unit and a scale (see [Layout](layout.md)). Because a version 5 file didn't record either, ModuOps asks you right after migrating:

> `Choose the unit of measure and scale ratio for this layout. This applies to all lengths (car types, drop zones, trains).`

1. Pick a `Length Unit`: `Feet`, `Centimeters`, `Meters`, or `Units (dimensionless)`.
2. Pick your `Scale` (for example `HO (1:87.1)`), or `Custom...` to enter your own ratio.
3. Click `Continue`.

This step has to be completed. There's no Cancel button.

:::warning
**Nothing is converted in this step.** You're telling ModuOps what the numbers already in your layout mean. If your version 5 lengths are in scale feet, as most layouts are, choose `Feet` and your scale so your lengths stay exactly as they were.
:::

Your choice is also saved as the default unit and scale in [Preferences](preferences.md), so new layouts start with the same settings.

If you later want to switch the layout to a different unit or scale and convert all the lengths, use the [Layout](layout.md) screen.

## What's changed

Here's a summary of the differences a version 5 user will notice, grouped by area. Each linked page has the details.

### Files, menus, and navigation

- Layout files use the `.mop3` extension. `File` > `Convert...` is gone; opening a `.mop2` file converts it automatically.
- `File` > `New Layout...` is now `File` > `New Layout`. The Dashboard shows `New Layout` and `Open Layout` buttons when no layout is open.
- `File` > `Open Recent Layout` lists `.mop3` files only, and has a `Clear Recent` item. Missing files are removed from the list for you.
- **Preferences** moved from the `Edit` menu (Windows) or application menu (Mac) to the sidebar, under `Settings` > `Preferences`. See [Preferences](preferences.md).
- The Dashboard's groups of menus are gone. Use the sidebar to move between screens. See [Dashboard](dashboard.md).
- The Dashboard count cards are renamed: "Rolling stock" is now `Equipment Types`, and "Car Requests" is now `Equipment Requests`.
- The layout name is no longer shown at the top of every screen.
- Forms have `Save` and `Cancel` buttons instead of `Done`. If you try to leave a form with unsaved changes, ModuOps asks before discarding them.
- Remarks and instruction fields have a formatting toolbar (bold, italic, checklist item, indent, underline blank, and a `½ Page` width preview). You no longer type `<b>` or `<i>` tags by hand. Formatting from version 5 files still displays.
- **New:** light and dark themes, automatic updates (Mac and Windows), and an `About ModuOps` window. See [Preferences](preferences.md).

### Layout

- "Layout/Railroad Name" is now `Layout Name`, and "Ops Chief" is now `Operations Chief`.
- **New:** a `Length & Scale` card with a length unit and scale for the whole layout, and a `Convert All Lengths?` option when you change them. See [Layout](layout.md).
- **New:** the Real-World Measurement converter next to length fields turns a tape-measure reading into your layout's unit and scale.

### Equipment Register

- "Classification" is now `Class`, "Car description" is `Description`, and "AAR Code" is now `Code` (up to 4 characters). `Short Description` is limited to 12 characters.
- Lengths are whole numbers, labeled with the layout's unit.
- There's an `Edit` button as well as double-click, and a `Clone` button.
- A `Code` is no longer required for switch lists. The `SwitchList` format uses the Short Description when there's no Code.

See [Equipment Register](equipment.md).

### Modules/Towns, drop zones, and consignees

- "Remove" module is now `Delete`, with a warning that lists everything that will be deleted along with it.
- "Depicted city" is now `City`; "Short name" is now `Short Name`.
- On drop zones: "Name" is now `Drop Zone Name`, "Zone Ref" is now `Zone Reference` (now optional), "Faces" is now `Direction` with a new `A and B` choice, and "Yard/Interchange/Staging" is now `Train Origin/Terminus`.
- **Cars/Week** is now called **Demand**.
- The request buttons are now `New Request`, `Edit`, `Clone`, and `Delete`.
- A new consignee must be saved before you can add Equipment Requests to it.
- Origin/terminus (yard) drop zones no longer appear in the drop zone list on an Equipment Request.
- **New:** a `Flow Type` on each Equipment Request (Producer or Consumer), used by the new Pull & Drop Ops engine.
- **New:** an `Equipment` tab on the Modules/Towns screen showing the equipment each module requests, and request counts in the `Consignees` tab.
- **New:** `Add` can import several module files at once and skips modules that already exist.
- Saving a module to a file is now `Export` above the module list.
- **New:** an `Info` tab, the first tab on the Modules/Towns screen, where you edit the module's details in place. The separate module edit screen and the `Edit` button are gone. A `Jump to module...` box filters the list.
- **Gone:** the "Use Consignee Name" menu on the drop zone form.

See [Modules/Towns](module.md), [Drop Zones](drop-zones.md), [Consignees](consignees.md), and [Equipment Requests](equipment-requests.md).

### Trains and routes

- The route is now the `Route` tab on the train form, not a separate screen. Double-clicking a train opens the train form.
- Route changes save as you make them. Rows are reordered by dragging instead of with Up/Down buttons.
- "Select Consignee" is now `Consignee Filter`, with a new `Must Service` choice. `No Service` now keeps that consignee off the whole train.
- "Length" is now `Max Length`, "Minimum length" is now `Min Length`, and "Limit modules" is `Limit Modules`.
- **New:** `Car Distribution` on each train. It replaces the Trainlist screen's "Drop Zone Favoring" slider (see below).
- **New:** `Show on String Diagram` and `Add timetable instruction` for the new Timetable.
- **New:** `Clone` a train, including its route.
- Deleting a train also removes it from any timetable ops sessions.

See [Trains](train.md), [Train Route](train-route.md), and [Train Orders](train-orders.md).

### Trainlists

- The engines are renamed: "Mad River and Big Timber" is now `Random (MRBT)`, and "Use Cars/Week" is now `Weighted Selection`, which is the default. `Random (MRBT)` is a simple random selection with no weighting.
- **New:** the `Pull & Drop Ops` engine, which tracks loads and empties and adds pickups on later runs.
- "Drop Zone Favoring" on the Trainlist screen is replaced by the per-train `Car Distribution` setting on the train form.
- The single output format menu is split into `Output Format` (`MRBT`, `Modern`, `SwitchList`) and a `Half Page` / `Full Page` choice.
- "Use equipment type codes" is now `Use equipment code`.
- "Generate Trainlist" is now `Generate`. The train list only shows trains that have a route.
- The preview is a full-size, readable copy of the printed page. The last trainlist is not shown again when you come back to the screen.

See [Trainlists](trainlists.md).

### Reports

- The "Equipment Request Report" is now `Car Requests`, with filtering, sorting, grouping, and saved views.
- The "Modules/Towns Summary Listing" is now `Module Summary`, and adds Owner and total Demand.
- **New:** `Equipment Summary`, showing total demand for each equipment type so members know what to bring.
- Reports export to CSV. Printing reports and TSV export are gone.

See [Reports](reports.md).

### Timetable

- **New:** the `Timetable` screen. Build ops sessions, set stop times, and produce a string diagram, a timetable report, and a crew schedule. See [Timetable](timetable.md), [Station Order](station-order.md), and [Timetable Reports](timetable-reports.md).
