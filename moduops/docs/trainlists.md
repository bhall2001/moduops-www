---
id: trainlists
title: Trainlists
sidebar_label: Trainlists
---

# Trainlists

Trainlists guide crew members operating trains on the layout. Acting as a script, a trainlist walks the crew through their job step by step, so crews of every skill level can work a train successfully, even in a busy train show setting.

Each trainlist starts with the layout name, the train symbol and name, the departure yard, the train length and any crew instructions. As the train moves along its route, the trainlist shows the work to do at each Module/Town: which cars to set out (or pick up) and at which drop zone. Train orders print in their place along the route. The trainlist ends with termination instructions, the terminating yard and space for the crew's comments.

## Trainlists screen

Click `Trainlists` in the sidebar to open the Trainlists screen. The options for building a trainlist are on the left. The right side is a preview of the trainlist exactly as it will print, on a full-size 8.5" × 11" page, so scroll to see all of it. Until you generate something it just says "Select a train and click "Generate" to create a trainlist".

:::info[Screenshot needed]
Trainlists screen with a train selected and a generated Modern trainlist in the preview.
:::

## Generate a trainlist

1. Click `Trainlists` in the sidebar.
2. Pick a train from the `Train` dropdown. Each train shows as `SYMBOL - Name`.
3. Choose a `Scheduling Engine`. `Weighted Selection` is selected for you. See [Scheduling engines](#scheduling-engines) below.
4. Choose an `Output Format` (`MRBT`, `Modern` or `SwitchList`), `Half Page` or `Full Page`, and whether to `Use equipment code`.
5. Click `Generate`. The button shows `Generating...` while it works.
6. Check the result message under the buttons, for example "Scheduled 12 cars" and "Cars: 12 | Length: 480".
7. Review the preview, then click `Print`.

Generating again for the same train **replaces** that train's previous trainlist with a new one. Other trains are not affected. If you don't like the mix of work you got, just click `Generate` again.

:::tip
You can change `Output Format`, `Half Page` / `Full Page` and `Use equipment code` after generating. The preview updates right away, with no need to generate again.
:::

### Only trains with a route are listed

The `Train` dropdown only lists trains that have a route. If no train has a route yet, you see "No trains with routes defined. Create a train and define its route first." Set up the route on the train's route tab first. See [Train Route](train-route.md).

### Trainlist options

| Option | Description |
| --- | --- |
| `Train` | The train to build a trainlist for. Only trains with a route are listed. Changing the train clears the preview. |
| `Scheduling Engine` | How cars are picked: `Random (MRBT)`, `Weighted Selection` (default) or `Pull & Drop Ops`. A short description of the chosen engine shows under the dropdown. |
| `Pickup Age Threshold` | `Pull & Drop Ops` only. Number of times the train visits before picking up a car becomes mandatory. It is also how often a drop zone gets a PICKUP ALL (see below). Default 3, from 1 to 10. |
| `Include Pickup Alls` | `Pull & Drop Ops` only. Adds a "PICKUP ALL" line the first time a drop zone is worked. On by default. |
| `Reset Pickup Alls` | `Pull & Drop Ops` only. Appears after your first `Generate`. Makes PICKUP ALL lines appear again for drop zones that already had one. |
| `Output Format` | `MRBT`, `Modern` (default) or `SwitchList`. See [Output formats](#output-formats). |
| `Half Page` / `Full Page` | Page layout for `MRBT` and `Modern`. `Half Page` is the default. `SwitchList` ignores this setting. |
| `Use equipment code` | Show each car's equipment `Code` (for example an AAR code such as `XM`) instead of its class and short description. In the `Modern` format, module headings also use the module's short name. |
| `Generate` | Builds the trainlist. Enabled once a train is selected. |
| `Print` | Prints the trainlist. Enabled after a successful `Generate`. |

Once a train is selected, the bottom of the panel shows the train symbol, its type and its `Max Length`, plus the minimum length if one is set.

### Result messages

After you click `Generate` a message under the buttons tells you how it went. Green is good: "Scheduled 12 cars", with the car count and length below it. Orange means it ran but found nothing to schedule. Check that the modules on the route have equipment requests on active drop zones and that the train is long enough for the cars. Red means something is missing, usually a route.

## Train length

Each train has a `Max Length` and an optional `Min Length`, both set on the train's details. See [Trains](train.md).

- With only a max length, every trainlist aims to fill the train up to the max length.
- With a min length too, each time you generate ModuOps picks a random target length between the min and the max. This gives some variety from one run to the next.

The min length is a target, not a promise. If there isn't enough work on the route, or the cars don't fit the drop zones, the train can come out shorter.

A car is only set out at a drop zone if it fits in the room left on that drop zone.

## Scheduling engines

The scheduling engine decides which cars go on the train. Every engine works from the equipment requests on the Modules/Towns in the train's route, and only uses drop zones that are marked `Active`. Each time you generate, drop zones start out empty.

All engines follow the train's route order. Train orders and timetable entries on the route never get cars; they print on the trainlist as instructions in their place along the route. See [Train Orders](train-orders.md).

All engines also honor `A Only` and `B Only` route rows: only drop zones facing that side (or both sides, or no side set) get work.

### Random (MRBT)

`Random (MRBT)` recreates the simple random selection of the original Mad River and Big Timber program, and is our tip of the hat to the program that got us excited about operations with car types.

There's no weighting at all. ModuOps picks a random row from the train's route, then a random equipment request on that row, and keeps going until the next car picked won't fit on the train. `Demand` means nothing here; a request with a Demand of 30 has exactly the same chance as one with a Demand of 1. Because it picks a route row first, a Module/Town that appears on more than one route row gets picked more often.

The engine honors `A Only`, `B Only` and specific-consignee rows, and the train's `Limit Modules`. That's as fancy as it gets. `Must Service`, `No Service` and the `Car Distribution` slider do nothing with this engine, on purpose.

Choose `Random (MRBT)` when you want every request to get a fair, unweighted chance, or when you want trainlists that feel like the original MRBT.

### Weighted Selection

`Weighted Selection` is the default engine. It picks cars at random, but weights each equipment request by its `Demand`. A request with a `Demand` of 4 is four times as likely to be picked as a request with a `Demand` of 1. This reflects the real world, where some consignees ship and receive a lot more than others.

This is also the engine that pays attention to the finer route and train settings. A `Must Service` consignee on the route gets the first pick, before the random draw starts. One of its requests is tried first, and if that car doesn't fit the drop zone or the train it's skipped, so it's a head start rather than a guarantee. The consignee can still pick up more cars in the normal draw. A `No Service` consignee is left out of the whole train, even if its Module/Town shows up on other rows of the route. `Limit Modules` caps how many different Modules/Towns get work on one trainlist.

The train's `Car Distribution` slider decides whether cars spread out along the route or bunch up on a few tracks. After each car is placed, the slider sets the odds that the next one goes to the same track, meaning drop zones that share a `Zone Reference`. At `Distribute` it never does; at `Concentrate` it always does. Bunching cars up means fewer stops for the crew. See [Trains](train.md#car-distribution).

When a car won't fit on the train, ModuOps skips it and keeps trying other, possibly shorter, cars until nothing fits.

:::tip
A single request with a very high `Demand` can crowd out everyone else. For example, a grain siding with a `Demand` of 30 on the same route as three consignees each with a `Demand` of 1 gives each small consignee only a 1 in 33 chance per pick. To balance things out you can:

- run a dedicated unit train for the busy industry,
- lower that request's `Demand`,
- mark the smaller consignees `Must Service` on the route, or
- use the `Random (MRBT)` engine, which ignores `Demand`.
:::

### Pull & Drop Ops

The other two engines forget the layout the moment the trainlist prints. Every car comes out of a yard, gets dropped at an industry, and that's the end of the story. Pull & Drop Ops keeps track of what each train leaves behind, so the next time the train comes through, those cars can go home. If you've run a layout on car cards, this is the same idea with car types standing in for the cards.

Loads and empties come along for the ride. An industry either ships product or receives it, and the engine needs to know which. That's the `Flow Type` on each equipment request. A grain elevator is a producer. The train brings it an empty hopper, the elevator fills it, and the next train hauls the load away. A lumberyard is a consumer. The train brings a loaded flat, the yard unloads it, and the empty goes back on a later train. Leave Flow Type blank and the request is treated as a consumer. See [Equipment Requests](equipment-requests.md).

Here's what happens when you click `Generate`. The engine looks at the cars earlier runs left along the route and decides which to pull. It doesn't take every car every time; how eager it is comes from the `Car Distribution` slider, though a car that has been passed over `Pickup Age Threshold` times goes no matter what. A passing train takes what's there, whether or not it has a request for that drop zone. Then it picks set-outs the same way Weighted Selection does, keeping the train within its length the whole way down the route. Anything that won't fit stays where it is for next time.

Once the train has run, the industries do their work. Cars at producers are now loaded, cars at consumers are now empty, and they wait for the next train.

The run number prints after the train symbol: `ABC-1`, `ABC-2`, and so on. Run 1 is set-outs plus a PICKUP ALL at every drop zone it works, which clears the tracks and gives the engine a known starting point: no cars. A later run may be all pickups and nothing to set out, and that's fine. At each stop the trainlist lists pickups before set-outs, the order a crew works a town.

#### PICKUP ALL

Crews make mistakes. A car ends up on the wrong track, or a drop zone gets cleaned out when it shouldn't have been. With `Include Pickup Alls` checked, the first time a drop zone is worked the trainlist tells the crew to "PICKUP ALL from" that drop zone, and ModuOps clears its record of the track. Whatever was really sitting there is gone, and the layout and the records agree again. The instruction comes back every `Pickup Age Threshold` visits (the first, fourth and seventh with the default of 3), so a mistake never lingers for long. `Reset Pickup Alls` makes every drop zone start over as if it had never been worked.

#### Sessions

Everything the engine remembers belongs to a session, and a session lasts as long as you stay on the Trainlists screen with the same train and engine selected. Change the train, change the engine, or leave the screen, and you start over with an empty layout. Plan on generating and printing the whole sequence of runs in one sitting.

Pull & Drop Ops honors the same route and train settings as Weighted Selection: `Must Service`, `No Service`, `A Only` / `B Only`, `Limit Modules`, `Car Distribution` and the train's minimum and maximum length. A `No Service` consignee is skipped for pickups too.

#### Running a sequence

Select the train and set `Scheduling Engine` to `Pull & Drop Ops`. Set `Pickup Age Threshold` and `Include Pickup Alls` to taste. Click `Generate` and print run 1. Click `Generate` again for run 2, print it, and keep going until you have as many trainlists as the session needs. Hand them to the crews in order.

:::warning
Stay on the Trainlists screen with the same train and engine for the whole sequence. Switching train or engine, or leaving the screen, starts a new, empty session.
:::

## Output formats

Every format prints on an 8.5" × 11" page. The top line is the layout name from the `Layout Name` field on the [Layout](layout.md) screen. The route direction you set on the train's route (for example East, West or Outbound) shows on the trainlist too.

In crew instructions, termination instructions, remarks and train orders, **bold**, *italic* and line breaks print; other formatting is dropped.

### MRBT

A classic monospace (typewriter style) format that mimics the original Mad River and Big Timber trainlist. It prints:

- The layout name, `TRAIN:` with symbol and name, `Departs:` with the departure yard, and `Length:` with the number of cars and units.
- `CREW INSTRUCTIONS`, if the train has any.
- Each Module/Town name in bold, with its remarks, followed by one line per car: a short work code, the drop zone name, the equipment, and a blank line for the crew to fill in.
- Train orders in their place along the route.
- Termination instructions, `Terminate:` with the terminating yard, `Complete at:` and `Comments:`.

The work code is `S` for set out or `P` for pick up, followed by `E` for empty or `L` for loaded when the load is known. PICKUP ALL lines print in bold.

The equipment shows as class and short description plus length (for example `B-Boxcar 50`), or as code plus length with `Use equipment code` checked. Long text is cut off to fit the column.

Consignee remarks print once, before that consignee's first car. Equipment remarks print in bold under the car line.

### Modern

The default format. It uses a regular proportional font and a checkbox for every task, with more wordy instructions to help crews make fewer mistakes. The header and footer are the same as MRBT (with `Train:` instead of `TRAIN:`).

- Each stop starts with a bold heading: **Scheduled work at _Module/Town_**. With `Use equipment code` checked, the module's short name is used.
- Set-outs read like `[ ] Set Out ________________ {equipment} (loaded) to _drop zone_`. The blank is for the car's reporting marks.
- Pickups read like `[ ] Pick Up {equipment} (empty) from _drop zone_`.
- PICKUP ALL lines print in bold: `[ ] PICKUP ALL from <drop zone>`.

On a half page, each set-out takes two lines, with the "to _drop zone_" part on the second line.

### SwitchList

ModuOps' take on a prototype switch list. It always prints as one full sheet split into two halves, meant to be folded lengthwise so it's easy to carry around the layout. `Half Page` / `Full Page` is ignored, and the equipment code is always used.

**Left half: the switch list form**

- A header with the layout name, **SWITCH LIST**, a `Date` blank, and boxes for `Train` (the train symbol) and `Time`.
- Columns: **INITIAL**, **NUMBER**, **KIND**, **FROM** and **DEST**.
- Each Module/Town starts with a row showing its name between rows of asterisks.
- For each car: the work code (such as `S`, `SE`, `PL`) in INITIAL, the equipment code and length in KIND (for example `XM-50`), and the drop zone's `Zone Reference` in DEST. NUMBER is left blank for the yard crew.
- **PICKUP ALL WHEN DROPPING** prints at the bottom.

If equipment has no `Code`, KIND uses its short description. If a drop zone has no `Zone Reference`, DEST shows the start of the drop zone name.

Yard crews write each car's reporting marks on the line after the train is built and before the crew takes it out of the yard.

:::warning
The switch list form holds up to **36 rows**, counting car rows and Module/Town rows. Anything past row 36 doesn't print. If a train has more work than that, shorten the train or set `Limit Modules` on the train.
:::

**Right half: crew reference**

- The layout name, train name and symbol, `Departs:` and `Length:`.
- `CREW INSTRUCTIONS` and all the train's train orders.
- **Equipment Reference**: each equipment code with its description, plus equipment remarks.
- For each Module/Town: its name and remarks, and each drop zone's `Zone Reference` with the consignee name and remarks, so the crew can match DEST to the right track.
- Termination instructions, `Terminate:`, `Complete at:` and `Comments:`.

:::info[Screenshot needed]
A printed SwitchList showing the form on the left half and the crew reference on the right half.
:::

## Print a trainlist

1. Generate the trainlist and check the preview.
2. Click `Print`. The button shows `Printing...` while it works.
3. Your computer's normal print dialog opens. Choose your printer and settings, and print.

The page prints exactly as shown in the preview. Each print covers one train; to print a whole session, pick each train in turn, then `Generate` and `Print`.

:::tip
To keep an electronic copy, most operating systems let you save as PDF from the print dialog.
:::

## Changes from version 5

- The engines were renamed: "Mad River and Big Timber" is now `Random (MRBT)` and "Use Cars/Week" is now `Weighted Selection`, the default. Cars/Week is now called `Demand`.
- New `Pull & Drop Ops` engine, with loads and empties, pickups, `Pickup Age Threshold` and PICKUP ALL lines.
- New `Must Service` route consignees, used by `Weighted Selection`.
- `No Service` now leaves a consignee out of the whole train when using `Weighted Selection` or `Pull & Drop Ops`.
- `Random (MRBT)` now uses specific-consignee, `A Only` and `B Only` route rows (in v5 it only used all consignees).
- The "Drop Zone Favoring" slider on the trainlist screen is replaced by the `Car Distribution` slider on each train.
- The "Select Output Format" menu is split into `Output Format` (MRBT, Modern, SwitchList) and a `Half Page` / `Full Page` toggle. "Use equipment type codes" is now `Use equipment code`.
- The `Train` dropdown lists only trains with a route, and the button is now `Generate`.
- The preview is now the real, readable printed page. It no longer shows the last trainlist when you return to the screen.
- SwitchList now falls back to the short description or drop zone name when a code or zone reference is missing, holds up to 36 rows, and FROM no longer shows the source yard.
- Each generation starts with all drop zones empty.
