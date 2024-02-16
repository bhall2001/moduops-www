# Modules and towns

The Modules/Towns screen plays a critical role in the setup of your layout. This screen is where you will setup your modules/towns with consignees and drop zones. This information is used by the scheduling engine to generate trainlists for the layout.

## Module/Town data

### Create a Module/Town

1. Click `Modules/Towns` in the sidebar menu.
2. Click the `New` button above the Modules/Towns list to create a new module/town.

### Edit a Module/Town

1. Select a module/town from the `Modules/Towns` list.
2. Click the `edit` button to edit the module/town.

:::tip
Double click on a module/town opens the edit screen
:::

### Module/Town fields

On the module/town edit screen there are various fields for entering information about the module/town.

**Name (required)** - the name of the module/town

**Short name (required)** - an abbreviated name of the module/town

**Owner** - the owner of the module/town

**Size** - a brief description of the size of the module/town

**Depicted city** - the city depicted by the module/town

**State** - the State depicted of the module/town

**Passing Siding** - the length of a passing siding on the module/town

**Description** - a short description of the module/town

**Remarks** - any remarks pertaining to the operation of the module/town. Remarks are displayed on any trainlist where the module/town is selected for work.

:::tip
Basic html formatting is supported in the `Remarks` field. `<b></b>` displays any text as bold. `<i></i>` displays any text as italic.
:::

### Save a Module/Town

Individual modules/towns can be saved to your local hard drive. This allows the module/town to be used in other layouts you create in the future.

Saved modules/towns can also be added to the global ModuOps Xchange, a repository of modules/towns from around the world. This allows the module/town to be used by anyone who is creating a layout for a setup. Operation Chiefs know to look in the ModuOps Xchange to locate the modules/towns needed for public display layouts such as those at a train show.

1. Select the module/town from the `Modules/Towns` list.
2. Click the `Save` button to save the module/town to your local hard drive. The module/town is saved to your local hard drive where it can be accessed at any time.

:::tip
Save modules/towns to a location on your hard drive where you will be able to find the file again. Saving all modules/towns to the same directory on your local hard drive makes it easier to find the modules/town when you are creating a new layout.
:::

:::warning
Module files are saved as a json text file. It is possible to open the file in any text editor. Changing any of the information in the saved module file is likely to break the module/town when it is added to a layout. So don't change anything in the saved module file if you decide to have a look :wink:
:::

### Add a Module/Town

Modules/towns saved to your local hard drive can be added to a layout. Click the `Modules/Towns` in the sidebar menu to navigate to the `Modules/Towns` screen. Click the `Add` button. Using the standard file dialog on your operating system, navigate to the directory where the module/town file is saved. Click the `Open` button.

The module/town is added to the current layout.

### Remove a Module/Town

1. Click `Modules/Towns` in the sidebar menu to navigate to the `Modules/Towns` screen.
2. Click a module/town in the `Modules/Towns` list.
3. Click the `Remove` button to remove the module/town from the layout.

:::warning
Removing a module/town from the layout will also remove any related resources. This includes any unused equipment, equipment requests and train route information.
:::

## Drop zones

Drop zones in ModuOps are defined as sections of track where equipment can be set out. A drop zone could be the entire length of a siding or there can be multiple drop zones per track. It is even possible to define a drop zone to be longer then the length of a siding.

Drop zones are defined as part of a module/town. Select a module/town and then click the `Drop Zones` tab to display the list of drop zones for the selected module/town.

### Create a new drop zone

1. Click `Modules/Towns` in the sidebar menu.
2. Select a module/town
3. Click the `Drop Zones` tab on the right of the Modules/Towns screen.
4. Click the `New` button

A new drop zone is created and you are navigated to the drop zone edit screen.

### Edit a drop zone

1. Click `Modules/Towns` in the sidebar menu.
2. Select a module/town
3. Click the `Drop Zones` tab on the right of the Modules/Towns screen.
4. Click the `Edit` button

:::tip
You can double click a drop zone to open the edit screen.
:::

### Drop zone fields

On the drop zone edit screen there are numerous fields and flags that can be set.

**Zone Ref** - abbreviated text string to reference the drop zone by. Maximum 11 characters. At this time this value is not used in the application.

**Name (required)** - The name of the drop zone

**Use Consignee Name** - a menu listing the names of consignees on the module. It is common that a drop zone name will be the same as a consignee name. This menu allows you to select a consignee as the drop zone name.

**Length (required)** - The length of the drop zone. While the field is labeled as feet, the length can be any unit of measure. The only requirement is that the unit is consistent with all other lengths in the layout.

**Faces** - an indication of the direction the drop zone faces relative to the module. This is used to indicate drop zones that are trailing leads to the scheduling engine. All drop zones that are trailing leads in the same direction on a module/town should have the same value selected in this menu. Valid options are `A` and `B`.

**Yard/Interchange/Staging** - a flag indicating that this drop zone is a yard, interchange or staging. All trains must depart from a yard, interchange or staging drop zone. Each layout is required to have at least one drop zone designated as a yard, exchange or staging zone.

**Active** - This flag indicates whether a drop zone is active or inactive. It is useful if a drop zone included in an operations plan is found to have an issue once the layout is set up and can not be used in the operations plan. Rather than updating all train routes that use this drop zone, simply unchecking this flag and the scheduling engine will not select this drop zone when building trainlists.

### Clone a drop zone

Any drop zone can be copied to a new drop zone.

1. Select the drop zone in the drop zone list
2. Click the `Clone` button to copy the drop zone to a new drop zone

The drop zone edit screen will open with an exact duplicate of the drop zone. Be sure to update the name of the drop zone so you know which is the new copy.

### Delete a drop zone

If a drop zone is no longer needed, you can delete it from the layout.

1. Select the drop zone in the drop zone list
2. Click the `Delete` button to delete the drop zone

You will have one last chance to change your mind. Once a drop zone is deleted it can not be recovered.

## Consignees

Consignees are businesses that request railroad equipment, which is then delivered by trains to designated drop zones on the layout. These businesses may have exclusive access to particular drop zones or may share them with others. In either scenario, consignees submit requests for specific equipment to be delivered to specific drop zones.

Consignees play a crucial role in the layout's activity. Without them, there would be no operations taking place.

### Create a new consignee

1. Click `Modules/Towns` in the sidebar menu.
2. Select a module/town
3. Click the `Consignees` tab on the right of the Modules/Towns screen.
4. Click the `New` button

A new consignee is created with default values.

### Edit a consignee

1. Click `Modules/Towns` in the sidebar menu.
2. Select a module/town
3. Click the `Consignees` tab on the right of the Modules/Towns screen.
4. Click the `Edit` button

:::tip
You can double click a consignee to open the edit screen.
:::

### Consignee fields

**Name (required)** - the name of the consignee

**Remarks** - comments a crew working this consignee may need to have. This could be special instructions for how to switch the consignee or possibly practical information about how to operate turnouts. The text here is printed on the trainlist if this consignee is selected for work.

### Delete a consignee

1. Select a consignee from the consignee list
2. Click the `Delete` button to delete the consignee

You will have one last chance to change your mind. Once a consignee is deleted it can not be recovered.

## Equipment requests

In order for the scheduling engine to schedule work for trains, consignees must make requests for equipment to be dropped at specific drop zones. This is done by adding equipment requests on the consignee edit screen.

### New equipment request

1. Click "Modules/Towns" in the sidebar menu
2. Click the "Consignees" tab on the right side of the Modules/Towns screen
3. Double click a consignee to open the edit screen
4. Click the "New Request" button in the middle of the consignee edit screen. This creates a new equipment request with default values.

### Edit equipment request

1. Click "Modules/Towns" in the sidebar menu
2. Click the "Consignees" tab on the right side of the Modules/Towns screen
3. Double click a consignee to open the edit screen
4. Click the "Edit Request" button in the middle of the consignee edit screen.

:::tip
You can double click an equipment request to open the edit screen
:::

### Equipment request fields

**Cars/Week (required)** - read as "cars per week". A number used by the random scheduling engine to weight selection of the equipment request. The value is used along with all other potential equipment requests on a train's route to determine the probability of selection of a request.

**Remarks** - comments that a crew may need when this request is selected to be worked. Remarks can be anything from special handling of the equipment to information about how to switch the equipment and/or drop zone.

**Drop Zone (required)** - select the drop zone this request is for.

**Equipment (required)** - select the equipment this request is for.

:::tip
You can select multiple pieces of equipment on 1 request. Use your standard operating system method to select multiple items from a list. Each equipment type selected results in a unique equipment request being created.
:::

### Clone an equipment request

A copy of an equipment request can be obtained by cloning another request.

1. Click an equipment request in the equipment request list
2. Click the `Clone Request` button in the middle of the consignee edit screen

A new equipment request is created and the edit screen for the equest is opened.

### Delete an equipment request

1. Click an equipment request in the equipment request list
2. Click the `Delete Request` button

You will have on last chance to change your mind. Once an equipment request has been deleted it can not be recovered.
