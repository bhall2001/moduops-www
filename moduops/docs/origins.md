---
id: origins
title: Origins
sidebar_label: Origins
---

# Origins

The Origins screen helps you decide what to put in a yard, staging track or other train origin before a session. For the origin you pick, it works out which car types, and how many of each, it should hold when the session starts, based on what the trains leaving it are going to ask for. It's a planning aid. It doesn't change anything in your layout except one setting, the storage slider.

Click `Origins` in the sidebar to open it. It lists the drop zones marked `Train Origin/Terminus` that at least one train departs from, sorted by name. A drop zone that no train uses as its `Departure` isn't listed, even if it's marked. See [Drop Zones](drop-zones.md#origin-and-terminus-tracks). The first origin is selected for you.

:::info[Screenshot needed]
Origins screen with an origin selected, the originating trains list and the car type grid.
:::

## How it works

Pick an origin and ModuOps looks at every train whose `Departure` is that drop zone. These show under `Originating Trains`. It adds up the `Demand` of the equipment requests each train could work along its route. Every request in the route counts, whether or not a particular trainlist ends up picking it.

A route row for a whole module/town counts all of that module/town's consignees. A row for a single consignee counts just that consignee. A consignee marked `Must Service` (`*`) is added, and a `No Service` consignee (`!`) is subtracted, so a consignee you've left off the train doesn't drive the origin's stock. Train orders and timetable rows on the route have no equipment and are skipped. Disabled equipment requests are skipped too, and `A Only` and `B Only` are ignored.

That gives a total Demand for each car type. The origin then gets a share of its usable length for each car type.

For example, take a 1000 foot origin with the storage slider at 70. That leaves 700 feet to fill. If the trains from the origin ask for boxcars with a total Demand of 6 and hoppers with a total Demand of 4, and both are 50 feet long, the `Percent` method gives the boxcars 60% of the room and the hoppers 40%. That works out to 8 boxcars and 6 hoppers, 14 cars in all, filling 700 feet.

## Screen

The grid on the right has one row per car type with demand, and these columns:

| Column | Description |
| --- | --- |
| `Class` and `Description` | The car type. |
| `Length` | The car type's length. |
| `#` | How many of this car type the origin should start with. |
| `Demand` | The car type's total Demand from the originating trains. |
| `TotLen` | `#` times `Length`: the track space those cars take up. |

Click a column heading to sort. The grid starts sorted by `#`, largest first. A footer adds up the number of cars, the Demand, and the length the cars use. Compare that last figure to the drop zone's `Length` to see how full it will be.

### Method

`Percent` is selected by default. It splits the usable length by each car type's share of the total Demand, as in the example above. `Standard Deviation` weights each car type by its total length (Demand times car length) instead of Demand alone, so long cars such as flat cars and tank cars claim more of the yard than they do under `Percent`. Try both and see which gives you a mix you like. The choice isn't saved, so the screen opens on `Percent` each time.

### Origin Storage %

The slider, labelled `Origin Storage %`, sets how much of the origin's length to fill, from 30% to 120%, starting at 70%. Go over 100% if you stage cars beyond the drop zone's nominal length. The number shows beside the label as you drag, and the grid updates right away. The slider is saved with your layout when you let go of it.

## Troubleshooting

If something is empty you'll see a short message saying why. The list says "No trains originate at an origin/terminus drop zone" when no train departs from a drop zone marked `Train Origin/Terminus`. The grid says "No demand for this origin" when the trains' routes have no equipment requests with Demand. A train only counts if its route is set up. See [Train Route](train-route.md).

Also see the [FAQ](faq.md) if an origin shows no cars.
