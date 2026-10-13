---
id: layout
title: Layout
sidebar_label: Layout
---

# Layout

The Layout screen is where you record the details of your layout and set the length unit and scale used for every length in the layout file. Open it by clicking `Layout` in the sidebar.

There's no Save button on this screen. Each text field saves when you click or tab out of it. Unit and scale changes are applied as soon as you choose them (or confirm them, when lengths need converting).

:::info[Screenshot needed]
The Layout screen showing all four cards.
:::

## Layout Information

These fields describe and document the layout.

| Field | Description |
|---|---|
| `Layout Name` | The name of the layout. It prints at the top of every trainlist. If it's blank, trainlists print "Layout" instead. |
| `Location` | Where the layout is set up. |
| `Organization` | The organization hosting the layout. |
| `Start Date` / `End Date` | The dates of the setup or operating session. Click the field to pick a date from the calendar. |

## Length & Scale

Every length in ModuOps (equipment lengths, drop zone lengths, and train lengths) uses the unit and scale set here. Other screens label length fields with the unit, for example `Length (ft)` or `Max Length (cm)`.

| Field | Description |
|---|---|
| `Length Unit` | `Feet`, `Centimeters`, `Meters`, or `Units (dimensionless)`. |
| `Scale` | The scale ratio of your layout. Hidden when the unit is `Units (dimensionless)`. |
| `Custom Ratio` | Appears when you choose `Custom...` as the scale. Enter the number after "1:", for example `87.1`. The value is applied when you leave the field. |

The `Scale` list is grouped by size:

| Group | Scales |
|---|---|
| Small | T (1:450), Z (1:220), N (1:160) |
| Medium | TT (1:120), HO (1:87.1), OO (1:76.2), S (1:64) |
| Large | O (NMRA) (1:48), O (NEM) (1:45.2), Gauge 1 (1:32), 1:29 (1:29) |
| Garden | G (1:22.5), F (1:20.3), 7/8" (1:13.7) |
| Real World | 1:1 (Real World) |
| Other | Custom... |

New layouts start with the default unit and scale from [Preferences](preferences.md).

### Convert All Lengths

When you change the unit or the scale, ModuOps offers to convert the lengths already in the layout. The `Convert All Lengths?` dialog explains: `Changing the unit or scale will convert all existing length values in this layout (car types, drop zones, and trains).` It also shows the change, for example `Feet 1:87.1 → Centimeters 1:1`.

- Click `Convert` to convert every equipment length, drop zone length, and train `Max Length` and `Min Length` to the new unit and scale.
- Click `Cancel` to leave the unit, scale, and all lengths unchanged.

Converted lengths are rounded to whole numbers, with a minimum of 1. For example, a 40 ft car in HO becomes 14 cm. Blank or zero lengths are left alone.

:::warning
Because converted lengths are rounded, converting back and forth can change them slightly. Pick your unit and scale before you enter lengths if you can.
:::

Switching **to or from** `Units (dimensionless)` doesn't open the dialog and doesn't convert anything. The numbers stay the same; only the label changes.

:::info[Screenshot needed]
The Convert All Lengths? dialog showing a change from Feet 1:87.1 to Centimeters 1:1.
:::

## Trainlist Settings

These fields record the trainlist header and footer text for the layout.

| Field | Description |
|---|---|
| `Trainlist Header` | Trainlist header text. Up to 80 characters; a counter shows how many you've used. |
| `Trainlist Footer` | Trainlist footer text. Up to 80 characters. |

## Crew Information

Record who is running the layout.

| Field | Description |
|---|---|
| `Run Chief` | The person or people acting as Run Chief. |
| `DCC Chief` | The person or people acting as DCC Chief. |
| `Operations Chief` | The person or people acting as Operations Chief. |

## Real-World Measurement converter

Next to each length field in ModuOps there's a small ruler button (tooltip `Enter real-world measurement`). It turns a measurement from your tape measure into the layout's unit and scale, so you don't have to do the math. You'll find it on:

- the `Length` field of equipment in the [Equipment Register](equipment.md)
- the `Length` field of a [Drop Zone](drop-zones.md)
- the `Max Length` and `Min Length` fields of a [Train](train.md)

The button is hidden when the layout unit is `Units (dimensionless)`.

**To use it:**

1. Click the ruler button next to the length field.
2. In the `Real-World Measurement` dialog, type the `Measurement` you took. Decimals are fine.
3. Choose its `Unit`: `Inches`, `Feet`, `Millimeters`, `Centimeters`, or `Meters`.
4. Check the `Converts to` box. It shows the result in your layout's unit and the scale being used, plus how it was worked out, for example `5.5 in → 13.97 cm real-world → 40 ft at 1:87.1`.
5. Click `Apply` to put the result into the length field.
6. Save the form as usual.

Results are rounded to whole numbers, with a minimum of 1. ModuOps remembers the measuring unit you last used for this layout. The first time, it starts with Inches for Feet layouts and Centimeters for Centimeters or Meters layouts.

:::info[Screenshot needed]
The Real-World Measurement dialog converting 5.5 inches to 40 ft at HO scale.
:::

## Changes from version 5

- "Layout/Railroad Name" is now `Layout Name`, and "Ops Chief" is now `Operations Chief`.
- The layout name is no longer shown at the top of every screen.
- The fields are grouped into cards, and each field saves when you leave it.
- **New:** the `Length & Scale` card. In version 5 lengths had no unit; now the layout has a unit and a scale, and lengths can be converted when you change them.
- **New:** the Real-World Measurement converter on length fields.
