---
id: equipment-requests
title: Equipment Requests
sidebar_label: Equipment Requests
---

# Equipment Requests

An equipment request is a unit of work: a consignee asks for a specific type of equipment to be set out at a specific drop zone. ModuOps chooses from these requests when it builds a trainlist. No requests, no work for your trains.

Equipment requests are made on the consignee edit screen.

## Before you start

- The module/town needs at least one drop zone that is not a `Train Origin/Terminus` track. See [Drop Zones](drop-zones.md).
- Your layout needs equipment types in the [Equipment Register](equipment.md).
- The consignee must already be saved. See [Consignees](consignees.md).

## Create equipment requests

1. Click `Modules/Towns` in the sidebar menu.
2. Select a module/town and click the `Consignees` tab.
3. Double-click a consignee to open it.
4. Click `New Request` in the `Equipment Requests` section.
5. Set the `Demand` (required). It starts at 1.
6. Choose a `Flow Type` if you use the Pull & Drop Ops engine (optional). `Enabled` is on by default.
7. Add any `Remarks` (optional).
8. Click one drop zone in the `Drop Zone` list (required).
9. Click one or more equipment types in the `Equipment` list (at least one is required). Click a row again to unselect it. The count of selected types is shown under the list.
10. Click `Save`.

ModuOps creates one equipment request for each equipment type you selected. They all share the same drop zone, Demand, Flow Type and Remarks. You return to the consignee edit screen.

:::info[Screenshot needed]
New Equipment Request screen with a drop zone selected and three equipment types selected ("3 selected").
:::

:::tip
Selecting several equipment types at once is a fast way to set up a consignee that takes, say, boxcars, reefers and tank cars at the same drop zone.
:::

## Edit an equipment request

1. Open the consignee.
2. Select the request in the `Equipment Requests` list.
3. Click `Edit`.
4. Make your changes and click `Save`. Click `Cancel` to leave without saving.

When editing, you can choose only one equipment type. The lists scroll to show the current drop zone and equipment.

:::tip
Double-click a request to open it for editing.
:::

## Equipment request fields

| Field | Description |
| --- | --- |
| `Enabled` | On by default. Switch it off to keep the request but leave it out of trainlists. The Equipment Requests list shows `(off)` after its Demand. |
| `Demand` (required) | How often this request should be chosen compared to other requests. From 0.01 to 10, with up to two decimal places. Default is 1. |
| `Flow Type` (optional) | `Not specified`, `Producer (ships loaded)` or `Consumer (receives loaded)`. Used only by the Pull & Drop Ops engine. |
| `Remarks` (optional) | Your own notes about this request. It has the same formatting toolbar as [module/town remarks](module.md#formatting-remarks). |
| `Drop Zone` (required) | The drop zone the equipment goes to. Pick one. |
| `Equipment` (required) | The equipment type requested. Pick one or more when creating, one when editing. |

`Demand`, `Drop Zone` and `Equipment` are the required fields. If one is missing or out of range, ModuOps won't save and shows a message next to it: "Please select a drop zone", "Please select at least one equipment type" ("Please select an equipment type" when editing), or "Demand must be 0.01-10". More than two decimal places gives "Max 2 decimal places".

The top of the screen also shows which module/town and consignee the request belongs to.

### Demand

Demand weights the chance that a request is chosen. When the **Weighted Selection** engine builds a trainlist, a request with a Demand of 4 is four times as likely to be picked as a request with a Demand of 1. Every eligible request on the train's route is in the running, so Demand only matters compared to the other requests the train could work. Give busy industries a higher Demand and leave the quiet ones at 1. A Demand above 10, which can come from a version 5 layout, is kept as it is but counts as 10.

The Pull & Drop Ops engine also uses Demand to weight which cars to set out. The Random (MRBT) engine is a simple random selection with no weighting, so it ignores Demand. See [Trainlists](trainlists.md) for more about the engines.

### Flow Type

Flow Type tells the Pull & Drop Ops engine which way the loads move at this industry. A grain elevator or a sawmill is a `Producer (ships loaded)`: it gets empties and ships loads. A lumberyard or a fuel dealer is a `Consumer (receives loaded)`: it gets loads and sends back empties. Leave it at `Not specified` and the request is treated as a consumer.

The other engines ignore Flow Type. In the consignee's request list, the `P/C` column shows `P`, `C` or blank.

### Drop Zone list

The `Drop Zone` list shows this module/town's drop zones and their lengths. Train origin/terminus tracks are not listed, because consignees request equipment at regular drop zones, not yards.

Inactive drop zones are still listed. Requests on an inactive drop zone are simply skipped when trainlists are built. See [Drop Zones](drop-zones.md#active).

:::warning
If every drop zone on the module/town is a train origin/terminus track, or there are none, the `Drop Zone` list is empty and you can't save the request. Add a regular drop zone first.
:::

## Clone an equipment request

1. Open the consignee.
2. Select the request in the `Equipment Requests` list.
3. Click `Clone`.
4. A new request opens with the same Demand, Flow Type, Remarks, drop zone and equipment. Change what you need.
5. Click `Save`.

## Delete an equipment request

1. Open the consignee.
2. Select the request in the `Equipment Requests` list.
3. Click `Delete`.
4. Click `Delete` in the confirmation box.

:::warning
Deleting an equipment request also removes any trainlist lines for it. This cannot be undone.
:::

## Changes from version 5

- `Cars/Week` is now `Demand`. It still defaults to 1 with a minimum of 1.
- New `Flow Type` field (Producer/Consumer) for the Pull & Drop Ops engine.
- `Edit Request`, `Clone Request` and `Delete Request` are now `Edit`, `Clone` and `Delete`, next to `New Request`.
- Select multiple equipment types by clicking each one. No keyboard shortcuts needed.
- Train origin/terminus tracks (version 5's yards) are no longer offered as drop zones for requests.
