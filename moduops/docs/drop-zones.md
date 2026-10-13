---
id: drop-zones
title: Drop Zones
sidebar_label: Drop Zones
---

# Drop Zones

A drop zone is a section of track where equipment can be set out. A drop zone could be the whole length of a siding, or a siding can have several drop zones. You can even make a drop zone longer than the siding it sits on.

Drop zones belong to a module/town. To see them, click `Modules/Towns` in the sidebar menu, select a module/town, then click the `Drop Zones` tab.

## Create a drop zone

1. Click `Modules/Towns` in the sidebar menu.
2. Select a module/town.
3. Click the `Drop Zones` tab.
4. Click `New`.
5. Fill in the fields. `Drop Zone Name` is required.
6. Click `Save`.

You return to the Drop Zones tab with the module/town still selected.

## Edit a drop zone

1. Select the drop zone in the Drop Zones tab.
2. Click `Edit`.
3. Make your changes and click `Save`. Click `Cancel` to leave without saving.

:::tip
Double-click a drop zone to open it for editing.
:::

:::info[Screenshot needed]
Drop zone edit screen with Is Yard Track checked and the ruler button next to Length.
:::

## Drop zone fields

| Field | Description |
| --- | --- |
| `Drop Zone Name` (required) | The name of the drop zone. |
| `Length` | How much track the drop zone has. The label shows your layout's unit, for example `Length (ft)`. ModuOps will not put more equipment in a drop zone than fits in this length. |
| `Zone Reference` | A short code for the track, up to 10 characters. Letters are made upper case as you type. See [Zone Reference](#zone-reference). |
| `Direction` | Which direction trains can serve this drop zone from: `A Only`, `B Only` or `A and B`. New drop zones start as `A Only`. See [Direction](#direction). |
| `Active` | Checked means the drop zone can get work. Uncheck it to take the drop zone out of use. See [Active](#active). |
| `Is Yard Track` | Check this if the drop zone is a yard, staging or interchange track. See [Yard tracks](#yard-tracks). |

### Length and the Real-World Measurement converter

Lengths use the unit set for your layout (see [Layout](layout.md)). If your layout uses feet and HO scale, enter the drop zone length in scale feet.

Don't want to do the math? Click the ruler button next to `Length` (tooltip "Enter real-world measurement"):

1. Enter the `Measurement` from your tape measure.
2. Pick the `Unit`: Inches, Feet, Millimeters, Centimeters or Meters.
3. The "Converts to" box shows the length in your layout's scale and unit, and how it was worked out.
4. Click `Apply` to put the result in the `Length` field.

ModuOps remembers the unit you used last time. The result is rounded to a whole number.

:::note
The ruler button is hidden when your layout's unit is set to Units (no real-world scale).
:::

### Zone Reference

The Zone Reference is a short name for the track the drop zone is on, such as `TEAM` or `HOUSE1`. Switch lists print it as the track for each car, falling back to the first 10 characters of the drop zone name when it's blank, and trainlist entries are sorted by it.

It also tells the `Car Distribution` setting which drop zones are on the same track. A warehouse with three doors on one siding should have three drop zones that all share a Zone Reference, so the engine knows bunching cars there means one stop for the crew. Leave it blank and the drop zone is treated as a track of its own. See [Trains](train.md#car-distribution).

### Direction

Direction tells ModuOps which way a train must be moving to work the drop zone. It's there for trailing-point spurs: a drop zone set to `A Only` is worked by trains coming through the module/town from the A direction, `B Only` from the B direction, and `A and B` from either.

On a train's route, a stop can be set to `A Only` or `B Only`. The train then only gets work at drop zones with a matching direction, or at `A and B` drop zones. A stop set to `All Consignees` ignores direction. See [Train Route](train-route.md).

:::tip
All drop zones that face the same way on a module/town should have the same Direction.
:::

### Active

If a drop zone can't be used during a session, for example a turnout is broken, uncheck `Active`. ModuOps will not schedule any work to it when building trainlists. You don't need to change any train routes. Check it again when the track is back in service.

### Yard tracks

Check `Is Yard Track` for yards, staging and interchange tracks. Yard tracks are what show up in the `Departure` and `Terminates` lists for trains, so your layout needs at least one before you can create a train. See [Trains](train.md). They're not offered when creating equipment requests, since consignees request equipment at regular drop zones, not yards. With the Pull & Drop Ops engine, the yard is where cars come from and where they go home to.

Set the yard's `Length` to the total length of all the tracks that make up the yard.

## Clone a drop zone

Cloning is a quick way to make a drop zone that's like one you already have.

1. Select the drop zone in the Drop Zones tab.
2. Click `Clone`.
3. The edit screen opens with a copy of every field. " (Copy)" is added to the end of the name.
4. Change the name and anything else, then click `Save`.

Equipment requests are not copied to the new drop zone.

## Delete a drop zone

1. Select the drop zone in the Drop Zones tab.
2. Click `Delete`.
3. Click `Delete` in the confirmation box.

:::warning
Deleting a drop zone also deletes every equipment request for it, from any consignee on the module/town. Any trainlist lines for those requests are removed too. This cannot be undone.
:::

## Changes from version 5

- `Name` is now `Drop Zone Name`.
- `Zone Ref` is now `Zone Reference`. It is optional; switch lists fall back to the drop zone name.
- `Faces` is now `Direction`, with a new `A and B` choice. New drop zones default to `A Only`.
- `Yard/Interchange/Staging` is now `Is Yard Track`.
- The `Use Consignee Name` menu is gone. Type the name instead.
- New ruler button converts a tape-measure length to your layout's scale.
- The `Length` label now shows your layout's unit.
- Cloning adds " (Copy)" to the new drop zone's name.
