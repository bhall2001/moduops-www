---
id: faq
title: FAQ
sidebar_label: FAQ
slug: /faq
---

# FAQ

## Why do yards not show any cars when I select it on the Yard screen?

This can happen when the yard is not included as an origination point for any train in the current layout file. Once the yard is added as an origin for a train, car types should be displayed.

## I've heard that ModuOps helps correct mistakes. How exactly does it accomplish that?

Mistakes are inevitable, especially when you're busy engaging with attendees at a show and promoting the hobby. While ModuOps doesn't directly fix errors, there's a straightforward procedure that, when included in all your Trainlists, effectively addresses mistakes.

The recommended approach is to add the following comment to the Crew Instructions, accessible on the train edit screen:

`<b>PICK UP ALL WHEN DROPPING</b>`

:::tip
You can use basic html syntax when creating comments. the `<b></b>` in the example above will make the text appear bold.
:::

This instructs the crew that, before dropping a set of cars, they should pick up all the cars in the drop zone. An added benefit of this practice is that any equipment placed in the drop zone by mistake will be collected and returned to the yard.

## How do I define the length of a drop zone? Do I start at the fouling point of the turnout?

Drop zones are designated segments of track where equipment can be placed. They are not meant to establish the length of a siding.

These zones delineate specific areas along the track where equipment can be set out. Each siding may feature one or more drop zones. It's important to note that the combined length of drop zones is not required to match the overall length of the siding.

In practice, it is advisable for the total length of drop zones associated with a siding to be less than the siding's actual length. This ensures ample space between cuts of cars and helps prevent fouling turnouts.

## How can I incorporate scheduling cars to an off spot track?

That's a great question! There are a couple of ways that you could do this. But my preferred way is to replicate real-world scenarios when handling off spot tracks.

An off spot track essentially functions as an overflow area. If a cut of cars cannot fit into the designated drop zone, the excess equipment is placed on the off spot track.

In ModuOps, you can simulate this is by overloading the drop zone. To overload the drop zone simply increase the length of the drop zone to be longer than it actually is.

Furthermore, you can include a comment in either the module, consignee or equipment request, specifying the sequence of actions desired when working with an off spot.

First transfer cars from the off spot track to the drop zone. Next, set out cars from the train to the drop zone. Additional cars that can not fit in the drop zone should be set out to the off spot track.

This ensures an organized and efficient process for managing off spot tracks in ModuOps.

## Why are train lengths shorter then the length I set for the minimum length?

The minimum length you set represents the maximum allowable length for a train without surpassing the defined minimum. Consequently, train lengths can be shorter than the specified minimum length.

For instance, if you set the minimum length at 150 feet, the system aims to create a train up to, but not exceeding, 150 feet. If the accumulated length of the train is 135 feet, only an additional piece of equipment measuring 15 feet can be added to meet the minimum requirement.

It's unlikely you will have a 15-foot-long piece of equipment, therefore the final train length will be 135 feet—the maximum length without going above the 150 foot minimum.

## Does train length include locomotive and caboose lengths?

No, the train length specified only includes the equipment. Please adjust the entered train length to account for locomotive and caboose lengths.

## Norton is telling me that some files are unsafe and removes them.

This is a side effect of the app not being trusted by Norton. You will need to disable Norton in order to run the application. Head to the [Norton Support forums](https://support.norton.com/sp/en/us/norton-360/current/solutions/v15457075) to learn how to temporarily disable Norton. Follow instructions in the section labeled "Exclude disks, folders, and files from scans"

## You need to add a Save option in the File menu.

ModuOps automatically saves your work while using the application. Because of this there is no Save option in the File menu.

## I am not able to close my data file. Why is there no Close menu item?

I do not see the reason to offer the ability to close your data file. If you are closing the file there must be something you are looking to do after closing the file -- opening another file, creating a new file or quitting the application.

Rather than create an extra unneeded step of closing the file, continue on with whatever you are needing to do next. ModuOps will take care of closing the file for you.
