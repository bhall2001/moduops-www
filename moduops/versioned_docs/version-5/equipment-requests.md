# Equipment requests

In order for the scheduling engine to schedule work for trains, consignees must make requests for equipment to be dropped at drop zones. This is done by adding equipment requests on the consignee edit screen.

## New equipment request

1. Click "Modules/Towns" in the sidebar menu
2. Click the "Consignees" tab on the right side of the Modules/Towns screen
3. Double click a consignee to open the edit screen
4. Click the "New Request" button in the middle of the consignee edit screen. This creates a new equipment request with default values.

:::warning
If no drop zones are defined for a module/town, you cannot create equipment requests.
:::

## Edit equipment request

1. Click "Modules/Towns" in the sidebar menu
2. Click the "Consignees" tab on the right side of the Modules/Towns screen
3. Double click a consignee to open the edit screen
4. Click the "Edit Request" button in the middle of the consignee edit screen.

:::tip
You can double click an equipment request to open the edit screen
:::

## Equipment request fields

**Cars/Week (required)** - read as "cars per week". A number used by the random scheduling engine to weight selection of the equipment request. The value is used along with all other potential equipment requests on a train's route to determine the probability of selection of a request.

**Remarks** - comments that a crew may need when this request is selected to be worked. Remarks can be anything from special handling of the equipment to information about how to switch the equipment and/or drop zone.

**Drop Zone (required)** - select the drop zone this request is for.

**Equipment (required)** - select the equipment this request is for.

:::tip
You can select multiple pieces of equipment on 1 request. Use your standard operating system method to select multiple items from a list. Each equipment type selected results in a unique equipment request being created.
:::

## Clone an equipment request

A copy of an equipment request can be obtained by cloning another request.

1. Click an equipment request in the equipment request list
2. Click the `Clone Request` button in the middle of the consignee edit screen

A new equipment request is created and the edit screen for the equest is opened.

## Delete an equipment request

1. Click an equipment request in the equipment request list
2. Click the `Delete Request` button

You will have on last chance to change your mind. Once an equipment request has been deleted it can not be recovered.
