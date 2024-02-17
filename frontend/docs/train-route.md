# Train route

Select a train on the train list screen and click the `Route` button navigates to the train route screen. You can also double click a train to navigate to the train route screen.

The train route screen displays the train name and symbol over the train's route. Initially a train's route will not have any stops. The departure and termination yards are displayed as well.

## Overview of routes

A train's route is displayed from top to bottom, listing the modules/towns, consignees or train orders in sequence. Each step in the train's route represents the intended order of movement for the train. The first line signifies the initial module/town, consignee or train order the train encounters.

Train route items are arranged in chronological order. Work is randomly selected based on the information provided in the train's route. When a trainlist is printed, the order of items on the train list mirrors the order of items on the train's route.

:::info
ModuOps randomly selects equipment requests from all available requests that make up a train's route. It is possible that a line on a trains route will not have a corresponding line on the trainlist if no work was selected for that module/town or consignee.
:::

## Adding a Module/Town to the route

On the left side of the screen is a list of all the modules/towns in the layout. There is also a tab to select train orders entered on the train's edit screen.

Clicking a module selects the module in the list. Click the right arrow in the center of the window to add this module/town to the train's route. The default setting is to service all consignees when a module/town is added to a train's route.

## Select Consignees based on trailing spur direction

It is possible to select a sub set of consignees to service as well. After selecting a module/town, in the lower left of the train route screen there is a menu labeled `Select Consignee`.

**Select `A` consignees**

1. Click to select a module/town from the list on the train route screen.
2. Click the `Select Consignee` menu and select `A Only`. This will show all the consignees that have an `A` facing drop zone.
3. Click the right arrow in the center of the screen to add all `A Only` consignees to the train's route.

**Select `B` consignees**

1. Click to select a module/town from the list on the train route screen.
2. Click the `Select Consignee` menu and select `B Only`. This will show all the consignees that have an `B` facing drop zone.
3. Click the right arrow in the center of the screen to add all `B Only` consignees to the train's route.

:::tip
Drop zone directions of `A` or `B` facing is set on the drop zone edit screen. Please refer to the modules/towns documentation to learn how to set this value.
:::

This instruction on the train's route informs the scheduling engine when generating the trainlist for this train, at this sequence in the train's route, only consignees facing either the `A` or `B` direction should be selected for work (based on the direction chosen in the menu).

## Service specific consignee(s) only

It is possible to select an individual consignee to service on the train's route. ModuOps provides the flexibility to allow for unique route options.

1. Click to select a module/town on the train route screen.
2. Click the `Select Consignee` menu and select `A Only`. This will show all the consignees that have an `A` facing drop zone.
3. Select a consignee from the `A Only` list to highlight the line on the bottom left of the train route screen.
4. Click the right arrow in the center of the screen to add that specific consignee to the train's route.

If the train's route needs to have a `B` facing consignee, the same procedure is followed except that you will select `B Only` in the `Select Consignee` menu.

:::tip
Be sure that all drop zones are defined with either an `A` or `B` direction. If drop zone does not have a direction defined, you will not be able to
:::

## No service for consignee

The are times when a train may not want to service a specific consignee. Perhaps the consignee is a grain elevator that is serviced by a grain unit train instead of a local turn. You can indicate on a train's route that a specific consignee should not be serviced.

1. Select a module/town on the train route screen.
2. Select "No Service" from the `Select Consignee` menu on the bottom left of the screen. A list of all the consignees are displayed.
3. Select the consignee that should not be serviced by this train and click the right arrow in the center of the screen.

A special instruction is added to the train's route indicating that the consignee should not be serviced.

## Direction indicator

ModuOps train routes are able to add a direction indication on when a consignee should be serviced. This can be used to provide additional information to the train's crew to assist them with performing their work.

1. Select a module/town on the train route screen.
2. Click the `Direction` menu on the bottom left of train route screen.
3. Select `Outbound` from the list of available directions.
4. Select either `A Only` or `B only` in the `Select Consignee` menu on the bottom left of train route screen. In most cases the direction indication is used in conjunction the facing direction of drop zones such that only trailing drops are scheduled in the direction of travel that was selected.
5. Click the right arrow in the center of the screen to add the module/town to the train's route.

You will notice the train's route has an `O` in the `Dir` column. This has the effect of printing `(Outbound)` on the trainlist when this module/town is selected to be worked.

:::info
Modules are arranged in a layout where drop zones face either the A or B direction, indicating which way the drop zone trails. The orientation varies from module to module.

Typically a train's route will feature modules with drop zones oriented such that some may have `A` as trailing while others will have `B` as trailing. This arrangement is normal and expected.
:::

## Reorder route stops

A train's route are the sequence of stops and work a trainlist will output depending on what is selected by the scheduling engine. It is possible to reorder the stops by selecting a line in the train's route and clicking the `up` and `down` buttons on the right side of train route screen.

The selected line will move up or down depending on which button is pressed. This has the effect of reordering the stop to happen either earlier or later in the train's sequence of stops/work.

## Remove a route stop

To remove a stop on a train route, select the line in the route that you would like to remove. Click the left arrow in the center of the screen. This will remove the stop from the train's route.
