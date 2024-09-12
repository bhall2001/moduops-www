---
slug: switch_list
title: Introducing switch lists
authors: [bhall]
tags: [ModuOps, 'Switch Lists']
---

Version 5.5.0 of ModuOps introduces switch lists to the application. Switch lists are essential documents used by crews during switching operations. The ModuOps switch list is based on prototypical forms and follows the ModuOps philosophy of encouraging operations on temporary layouts. Switch lists are also perfect for static setups like home or club layouts.

<!-- truncate -->

![switch list](/img/switchlist-full-page.svg)

Gaining access to the switch list output format is from the trainlist screen. Switch lists are added to the output format menu as an option. Once selected, click the `Generate Trainlist` button. A thumbnail of the generated switch is displayed. Click the `Print` button to print the switch list.

## Required fields

ModuOps switch lists use 2 fields that typically have not been used in the past. Both of these fields must have data in them or the switch list will not display any information for the items when printed.

### Equipment AAR code

On the equipment screen, be sure that all equipment has a value for the `AAR code` field. This is the field that is displayed on the switch list when printing.

If you are not sure how to determine the AAR code for a piece of equipment, the Opsig group has a handy reference for AAR codes that you can see by [clicking here](https://www.opsig.org/files/resources/AARFreightCarCodes.pdf).

:::caution
If the AAR code field is empty, the switch lists won't show car kind information when printed.
:::

### Drop zone reference

On the drop zone screen, be sure that all drop zones have a value in the `Zone reference` field. This field is displayed on the switch list when printing.

:::caution
If the drop zone reference field is empty, switch lists won't show destinations when printed.
:::

## Switch list form details

A switch list is printed in 2 columns. The first column is the ModuOps switch list form. The second column contains information about the work the crew will perform. The printed sheet is intended to be folded in half lengthwise.

### Switch list header

The switch list header displays the layout name. This is the name field on the Layout screen.

The header has a blank space to enter the date of the train's operation. Below this the train symbol is added to the switch list along with a space to write the time the train starts the job.

### Switch list fields

Each row of a switch list contains fields needed for the crew to perform the job. When a new module/town is on the train's route, the module/town name is displayed in the middle of the row. All the entries below this are intended for the module/town specified.

When a car is to be switched, the yard crew will have written in the reporting marks in the first column. The reporting marks should be entered such that the road name initials is entered in the left section of the column with the equipment number entered in the right of the column.

![reporting marks](/img/reporting_marks.svg)

The column labeled `Kind` details the equipment needed. The equipment is specified as the AAR code followed by the length (ie. XM-50 for a 50' Box car).

The `From` column indicates where the equipment originates from. Currently this will only be the originating yard of the train. The Switchlist indicates a repeated previous value in this column with the text `''` indicating that the previous value remains unchanged.

The `Dest` column indicates the drop zone the equipment is to be set out at.

### Crew instructions and reference

The 2nd column of the switch list provides crew with information about the work they need to perform. The header details the train information including the name and symbol as well as the number of cars and length.

Any special crew instructions are added to assist the crew in performing their job. This is information taken from the train's crew instructions as well as remarks for the module/towns and consignees they are working.

A handy reference is provided for the equipment on the train. This is a cross reference of the AAR Code to the equipment's description.

Crew will also find a reference for the drop zones they will be working to assist in setting out equipment to the correct zone.

### Crew convenience

To make it easier to carry a switch list around a layout, fold the switch list in half vertically. We find that the narrow sheet of paper is easier to manage when operating a train than having a full sheet.

## Switch list FAQ

### When I print a switch list there are no equipment or drop zones listed

Switch list uses 2 fields that previously have not been used. If a switch list prints and there is no information displayed then you must enter in the required data for the switch list to render properly.

If the Kind column is blank, return to the Equipment edit screen and add AAR codes to equipment.

If the From or Dest column is blank, return to the Drop Zone edit screen and enter a drop zone abbreviation in the Zone reference field.

### Where can I find AAR codes?

The Opsig group has a handy reference for AAR codes. You can find the reference by [clicking here](https://www.opsig.org/files/resources/AARFreightCarCodes.pdf)

Another option that we find works quite well is to use an online AI tool such as [ChatGPT](https://chatgpt.com) or [Microsoft Bing Copilot](https://www.bing.com/chat?q=Microsoft+Copilot&FORM=hpcodx). Simply type in something to the effect of "I have a model railroad that I need AAR codes for operations. What is the AAR code for an insulated box car?"

### Is it possible to print more than 1 page of a switch list?

Currently switch lists will print only 1 page. You will need to modify either the length of the train or limit the number of modules/towns a train services until the work fits on a single page.
