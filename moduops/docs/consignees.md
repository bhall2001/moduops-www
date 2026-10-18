---
id: consignees
title: Consignees
sidebar_label: Consignees
---

# Consignees

Consignees are the businesses on your layout that request railroad equipment. Trains deliver that equipment to drop zones. A consignee may have its own drop zones or share them with other consignees. Either way, each consignee makes requests for specific equipment at specific drop zones.

Consignees drive the action on your layout. Without them, there would be no work for your trains.

Consignees belong to a module/town. To see them, click `Modules/Towns` in the sidebar menu, select a module/town, then click the `Consignees` tab.

## Create a consignee

1. Click `Modules/Towns` in the sidebar menu.
2. Select a module/town.
3. Click the `Consignees` tab.
4. Click `New`.
5. Enter a `Name` (required) and any `Remarks` (optional).
6. Click `Save`.

You return to the Consignees tab with the module/town still selected.

:::note
The `Equipment Requests` section only appears after a consignee has been saved. To add requests to a new consignee, save it first, then open it again.
:::

## Edit a consignee

1. Select the consignee in the Consignees tab.
2. Click `Edit`.
3. Make your changes and click `Save`. Click `Cancel` to leave without saving.

:::tip
Double-click a consignee to open it for editing.
:::

If you try to leave the screen with unsaved changes, ModuOps asks if you are sure. Click `Stay on Page` to keep editing, or `Leave Page` to throw away your changes.

## Consignee fields

Only `Name` is required. ModuOps shows "Name is required" under the field if you try to save without one.

| Field | Description |
| --- | --- |
| `Name` (required) | The name of the consignee. |
| `Remarks` (optional) | Notes a crew may need when working this consignee, such as how to switch it or how to work a tricky turnout. Remarks are printed on the trainlist when this consignee gets work. |

The `Remarks` box has the same formatting toolbar as module/town remarks: bold, italic, checklist item, indent, underline blank and a `½ Page` width preview. See [Modules/Towns](module.md#formatting-remarks).

## Equipment Requests section

When you open a saved consignee, the `Equipment Requests` section lists the equipment this consignee asks for.

:::info[Screenshot needed]
Consignee edit screen showing the Equipment Requests table with a few requests.
:::

| Column | Description |
| --- | --- |
| Drop Zone | Where the equipment goes. |
| Class, Description, Length | The equipment type. |
| Demand | How often this request should be chosen compared to others. |
| P/C | `P` for Producer, `C` for Consumer, blank if not set. |

Use the `New Request`, `Edit`, `Clone` and `Delete` buttons to manage requests. Double-click a request to edit it. See [Equipment Requests](equipment-requests.md) for details.

## Delete a consignee

1. Select the consignee in the Consignees tab.
2. Click `Delete`.
3. Click `Delete` in the confirmation box.

:::warning
Deleting a consignee also deletes all of its equipment requests. Any trainlist lines for those requests are removed too. This cannot be undone.
:::

## Must Service and No Service

You don't mark a consignee as "must service" or "no service" on this screen. That's set per train, on the train's route, using the `Consignee Filter`. See [Train Route](train-route.md).

## Changes from version 5

- A new consignee must be saved before you can add equipment requests.
- The Consignees tab has new `Req`, `Producers` and `Consumers` columns showing request counts.
- Remarks now have a formatting toolbar. You no longer type `<b></b>` or `<i></i>` tags.
