---
id: dashboard
title: Dashboard
sidebar_label: Dashboard
---

# Dashboard

The Dashboard is the first screen you see when you start ModuOps. It shows which layout is open and gives you a quick count of what's in it. You can get back to it at any time by clicking `Dashboard` in the sidebar.

:::info[Screenshot needed]
The Dashboard with a layout open, showing the layout banner and the six Layout Statistics cards.
:::

## Layout banner

The colored banner at the top is labelled `Current Layout`. It shows the name of the layout that's open, with the full path to the layout file underneath. There's no separate "Dashboard" heading above it.

Opening or creating a layout from the `File` menu, or from the banner buttons, always takes you to the Dashboard, wherever you were in ModuOps.

ModuOps doesn't reopen your last layout when it starts. When no layout is open, the banner reads `No layout loaded` and has two buttons:

- `Open Layout` opens an existing layout file. You can pick a `.mop3` file or a version 5 `.mop2` file (see [Upgrading from Version 5](upgrading.md)).
- `New Layout` creates a new layout file.

These do the same thing as the matching items in the `File` menu.

## Layout Statistics

Below the banner, the `Layout Statistics` section shows six counts for the open layout:

| Card | What it counts |
|---|---|
| `Modules/Towns` | Modules and towns in the layout |
| `Consignees` | Consignees across all modules |
| `Drop Zones` | Drop zones across all modules, including origin/terminus drop zones |
| `Equipment Requests` | Equipment Requests made by all consignees |
| `Trains` | Trains |
| `Equipment Types` | Entries in the Equipment Register |

The counts update as you add and delete items. They're for information only; use the sidebar to go to each screen. With no layout open, every count is 0.

## Sidebar

The sidebar on the left side of the window appears on every screen. Click an item to go to that part of ModuOps. The item for the screen you're on is highlighted.

| Item | Where it goes |
|---|---|
| `Dashboard` | This screen |
| `Layout` | Name and details of the layout, plus its length unit and scale. See [Layout](layout.md) |
| `Equipment Register` | The types of equipment used on the layout. See [Equipment Register](equipment.md) |
| `Modules/Towns` | Modules, their consignees, drop zones, and Equipment Requests. See [Modules/Towns](module.md) |
| `Trains` | Trains and their routes. See [Trains](train.md) |
| `Trainlists` | Generate and print trainlists. See [Trainlists](trainlists.md) |
| `Timetable` | Ops sessions, string diagrams, and timetables. See [Timetable](timetable.md) |
| `Origins` | How many of each car type to put in a yard or other train origin. See [Origins](origins.md) |

Under **Reports**:

| Item | Where it goes |
|---|---|
| `Equipment Summary` | Total demand for each equipment type |
| `Car Requests` | Every Equipment Request in the layout |
| `Module Summary` | Counts and total demand for each module |

See [Reports](reports.md) for all three.

Under **Settings**:

| Item | Where it goes |
|---|---|
| `Preferences` | Theme, default unit and scale, and updates. See [Preferences](preferences.md) |

The ModuOps version you're running is shown at the bottom of the sidebar.

## Breadcrumbs

Most screens show breadcrumbs across the top, such as `Dashboard > Modules/Towns > Mill Creek`. They show where you are in ModuOps. Click any earlier item in the trail to go back to it.

## The File menu

The `File` menu has the commands for working with layout files:

| Item | Shortcut | What it does |
|---|---|---|
| `New Layout` | Ctrl+N (Windows) / Cmd+N (Mac) | Creates a new layout file and opens it |
| `Open Layout...` | Ctrl+O / Cmd+O | Opens an existing `.mop3` or `.mop2` layout file |
| `Open Recent Layout` | | Lists up to 10 recently used layouts. `Clear Recent` empties the list |

Only one layout is open at a time. Opening or creating another layout closes the current one.

If you pick a recent layout that has been moved or deleted, ModuOps tells you `File Not Found` and removes it from the list.

To see which version of ModuOps you have, or to check for updates, choose `About ModuOps`. It's in the `Help` menu on Windows and in the `ModuOps` menu on a Mac. On Linux (in progress), TBD.

## Changes from version 5

- The groups of menus below the counts are gone. All navigation is in the sidebar.
- The count cards are renamed: "Rolling stock" is now `Equipment Types`, and "Car Requests" is now `Equipment Requests`.
- `Timetable`, `Origins` and the three Reports items are in the sidebar, and `Preferences` has moved into the sidebar.
- The layout name is no longer shown at the top of every screen. The Dashboard banner shows the open layout, and the window title shows the layout file's name.
