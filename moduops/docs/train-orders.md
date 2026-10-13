---
id: train-orders
title: Train Orders
sidebar_label: Train Orders
---

# Train Orders

Train orders are one-line instructions you place in a train's route. They print on every trainlist generated for the train, at their spot in the route, so the crew sees them at the right point in their work. Use them for things like where to turn, or a transfer cut to set out.

You can also add a **timetable instruction** to the route. It prints like a train order and also counts as a stop in the timetable.

## Write train orders

Train orders start in the `Train Orders` field on the train's `Details` tab. See [Trains](train.md).

1. Open the train and go to the `Details` tab.
2. In `Train Orders`, type each order on its own line.
3. Click `Save`.

Each line that isn't blank becomes a separate train order. Use the editor toolbar to make the orders look like the rest of the trainlist:

- **Bold** for headings, so they match module/town headings.
- `Insert checklist item` for a `[ ] ` box the crew can tick.
- `Insert indent` to line text up under a checklist item.

:::tip
Click `Save` on the `Details` tab before switching to the `Route` tab. The `Train Orders` tab on the route only lists orders that have been saved.
:::

## Add a train order to the route

1. Go to the train's `Route` tab.
2. On the left, click the `Train Orders` tab (next to `Modules/Towns`). Each saved order is listed on its own row.
3. Click the order you want to add.
4. In the route on the right, click the row the order should come after. If no row is selected, the order is added at the end.
5. Click the right arrow in the center.

The order appears in the route with `[[Train Order]]` in the `Module/Town` column and the order's text in the `Consignees to Service` column. Like every route change, it is saved right away.

To move or remove an order, drag it or select it and click the left arrow, just like any other stop. See [Train Route](train-route.md).

:::info[Screenshot needed]
The Route tab with the Train Orders tab open on the left and a [[Train Order]] row in the route on the right.
:::

### Orders don't update once they're in the route

The text of a train order is copied into the route when you add it. If you later change the order in the `Train Orders` field, the route keeps the old text.

To update it:

1. Save the changed order on the `Details` tab.
2. On the `Route` tab, select the old order in the route and click the left arrow to remove it.
3. Select the row above where it was, pick the updated order on the `Train Orders` tab and click the right arrow.

## Example: where to turn

If a train is a turn, add a train order that tells the crew where to turn around. Enter this in `Train Orders` (in bold):

**TURN at Eugene**

Then add it to the route after the last stop worked on the way out. On the trainlist, "**TURN at Eugene**" prints between the outbound work and the return work.

:::tip
If you want the turn to show on the timetable as a stop, use a [timetable instruction](#timetable-instructions) instead.
:::

## Example: a transfer cut

Train orders can also describe work that isn't an equipment request. Here the crew sets out a transfer cut on the way out and picks up a cut left by a branch crew on the way back.

Enter these lines in `Train Orders`, using bold for the first line, the checklist button for the next two and the indent button for the last two:

```
Scheduled Transfer at Woodstown Junction
[ ] Set out Lackawanna Local transfer cut
[ ] Pick up all
    to Transfer Track 1
    from Transfer Track 1
```

Each line is a separate order, so you can put them in the route in any order. For the outbound move, add the heading, then `[ ] Set out Lackawanna Local transfer cut`, then `    to Transfer Track 1`. Later in the route, add `[ ] Pick up all` followed by `    from Transfer Track 1`.

Because the lines use the same bold heading, checkboxes and indenting as the rest of the trainlist, they blend in with the regular work.

:::info
Train orders always print, but regular work is picked at random. If nothing is picked for the stop before a train order, the crew simply reaches the train order sooner.
:::

## Timetable instructions

A timetable instruction is a note tied to a module/town. It prints on the trainlist like a train order, and it also makes the train stop at that module/town in the timetable and on the string diagram. Use it for turns, meets or crew changes you want to show on the timetable. See [Timetable](timetable.md).

1. Go to the train's `Route` tab and make sure `Modules/Towns` is showing.
2. Click the module/town.
3. Under `Stop Options`, check `Add timetable instruction`.
4. Type the text in the `Instruction` field. It is one line, and you can use bold and italic.
5. In the route, click the row it should come after (or leave nothing selected to add it at the end).
6. Click the right arrow.

The row appears with `[[Timetable]]` in the `Module/Town` column and your text in the `Consignees to Service` column. The checkbox and text clear afterwards so you can carry on adding stops.

On the trainlist it prints as a bold "Train order at" heading with the module/town name (for example "**Train order at Eugene**"), followed by your instruction text. No cars are ever scheduled for a timetable instruction.

:::info[Screenshot needed]
The Modules/Towns tab with "Add timetable instruction" checked and text in the Instruction field.
:::

## Changes from version 5

- Train orders are written with the editor toolbar (bold, italic, checklist, indent) instead of typing HTML tags like `<b></b>`.
- Route rows are reordered by dragging instead of with the up and down buttons.
- New timetable instructions (`Add timetable instruction`), which print as "Train order at" a module/town and add a timetable stop.
- Train orders from version 5 that read "TURN AT" and a module/town name are recognized on the string diagram as a stop at that module/town.
