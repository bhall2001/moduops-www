# Drop zones

Drop zones in ModuOps are defined as sections of track where equipment can be set out. A drop zone could be the entire length of a siding or there can be multiple drop zones per track. It is even possible to define a drop zone to be longer then the length of a siding.

Drop zones are defined as part of a module/town. Select a module/town and then click the `Drop Zones` tab to display the list of drop zones for the selected module/town.

## Create a new drop zone

1. Click `Modules/Towns` in the sidebar menu.
2. Select a module/town.
3. Click the `Drop Zones` tab on the right of the Modules/Towns screen.
4. Click the `New` button below the drop zone list.

A new drop zone is created and you are navigated to the drop zone edit screen.

## Edit a drop zone

1. Click `Modules/Towns` in the sidebar menu.
2. Select a module/town.
3. Click the `Drop Zones` tab on the right of the Modules/Towns screen.
4. Click the `Edit` button below the drop zone list.

:::tip
You can double click a drop zone to open the edit screen.
:::

## Drop zone fields

On the drop zone edit screen there are numerous fields and flags that can be set.

**Zone Ref** - abbreviated text string to reference the drop zone by. Maximum 11 characters, all caps. At this time this value is not used in the application.

**Name (required)** - The name of the drop zone

**Use Consignee Name** - a menu listing the names of consignees on the module. It is common that a drop zone name will be the same as a consignee name. This menu allows you to easily select a consignee as the drop zone name.

**Length (required)** - The length of the drop zone. While the field is labeled as feet, the length can be any unit of measure. The only requirement is that the unit is consistent with all other lengths in the layout.

**Faces** - an indication of the direction the drop zone faces relative to the module. This is used to indicate drop zones that are trailing leads to the scheduling engine. All drop zones that are trailing leads in the same direction on a module/town should have the same value selected in this menu. Valid options are `A` and `B`.

**Yard/Interchange/Staging** - a flag indicating that this drop zone is a yard, interchange or staging. All trains must depart from a yard, interchange or staging drop zone. Each layout is required to have at least one drop zone designated as a yard, exchange or staging zone.

**Active** - This flag indicates whether a drop zone is active or inactive. It is useful if a drop zone included in an operations plan is found to have an issue once the layout is set up and can not be used in the operations plan. Rather than updating all train routes that use this drop zone, simply unchecking this flag and the scheduling engine will not select this drop zone when building trainlists.

## Clone a drop zone

Any drop zone can be copied to a new drop zone.

1. Select the drop zone in the drop zone list
2. Click the `Clone` button to copy the drop zone to a new drop zone

The drop zone edit screen will open with an exact duplicate of the drop zone. Be sure to update the name of the drop zone so you know which is the new copy.

## Delete a drop zone

If a drop zone is no longer needed, you can delete it from the layout.

1. Select the drop zone in the drop zone list
2. Click the `Delete` button to delete the drop zone

You will have one last chance to change your mind. Once a drop zone is deleted it can not be recovered.
