---
id: train-route
title: Train Route
sidebar_label: Train Route
---

# Train Route

A train's route tells ModuOps where the train goes and what work it may do along the way. You build the route on the `Route` tab of the train form.

To open it:

1. Click `Trains` in the sidebar.
2. Select a train and click `Edit`, or double-click the train.
3. Click the `Route` tab.

The `Route` tab appears once a train has been saved. For a new or cloned train, click `Save` on the `Details` tab first. See [Trains](train.md).

## How routes work

The route is a list of stops, read from top to bottom. Each row is a module/town, a set of consignees at a module/town, a [train order](train-orders.md) or a timetable instruction. The first row is the first place the train reaches after leaving its departure yard.

When you generate a trainlist, ModuOps picks equipment requests at random from the consignees on the route. The work prints on the trainlist in the same order as the route.

:::info
Because work is picked at random, a row on the route won't always have work on every trainlist. If nothing was picked for a module/town or consignee, it simply doesn't appear on that trainlist.
:::

## The Route tab

The Route tab works left to right. On the left are two tabs, `Modules/Towns` and `Train Orders`, where you choose what to add. In the center is a `Will add:` preview of what you're about to add, with a right arrow to add it and a left arrow to remove a stop. On the right is the route itself, with a count of stops, the departure yard above it (`Departs`) and the terminating yard below (`Terminates`).

The route table has these columns: a drag handle, `Dir` (direction), `Module/Town` and `Consignees to Service`.

Click `Done` to go back to the Trains list.

:::info[Screenshot needed]
The Route tab with a module selected on the left, the "Will add:" preview in the center and a route with several stops on the right.
:::

### Changes save automatically

Every time you add, remove or reorder a stop, the route is saved right away. There is no `Save` button on the Route tab.

## Add a module/town to the route

1. On the left, make sure the `Modules/Towns` tab is showing.
2. Click a module/town in the list.
3. Under `Stop Options`, choose a `Direction` and a `Consignee Filter` if you need them (see below). Leave them as they are to service all consignees with no direction.
4. Check the `Will add:` preview in the center.
5. Click the right arrow.

The new row is added to the route and saved. A module/town is required: the right arrow stays greyed out until you click one. `Direction` and `Consignee Filter` are optional.

### Where new rows go

With no row selected, a new row goes on the end of the route. With a row selected, the new row goes in right after it, and the caption under the arrows says `Insert after` with the stop number.

The row you just added becomes the selected row, so you can add several stops in a row and they go in order. To insert a stop in the middle of the route, click the row it should follow before clicking the right arrow.

## Consignee Filter

The `Consignee Filter` menu decides which consignees at the selected module/town the train may work. It goes back to `All Consignees` each time you pick a different module/town.

| Consignee Filter | What gets added | Shows in the route as |
|---|---|---|
| `All Consignees` | Every consignee at the module/town. | `All Consignees` |
| `A Only` | Only work on drop zones facing A. | `A Only` |
| `B Only` | Only work on drop zones facing B. | `B Only` |
| `Must Service` + one consignee | A consignee the train should work first. | `[[MUST]]` and the consignee name |
| `No Service` + one consignee | A consignee this train should never work. | `[[NOT]]` and the consignee name |

Drop zones facing `AB`, and drop zones with no direction set, count as both A and B. You set a drop zone's direction on the drop zone form. See [Drop Zones](drop-zones.md).

:::info
Modules are set up so drop zones face either the A or B direction, showing which way each spur trails. The orientation changes from module to module, so a route will often have some modules using `A Only` and others using `B Only`. That's normal.
:::

### Service one specific consignee

Below the filter is the `Consignees` list for the selected module/town.

1. Click a module/town.
2. Choose `All Consignees`, `A Only` or `B Only`. With `A Only` or `B Only`, the list shows only consignees with work on drop zones facing that way.
3. Click a consignee in the list.
4. Click the right arrow.

The route row shows the consignee's name, and the train works only that consignee at this stop. The A/B filter just narrows the list you pick from. Once you pick a single consignee, the row covers all of that consignee's work.

### Must Service and No Service

1. Click a module/town.
2. Choose `Must Service` or `No Service` from `Consignee Filter`. The list shows all consignees at the module/town.
3. Click **one** consignee.
4. Click the right arrow.

:::warning
With `Must Service` or `No Service` you must click a consignee before you add the row. If you don't, the row is added as `All Consignees`.
:::

Use `No Service` when a consignee shouldn't be worked by this train. For example, a grain elevator served by a unit train rather than the local turn.

### Which scheduling engine honors which setting

Each scheduling engine on the [Trainlists](trainlists.md) screen reads the route a little differently. `Random (MRBT)` is a simple random-selection engine: it picks route rows and equipment requests purely at random, with no weighting and no special handling for Must Service or No Service. `Weighted Selection` and `Pull & Drop Ops` do more with the route.

| Route setting | Random (MRBT) | Weighted Selection | Pull & Drop Ops |
|---|---|---|---|
| `All Consignees` | Yes | Yes | Yes |
| `A Only` / `B Only` | Yes | Yes | Yes |
| One specific consignee | Yes | Yes | Yes |
| `Must Service` | Not used. The row gets no work. | Yes. The consignee gets the first try for a car before the random picks. | Yes, same as Weighted Selection. |
| `No Service` | Not used. The consignee can still get work from other rows. | Yes. The consignee is left out of the whole train. | Yes. The consignee is left out of the whole train, pickups included. |
| `Direction` | Printed on the trainlist | Printed on the trainlist | Printed on the trainlist |
| `Limit Modules` (train details) | Yes | Yes | Yes |
| `Car Distribution` (train details) | Not used | Yes | Yes, for set-outs and for how eagerly cars are picked up |
| Demand weighting | Not used | Yes | Yes |

:::tip
`Must Service` gives the consignee the first chance at a car, not a guarantee. If the car won't fit on the drop zone or the train, ModuOps moves on.
:::

## Direction

The `Direction` menu adds a direction to the stop. The choices are *None* (the default), `East`, `West`, `North`, `South`, `Outbound` and `Return`.

The direction shows as a letter in the route's `Dir` column (for example `O` for Outbound) and is printed on the trainlist for that stop. It tells the crew which way the train is travelling when it does the work there. It doesn't change which cars are chosen.

The direction you pick stays selected when you click another module/town, so remember to set it back to *None* if the next stop shouldn't have one.

A common use is a turn that works trailing spurs in each direction:

1. Click a module/town.
2. Set `Direction` to `Outbound`.
3. Set `Consignee Filter` to `A Only` or `B Only`, whichever direction trails on the way out.
4. Click the right arrow.
5. Later in the route, add the same module/town again with `Direction` set to `Return` and the other facing direction.

## Reorder stops

Drag a row by the handle in the first column and drop it where you want it. The stops are renumbered and the route is saved.

## Remove a stop

1. Click the row in the route.
2. Click the left arrow in the center.

The row is removed right away. There is no confirmation.

## Train orders and timetable instructions

The `Train Orders` tab on the left lets you add one-line train orders to the route. The `Add timetable instruction` checkbox under `Stop Options` adds an instruction that also counts as a timetable stop. Both are covered in [Train Orders](train-orders.md).

## Changes from version 5

- The route is a tab on the train form instead of a separate screen, and changes save automatically.
- Drag and drop replaces the up and down buttons for reordering.
- The `Select Consignee` menu is now `Consignee Filter`, with a new `Must Service` choice.
- New `Will add:` preview and `Insert after` caption.
- New directions: `East`, `West`, `North`, `South` and `Return`, as well as `Outbound`.
- New `Add timetable instruction` option.
- With the `Weighted Selection` and `Pull & Drop Ops` engines, `No Service` now keeps the consignee off the whole train, not just one stop.
- `Random (MRBT)` now honors `A Only`, `B Only` and specific-consignee rows. In version 5 it serviced all consignees on each module.
