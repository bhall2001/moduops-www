---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
---

# Quickstart

Don't want to read the whole manual? This page walks you through the shortest path from installing ModuOps to printing your first trainlist. Each step links to the page that covers it in detail. You should still read the manual later ;-)

## Install ModuOps

ModuOps is free and runs on macOS, Windows and Linux. Download it from the ModuOps website home page.

:::note[Platform rollout]
macOS ships first. Linux is next (in progress) and Windows is last.
:::

- **macOS:** open the downloaded `.dmg` and drag ModuOps into your Applications folder. The same download works on both Apple Silicon and Intel Macs.
- **Windows:** run the installer. You can choose where ModuOps is installed, and it adds Desktop and Start Menu shortcuts.
- **Linux (in progress):** not available yet. Install steps will be added when it ships.

:::tip
Windows may show a SmartScreen warning the first time you run the installer. You can safely tell Windows to run it anyway.
:::

On macOS and Windows, ModuOps keeps itself up to date once installed. On Linux (in progress), download and install new versions yourself. See [Preferences](preferences.md) for the update settings.

## Create or open a layout

All of your data for a layout lives in a single **layout file** with the `.mop3` extension.

**To create a new layout:**

1. In the `File` menu select `New Layout` (Ctrl+N on Windows, Cmd+N on Mac). If no layout is open you can also click `New Layout` on the [Dashboard](dashboard.md).
2. In the `Create New Layout` dialog, give the file a name and pick a location where you'll be able to find it again. Always use a new file name.
3. Click `Save`. The new layout opens right away, and its name appears in the window title.

**To open an existing layout:**

- In the `File` menu select `Open Layout...` (Ctrl+O / Cmd+O), or click `Open Layout` on the Dashboard.
- Recently used layouts are listed under `File` > `Open Recent Layout`.
- You can also double-click a `.mop3` file to open it in ModuOps.

:::info
Coming from ModuOps version 5? Open your `.mop2` file the same way. ModuOps makes a `.mop3` copy and leaves your original file untouched. See [Upgrading from Version 5](upgrading.md).
:::

## Build your first trainlist

Here's the order you'll want to follow to get going.

### 1. Set up the layout

1. Click `Layout` in the sidebar.
2. Enter a `Layout Name`. It prints at the top of every trainlist.
3. Under `Length & Scale`, choose the `Length Unit` and `Scale` you want to use for all lengths in this layout (for example `Feet` and `HO (1:87.1)`). Do this before you enter any lengths.

See [Layout](layout.md) for details.

:::tip
New layouts start with the default unit and scale from [Preferences](preferences.md). If you always work in the same scale, set it there once and every new layout will start with it.
:::

### 2. Add equipment

1. Click `Equipment Register` in the sidebar.
2. Click `New`.
3. Enter a `Description`, a `Short Description`, and a `Length`. Optionally pick a `Class` and `Era`.
4. Click `Save`. Repeat for a few pieces of equipment.

See [Equipment Register](equipment.md) for details.

### 3. Add a yard

Every train starts and ends at a drop zone marked as a train origin/terminus, usually a yard, so you need at least one.

1. Click `Modules/Towns` in the sidebar.
2. Click `New` above the module list. Enter a `Name` and `Short Name` for your yard (for example "Staging" and "STG") and click `Save`.
3. Select the yard in the list, open the `Drop Zones` tab, and click `New`.
4. Enter a `Drop Zone Name` and a `Length` (the total storage capacity of the yard's tracks).
5. Check `Train Origin/Terminus` and click `Save`.

See [Modules/Towns](module.md) and [Drop Zones](drop-zones.md) for details.

### 4. Add a module with work to do

1. On the `Modules/Towns` screen, click `New` above the module list. Enter a `Name` and `Short Name` for a module or town on your layout and click `Save`.
2. Select the new module, open the `Drop Zones` tab, and click `New`. Enter a `Drop Zone Name` and the `Length` of track where cars are set out. Leave `Train Origin/Terminus` unchecked and click `Save`.
3. Open the `Consignees` tab and click `New`. Enter the consignee's `Name` and click `Save`.
4. Double-click the consignee you just created to open it again.
5. Click `New Request` to add an **Equipment Request**.
6. Leave `Demand` at 1, click the drop zone, and click one or more equipment types.
7. Click `Save`. You're returned to the consignee. Click `Save` again to go back to Modules/Towns.

See [Consignees](consignees.md) and [Equipment Requests](equipment-requests.md) for details.

:::info[Screenshot needed]
The Equipment Request form with a drop zone and two equipment types selected.
:::

### 5. Create a train and its route

1. Click `Trains` in the sidebar and click `New`.
2. Enter a `Symbol`, pick your yard for both `Departure` and `Terminates`, and enter a `Max Length`.
3. Click `Save`. The train reopens with `Details` and `Route` tabs.
4. Click the `Route` tab.
5. In the `Modules/Towns` list, click the module you created, then click the right-arrow button in the center of the screen to add it to the route. The route saves as you build it.
6. Click `Done`.

See [Trains](train.md) and [Train Route](train-route.md) for details.

### 6. Generate and print a trainlist

1. Click `Trainlists` in the sidebar.
2. Pick your train from the `Train` list. Only trains with a route are listed.
3. Leave `Scheduling Engine` set to `Weighted Selection` and `Output Format` set to `Modern`.
4. Click `Generate`. A full-size preview of the trainlist appears on the right.
5. Click `Print` and use your computer's print dialog.

See [Trainlists](trainlists.md) for details on engines, formats, and options.

:::info[Screenshot needed]
The Trainlists screen with a generated trainlist in the preview.
:::

Take the trainlist to your layout and get to work ;-)

## Changes from version 5

- Layout files now use the `.mop3` extension. Opening a `.mop2` file creates a new `.mop3` copy. See [Upgrading from Version 5](upgrading.md).
- `File` > `New Layout...` is now `File` > `New Layout`, and the Dashboard has `New Layout` and `Open Layout` buttons when no layout is open.
- Choose a length unit and scale for the layout before entering lengths.
- Forms use `Save` and `Cancel` instead of `Done`.
- The train route is now a tab on the train form instead of a separate screen.
- `Generate a Trainlist` is now `Generate`, and there's a separate `Print` button.
