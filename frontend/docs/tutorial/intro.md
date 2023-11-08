---
sidebar_position: 1
---

# Tutorial Intro

Let's discover ModuOps in less than 15 minutes.

## Getting Started

Get started by creating a data file.

- launch ModuOps and select "New..." from the File menu
- name the file "myLayout.mop2" and save it at a location where you will be able to find it again

You will see a message that the file was created. Close the window that appears.

To get started with ModuOps, we will start with a very simple scenario that we build off of.

## Create Equipment

ModuOps requires that equipment types be setup for scheduling on the layout. ModuOps does not require reporting marks. This is one of the benefits of ModuOps. Equipment is referenced by type.

To get things started, we will create a piece of equipment for a 50 foot box car. Click `Equipment Register` in the left sidebar menu. Now click the `New` button. This creates a new piece of equipment.

Next we need to add the details of the equipment. In the `Classification` popup menu select `X-Box`. For the description enter `Boxcar`. In the field labeled as short enter `Box`. In the length field enter `50`.

:::note
Fields with a red label are required in ModuOps.
:::

We now have a single piece of equipment that we can schedule on a train.

## Create Module

Next up we need to create a Module for our layout. Click `Modules/Towns` in the left sidebar. Now click the `New` button over the column marked for Modules. A new module is created.

Now we need to add some basic information for the module. Let's name our module by typing `Somewhere in the world` in the `Name` field and `Somewhere` in the short field. There are other fields you can fill in but they are all optional. Click `Done`.

## Module key concepts

ModuOps modules have 2 very important concepts -- consignees and drop zones. A consignee are business who need to have equipment deliver some commodity to them. Consignees may have 1 or more sidings. Multiple Consignees can share a single siding as well. This is how a team track could be defined.

Drop zones are sections of track where equipment can be dropped. A drop zone could be defined as the full length of a siding or a single siding can have multiple drop zones. In fact there are cases where a drop zone could be defined to be longer than the length of a siding. When there is an off-spot available the drop zone length is defined to include the length of the off-spot section of track.

## Create Consignee

On the `Modules/Towns` screen, click `New` over the column marked for Consignees. For our tutorial, we will start by creating 1 business. Name the business `Retail Warehouse`. The name is the only required item when creating a Consignee. Click `Done`.

## Create a drop zone.
