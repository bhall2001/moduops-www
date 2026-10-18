---
id: equipment
title: Equipment Register
sidebar_label: Equipment Register
---

# Equipment Register

Every railroad needs equipment to move freight. The Equipment Register is where you define the types of cars (car types) that can be used on your layout. Each car type you create here can then be requested by consignees through [Equipment Requests](equipment-requests.md).

To open it, click `Equipment Register` in the sidebar.

:::info[Screenshot needed]
Equipment Register list with a few car types and the New / Edit / Clone / Delete toolbar.
:::

## The Equipment Register list

The list shows every car type in the open layout file, with these columns: `Class`, `Code`, `Description`, `Short`, `Length`, `Era`, and `Remarks`. The list is sorted by Class, then by Description.

Click a row to select it, which enables the `Edit`, `Clone` and `Delete` buttons. Double-click a row to open it for editing.

The `Class` column shows the one-letter class code (for example `B` for Box Car). See [Class](#class) below for the full list.

The toolbar above the list has four buttons:

| Button | What it does |
|---|---|
| `New` | Opens a blank form to add a car type. |
| `Edit` | Opens the selected car type for editing. |
| `Clone` | Opens a copy of the selected car type so you can make a similar one. |
| `Delete` | Deletes the selected car type (after you confirm). |

:::tip
The number of car types in your layout file is also shown on the [Dashboard](dashboard.md) as `Equipment Types`.
:::

## Add a car type

1. In the Equipment Register, click `New`.
2. Fill in the fields (see [Car type fields](#car-type-fields) below). `Description`, `Short Description`, and `Length` are required.
3. Click `Save`.

You are returned to the Equipment Register list, and your new car type appears in it.

If you leave out a required field, ModuOps shows a red message under that field when you click `Save`: "Description is required", "Short description is required" or "Length is required". Fix the field and click `Save` again.

:::info[Screenshot needed]
Car type form showing all fields, the character counters on Code and Short Description, and the ruler button next to Length.
:::

## Edit a car type

1. In the Equipment Register, select the car type and click `Edit`, or just double-click the row.
2. Make your changes.
3. Click `Save` to keep them, or `Cancel` to throw them away.

## Clone a car type

It's common to need a new car type that is very similar to an existing one, such as a 50 ft box car when you already have a 40 ft box car.

1. In the Equipment Register, select the car type you want to copy.
2. Click `Clone`. The form opens filled in with all the values of the original, and " (Copy)" is added to the end of the `Description`.
3. Change whatever you need (don't forget to fix the Description).
4. Click `Save`.

Nothing is created until you click `Save`. The original car type is never changed by cloning.

## Delete a car type

1. In the Equipment Register, select the car type.
2. Click `Delete`.
3. A **Delete Car Type** box asks you to confirm. Click `Delete` to go ahead, or `Cancel` to keep the car type.

:::warning
Deleting a car type cannot be undone. It also removes every [Equipment Request](equipment-requests.md) that uses that car type, on every module.

The confirmation box warns: "This will also delete all workorders that use this car type." ("Workorders" is the older name for Equipment Requests.)
:::

## Car type fields

| Field | Description |
|---|---|
| `Class` (optional) | The kind of car, picked from a list. |
| `Era` (optional) | The era the car belongs to, picked from a list. |
| `Code` (optional) | A short car code, such as an AAR code, up to 4 characters. |
| `Description` (required) | The full name of the car type, for example "40' Box Car". |
| `Short Description` (required) | A short name used where space is tight, such as on trainlists, up to 12 characters. |
| `Length` (required) | The car's length, as a whole number, in your layout's length unit. |
| `Remarks` (optional) | Notes for the crews handling this car. |

### Class

Pick one of: `(None)`, `Box Car`, `Caboose`, `Flat Car`, `Gondola`, `Hopper`, `Locomotive`, `Passenger`, `Refrigerator`, `Stock Car`, `Tank Car`, `Other`.

The list screen shows the class as a single letter: B, C, F, G, H, L, P, R, S, T, and X for Other.

:::tip
Setting a class helps keep your equipment organized. The Equipment Register sorts by class first, so all your box cars, hoppers, and so on are grouped together.
:::

### Era

Pick one of: `(None)`, `Steam`, `Transition`, `Diesel`, `Modern`. This helps yard crews pick a car that fits the era requested.

### Code

An optional code of up to 4 characters, usually the car's AAR code. A counter beside the field (for example `2/4`) shows how many characters you've used, and you can't type past the limit.

On trainlists, turning on the `Use equipment code` option shows the Code (with the length) instead of the Short Description. If a car type has no Code, the Short Description is used instead. See [Trainlists](trainlists.md).

For more information on AAR codes, see the Ops SIG list of [AAR freight car codes](https://www.opsig.org/files/resources/AARFreightCarCodes.pdf).

### Description

The full name of the car type. It's required, and it's what you'll see when picking a car type for an Equipment Request.

### Short Description

A short name of up to 12 characters, used on trainlists where space is limited. A counter beside the field (for example `8/12`) shows how many characters you've used, and you can't type past the limit.

### Length

The length of the car, as a whole number. You can't type decimals or negative numbers.

The unit comes from your layout's `Length Unit` setting on the [Layout](layout.md) screen, and the field label shows it: `Length (ft)`, `Length (cm)`, or `Length (m)`. If your layout uses Units (dimensionless), no unit is shown.

Drop Zone and train lengths use the same unit, so keep your measurements consistent.

### Remarks

Optional notes for the crew handling the car, such as "Hazardous" or "Flammable". Remarks are printed on the trainlist along with the car.

The Remarks box has a small toolbar:

| Button | What it does |
|---|---|
| Bold / Italic | Makes the selected text bold or italic. Keyboard shortcuts: Ctrl+B / Ctrl+I (Cmd on a Mac). |
| `Insert checklist item` | Inserts a checkbox, `[ ] `. |
| `Insert indent` | Inserts 4 spaces. |
| `Insert underline input` | Inserts a blank line (`________________`) for crews to write on. |
| `½ Page` | Shows how your text will wrap on a half-page-wide trainlist (44 characters). Click again for full width. |

## Real-World Measurement converter

Don't know the car's scale length? Measure the model with a tape measure or ruler and let ModuOps do the math.

1. On the car type form, click the ruler button next to `Length` (tooltip: "Enter real-world measurement").
2. In the **Real-World Measurement** box, type the `Measurement` you took (required, and greater than 0; decimals are fine). `Apply` stays greyed out until you do.
3. Pick the `Unit` you measured in: `Inches`, `Feet`, `Millimeters`, `Centimeters`, or `Meters`.
4. The `Converts to` box shows the result in your layout's scale and unit.
5. Click `Apply` to put the result in the `Length` field, or `Cancel` to close without changing anything.

For example, on an HO layout measured in feet, a model that measures 5.5 inches converts to 40 ft.

The result is rounded to a whole number (never less than 1). ModuOps remembers the unit you last measured in for this layout file.

:::note
The ruler button isn't shown when your layout's `Length Unit` is set to Units (dimensionless), since there's no scale to convert to.
:::

:::info[Screenshot needed]
Real-World Measurement box with a measurement entered and the "Converts to" result shown.
:::

## Unsaved changes

If you change anything on the car type form and then try to leave without saving (by clicking `Cancel`, the sidebar, or the breadcrumb, or by closing the window), ModuOps asks "You have unsaved changes. Are you sure you want to leave this page?"

- Click `Stay on Page` to go back and keep editing.
- Click `Leave Page` to throw away your changes.

If you open `New` or `Clone` and leave without typing anything, you won't be asked.

## When you change the layout's unit or scale

If you change the `Length Unit` or scale on the [Layout](layout.md) screen, ModuOps asks whether to convert all the lengths in the layout file, including every car type length. If you choose `Convert`, each car length is recalculated for the new unit or scale and rounded to a whole number.

Switching to or from Units (dimensionless) doesn't convert anything. The numbers stay the same and only the label changes.

## Equipment Summary report

To see how much of each car type your modules are asking for, use the `Equipment Summary` report under Reports in the sidebar. It lists every car type that has at least one Equipment Request, with its total Demand, and can be exported to a CSV file. It's handy to send to members before a session so they know what rolling stock to bring. See [Reports](reports.md).

## Changes from version 5

- The **Edit Car Type** screen is now just the car type form. The `Done` button is replaced by `Save` and `Cancel`.
- Field names changed: "Classification" is now `Class`, "Car description" is now `Description`, "Short description" is now `Short Description`, and "AAR Code" is now `Code` (limited to 4 characters).
- Required fields are marked with an asterisk instead of red text.
- There's a new `Edit` button. Double-clicking a row still works too.
- Clone adds " (Copy)" to the description, and nothing is saved until you click `Save`.
- `Length` must be a whole number, and its unit now comes from the layout's `Length Unit` setting. The Real-World Measurement converter is new.
- Remarks now support bold, italic, checklist items, and write-in blanks.
- You're warned before leaving a form with unsaved changes.
- The delete confirmation button is now `Delete` instead of "Yes".
- A Code is no longer strictly needed for switch lists. If a car type has no Code, the Short Description is used.
