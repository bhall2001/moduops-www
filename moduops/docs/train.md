---
id: train
title: Trains
sidebar_label: Trains
---

# Trains

The Trains screen is where you create and manage the trains that run on your layout. Each train has details (symbol, yards, length, crew instructions) and a route that tells ModuOps which modules/towns and consignees the train works. When you generate a trainlist, ModuOps picks equipment requests from the consignees on the train's route and builds a trainlist for the crew.

To open the screen, click `Trains` in the sidebar.

## The Trains list

The list shows every train in the layout file, sorted by symbol. The columns are `Symbol`, `Name`, `Departure`, `Terminates`, `Length` and `Type`.

Click a train to select it. Double-click a train to open it for editing.

The buttons above the list are:

| Button | What it does |
|---|---|
| `New` | Opens a blank train form so you can create a new train. |
| `Edit` | Opens the selected train for editing. |
| `Clone` | Opens a new train form filled in with a copy of the selected train. |
| `Delete` | Deletes the selected train after you confirm. |

`Edit`, `Clone` and `Delete` are available once you select a train.

:::info[Screenshot needed]
The Trains list with one train selected and the New / Edit / Clone / Delete buttons visible.
:::

## Create a train

1. Click `New` on the Trains list.
2. Enter a `Symbol`.
3. Choose the `Departure` and `Terminates` drop zones.
4. Enter a `Max Length`.
5. Fill in any other fields you want (see the field reference below). Those four are the only required fields.
6. Click `Save`.

After the first save, the train opens in edit mode and two tabs appear at the top of the form: `Details` and `Route`. You build the train's route on the [Route tab](train-route.md). A new train must be saved before you can add a route.

:::tip
The `Departure` and `Terminates` lists only show drop zones that have `Train Origin/Terminus` checked. If the lists are empty, mark at least one drop zone that way first. See [Drop Zones](drop-zones.md).
:::

## Edit a train

1. Select the train on the Trains list and click `Edit`, or double-click the train.
2. Make your changes on the `Details` tab.
3. Click `Save`. You stay on the form so you can keep working.

Click `Cancel` to go back to the Trains list without saving. If you try to leave the page with unsaved changes on the `Details` tab, ModuOps asks whether you want to `Stay on Page` or `Leave Page`.

ModuOps remembers whether you last used the `Details` or `Route` tab and opens that tab the next time you edit a train.

## Details tab

The `Details` tab holds everything about the train except its route.

:::info[Screenshot needed]
The Details tab of a train form showing Symbol, Name, Departure, Terminates, the length fields and the Car Distribution slider.
:::

### Train fields

`Symbol`, `Departure`, `Terminates` and `Max Length` are required. Everything else is optional. If one is missing ModuOps won't save the train and shows a message under the field: "Symbol is required", "Departure is required", "Terminates is required", or "Length is required and must be greater than 0".

| Field | Description |
|---|---|
| `Symbol` (required) | The train's identifier, up to 11 characters. A counter shows how many characters you have used. Each train needs its own unique symbol. The symbol prints at the top of the trainlist. |
| `Name` (optional) | A descriptive name, such as "Harris Yard Turn". It prints next to the symbol at the top of the trainlist. |
| `Departure` (required) | The origin the train starts from, shown as "Train origin" under the field. It prints as `Departs:` on the trainlist. |
| `Terminates` (required) | The terminus the train ends at, shown as "Train terminus" under the field. It prints as `Terminate:` on the trainlist. |
| `Max Length` (required) | The longest the train can be. ModuOps adds cars to the train up to this length but never past it. Must be a whole number greater than 0. |
| `Min Length` | An optional minimum length. When set, each time you generate a trainlist ModuOps picks a random target length between the minimum and maximum (inclusive). |
| `Type` | A classification for the train: Extra, Intermodal, Local, Mixed, Passenger, Special, Transfer, Turn or Unit. It is shown on the Trainlists screen and does not change how cars are chosen. |
| `Remarks` | Your own notes about the train. |
| `Limit Modules` | The most modules/towns the train can work on one trainlist. Leave it blank for no limit. See [How Limit Modules works](#how-limit-modules-works) below. |
| `Car Distribution` | A slider from `Distribute` through `Balanced` to `Concentrate`. See [Car Distribution](#car-distribution) below. |
| `Show on String Diagram` | Checked by default. Uncheck it to hide the train from the timetable string diagram, for example for yard crews or free-running trains. See [Timetable](timetable.md). |

### Length units

The length fields show your layout's length unit, for example `Max Length (ft)`. The unit comes from the layout settings (see [Layout](layout.md)). If you change the layout's unit or scale later, ModuOps converts every train's lengths for you.

Next to each length field is a ruler button (`Enter real-world measurement`). Click it to enter a measurement straight from your tape measure, in inches, feet, millimeters, centimeters or meters. ModuOps shows what it converts to in your layout's scale and unit. Click `Apply` to use it. The ruler button is hidden if your layout uses plain "units".

:::tip
Train length is for equipment only. Don't include the length of locomotives or cabooses.
:::

:::info
Min Length is a target, not a promise. ModuOps stops adding cars when nothing else fits or there is no more work available, so some trainlists can come out shorter than the minimum.
:::

### How Limit Modules works

`Limit Modules` keeps a train from working every module/town on its route. Use it when a route passes through many modules/towns but you only want the crew switching a few of them. For example, a local with 8 modules/towns on its route and `Limit Modules` set to 3 works at most 3 of them, and a different 3 each time you generate.

When you click `Generate`, ModuOps picks work at random, one car at a time. The first time it picks work at a module/town, that module/town is locked in. Once the number of locked-in modules/towns reaches the limit, work picked anywhere else is thrown out, and the rest of the train is filled from the locked-in modules/towns only.

A module/town counts once no matter how many rows it has on the route. Which ones get locked in is luck of the draw, with a tilt: under `Weighted Selection` the modules/towns with more `Demand` tend to get picked early, and under `Random (MRBT)` the ones on more route rows do.

The slot is used up the moment a module/town is picked, before ModuOps checks whether the car fits. If the drop zone turns out to be full, or the car won't fit on the train, that module/town still holds its slot, so a trainlist can end up working fewer modules/towns than the limit. `Random (MRBT)` can burn a slot on a route row that has no work at all, such as a `Must Service` or `No Service` row (which it doesn't use) or a drop zone facing the wrong way. With `Weighted Selection`, `Must Service` consignees are picked first, so their modules/towns lock in first and count toward the limit; if there are more `Must Service` modules/towns than the limit, the extras get nothing.

Once the slots are full, only the locked-in modules/towns can get cars. If they run out of work or room, the train comes out short, even below `Min Length`.

`Limit Modules` is used by all three scheduling engines. See [Trainlists](trainlists.md) for more about the engines.

### Car Distribution

`Car Distribution` is the probability that the next equipment request selected is at the same drop zone as the last one.

After ModuOps places a car, it checks the slider to decide whether the next car goes to the same drop zone again. Set it low and cars spread out along the route. Set it high and cars bunch up at fewer drop zones.

| Setting | Chance the same drop zone is selected again |
|---|---|
| `Distribute` (1) | 0%. This is the default. |
| 2 | 25% |
| `Balanced` (3) | 50% |
| 4 | 75% |
| `Concentrate` (5) | 100% |

Once the drop zone is full, or there's no more work there that fits the train, the next car can go to any drop zone.

Car Distribution is used by the `Weighted Selection` and `Pull & Drop Ops` scheduling engines. `Must Service` requests are not affected.

With `Pull & Drop Ops` the slider does double duty. It also sets the odds that a car already sitting at a drop zone gets picked up on this visit, from one in four at `Distribute` up to every car at `Concentrate`. The odds never reach zero, so no car is left stranded forever.

## Instructions and train orders

Below the train fields are four larger text fields. All four are optional:

| Field | Description |
|---|---|
| `Job Overview` | A description of the job this train's crew performs. |
| `Crew Instructions` | Overall instructions for the crew. They print near the top of every trainlist for this train, under the heading "CREW INSTRUCTIONS". |
| `Termination Instructions` | Instructions for ending the run, such as where to put the power or a shutdown procedure. They print after all the work and just before the `Terminate:` line. |
| `Train Orders` | One-line instructions you can place anywhere in the train's route. Each line becomes a separate train order. See [Train Orders](train-orders.md). |

Example termination instructions:

```
Scheduled Work Harris Yard
[ ] Terminate Track 1 Harris Yard
```

### The text editor

These fields use a simple editor with a toolbar:

- **Bold** and **Italic** buttons (or Ctrl+B / Ctrl+I, Cmd+B / Cmd+I on a Mac).
- `Insert checklist item` adds `[ ] ` so the crew has a box to tick.
- `Insert indent` adds a four-space indent, handy for lining text up under a checklist item.
- `Insert underline input` adds a blank line (`________________`) for the crew to write on.
- `½ Page` switches between half-page width (44 characters) and full width. The fields start in half-page width so you can see how the text will wrap on a half-page trainlist.

Press Enter to start a new line. Only bold, italic and line breaks are kept. Other formatting is removed, including formatting in text you paste in.

:::info[Screenshot needed]
The Crew Instructions editor with its toolbar (Bold, Italic, checklist, indent, underline, ½ Page).
:::

## Clone a train

Cloning is a quick way to create a train that is similar to one you already have.

1. Select a train on the Trains list.
2. Click `Clone`.
3. A `Clone Train` form opens with every field and the route copied. The symbol has `-COPY` added to the end.
4. Change the `Symbol` and anything else you need.
5. Click `Save`.

The new train opens in edit mode with its own copy of the route. Generated trainlists and timetable entries are not copied.

## Delete a train

1. Select the train on the Trains list.
2. Click `Delete`.
3. Click `Delete` in the confirmation box.

:::warning
Deleting a train can't be undone. It also deletes the train's generated trainlists, and removes every appearance of the train from the timetables of all your operating sessions (along with its stop times).
:::

## Changes from version 5

- The route is now a `Route` tab on the train form instead of a separate screen. Double-clicking a train opens the train form.
- `Length`, `Minimum length`, `Remark` and `Limit modules` are now `Max Length`, `Min Length`, `Remarks` and `Limit Modules`. Length fields show the layout's unit and have a real-world measurement converter.
- New fields: `Car Distribution` (replaces the Drop Zone Favoring slider that was on the version 5 Trainlist screen) and `Show on String Diagram`.
- The `Symbol` is limited to 11 characters.
- Text fields use a toolbar editor. Typing HTML tags such as `<b></b>` no longer formats text; use the `Bold` and `Italic` buttons instead. Formatting in text from version 5 still displays.
- New `Clone` button.
- Deleting a train also removes it from operating session timetables.
