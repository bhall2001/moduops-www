---
sidebar_position: 1
---

# Tutorial Intro

Let's discover ModuOps in less than 15 minutes.

## Getting Started

Get started by creating a layout data file.

- launch ModuOps and select "New Layout..." from the File menu
- name the file "myLayout.mop2" and save it at a location where you will be able to find it again

Once the file is created you can click "OK" to close the dialog that appears.

To get started with ModuOps, we will start with a very simple scenario. We'll create a single piece of equipment and a single Consignee who will request our piece of equipment on our fake layout.

## Create Equipment

The first step when starting out is to create equipment that can haul goods for our layout. In ModuOps, equipment is referenced by type not by reporting marks. This is a key feature of the application.

To get things started, we will create a 50 foot box car.

Click `Equipment Register` in the left sidebar menu. This takes you to the Equipment Register screen. Now click the `New` button. A new piece of equipment is created.

Next we need to add the details of the equipment. In the `Classification` popup menu select `X - Box`. In the `Car Description:` field enter `Boxcar`. In the field labeled `Short Description:` enter `Box`. In the length field enter `50` indicating the length is 50 feet.

:::note
Fields with a red label are required in ModuOps.
:::

Click `Done` in the left sidebar menu to return to the Equipment Register screen. The 50 foot boxcar is now displayed in the equipment registry.

We now have a single piece of equipment that we can schedule on a train.

## Create Module

Next up we need to create a Module for our layout. Click `Modules/Towns` in the left sidebar. Now click the `New` button over the column marked `Modules/Towns`. A new module is created.

We need to add some basic information for the module. Let's name our module by typing `Somewhere in the world` in the `Name` field and `Somewhere` in the short field. There are other fields you can fill in but they are all optional. Click `Done`.

Our new module "Somewhere in the world" is listed as a Module/Town in our layout.

## Module key concepts

ModuOps modules/towns have 2 very important concepts -- they contain consignees and drop zones.

A consignee is a business that either produces or consumes commodities. Consignees generate requests known as equipment requests to have specific equipment delivered to them.

Drop zones are sections of track where equipment can be dropped. A drop zone can be defined as the full length of a siding, there may be multiple drop zones per siding, or a drop zone could even be defined to be longer than a siding.

With these ideas in mind, we will create our first Consignee and drop zone for our layout.

## Create Consignee

On the `Modules/Towns` screen, click `New` over the column marked for `Consignees`. Name the consignee `Warehouse`. The name is the only required item when creating a Consignee. Click `Create`.

Our new Consignee is created.

:::warning
You will see an error on the Consignee screen once you create the new Consignee. This is because at this point in time we have not created any drop zones. Once we create a drop zone, this error will go away. For now, you can ignore this error.
:::

Click `Done` to return to the `Modules/Towns` screen. Our new Consignee is listed on our Somewhere in the world module/town.

## Create a drop zone.

Next up we need to setup a section of track where equipment can be dropped. Click `New` over the column marked as `Drop Zones`. On the Drop Zone screen we must define 2 pieces of information to create a new drop zone, the name and length of the drop zone.

In many cases it may be desirable to name the drop zone after the name of the Consignee. ModuOps allows you to either type in a name or select from a menu that shows all the Consignees that are defined in the module/town.

Select `Warehouse` from the `Use Consignee Name` pop up menu. This assigns the name of the Consignee as the name of the drop zone.

Now type in 100 in the drop zone `Length` field. This indicates the length of the drop zone is 100 feet.

Click `Done` to return to the `Modules/Towns screen. Our fake layout now has a section of track defined where equipment can be dropped.

## Equipment Requests

Next up we need to setup the request our Consignee will make for equipment. Click `Warehouse` to highlight the Consignee in the Consignee list. Next click `Edit` over the column marked for `Consignees`.

You will see our error message has gone away now that we have a drop zone defined. Now we will create a new request for our Warehouse consignee.

Click `New Request` button in the Equipment Request section. This will open the Equipment Request screen. Here you will define the type or equipment needed, the drop zone that equipment will be sent to and the frequency of the requests.

Now this is a simple tutorial at this point so we do not have a lot of options. On the Equipment request screen click on our 50 foot box car to highlight the line. This indicates that this request is for a 50 foot box car.

Next click on the Warehouse drop zone to highlight the drop zone. This indicates that this car request is for the drop zone named Warehouse.

Finally, you can indicate how many "Cars Per Week" (CPW) the request will be made. This is not an actual value but rather is a relative value. When we have a more complex layout, the cars per week value is used as a weighted random selection value against all equipment requests that could be scheduled.

For now, we can leave the default value of 1 for CPW.

Click `Done` to return to the Consignee screen. You will now see our new Equipment Request is listed on the screen.

Click `Done` again to return to the Module/Town screen.

## Creating a Yard

In ModuOps all trains must originate from and return to a yard. This requires that there be at least 1 module/town on the layout that is designated as a Yard.

In the Modules/Towns column click `New` to create a new module/town. Set the name to "Rail Yard" and the short name to "Yard".

:::note
You can name modules/towns whatever you want. For the purpose of this tutorial we are using generic names but you can use any name you want.
:::

Click `Done` to return to the Modules/Towns screen.

Make sure the "Rail Yard" module is highlighted in the list of modules.

Click `New` over the Drop Zones column to create a new drop zone. Type "Rail Yard" for the name and give it a length of 500. When determining the length for a drop zone that will be a yard, set the value to the total capacity of **ALL** tracks in the yard.

For this tutorial we enter 500 indicating the total capacity of all tracks in the yard is equivalent to 500 feet.

Now the last step to turn this drop zone into a yard is to click the checkbox next to "Yard/Interchange/Staging". When a check mark appears here, this tells ModuOps that this drop zone is a yard.

Click `Done` to return to the Modules/Towns screen.

## Creating a train

Now that we have a Consignee requesting equipment and a yard to originate from, it's time to create a train.

In the left sidebar menu click `Trains`. This navigates us to the train screen.

Now click `New` to create a train. For the symbol enter `TRAIN1`. The origin and destination will be our Rail Yard. Select `Rail Yard` in the popup menu for origin and destination.

The last required bit of information we need for the train is to set the desired length of the train. This number is the maximum potential length of equipment that could be added to a train.

:::note
Train length does not include the length of motive power or caboose. The value is the length of equipment that could be added to a train.
:::

In our example we are referencing lengths in feet. For this tutorial we can leave the default value that was entered when the train was created.

Click `Create` to create the train.

Awesome, we now have all the basic information we need for our new train. Now we need to create a route for the train to follow.

## Train routes

Now that we have a train, we will create a route for the train to follow. Click the line for `TRAIN1` to highlight the line in the list of trains on the train screen.

Now click the `Route` button. This opens the train route screen.

In the upper left of the screen are the modules/towns that are in the layout. The right side of the screen contains the route sequence the train will follow. Right now we have a very basic layout with only 1 consignee. We'll make things a little more interesting in just a bit.

For now, in the Modules/Towns list, click once on `Somewhere in the world` to highlight it. In the most simple of cases, a train can service all consignees at a module/town. We will do that for our tutorial.

Once `Somewhere in the world` is highlighted, click the right arrow between the 2 scrolling fields to add all consignees at Somewhere in the world to the train's route. The right side of the screen will summarize this action for us.

Click `Done` to return to the train screen.

## Creating trainlists

Now the final step is to generate a trainlist for crew to use to operate the layout. In the left sidebar click `Trainlists` to navigate to the trainlists screen. The screen will show all the trains that have been created.

Now click `TRAIN1` to highlight it. This is how we tell ModuOps which train we would like to create a trainlist for.

We will leave all the default settings as they are for our tutorial. Once a train is selected, click the "Generate Trainlist" button. A small preview of the created trainlist is displayed. This is only intended to show you in general that a trainlist was created and what it will look like once printed. The preview is not intended to be readable necessarily.

Now that we have created a trainlist, the next step is to print the trainlist. On the Trainlist screen click the `Print` button to print the trainlist.

## Making things more interesting

Our tutorial has the most basic of layouts to service. We will make things more interesting by creating another consignee with additional drop zones to service.

Click the `Modules/Towns` sidebar menu. Click `Somewhere in the world` to highlight the module.

Click `New` over the drop zones list to create a new drop zone. Name the drop zone "Team Track" with a length of 300.

Click `Done` to return to the Modules/Towns screen.

Click the `New` button over the Consignees list.

Type "Team Track" into the `Consignee` field.

Click `Create` to create the new Consignee.

Now we can create a new equipment request. Click `New Request` to create a new request for the team track.

Now select the Team Track drop zone and 50 foot box car to highlight both the lines for the equipment request.

Set the `Cars/Week` to 2. This will increase the probability that this request is selected over requests that are for 1 car per week.

Click `Done` to return to the Consignee screen.

Click `Done` again to return to the Modules/Towns screen.

Let's make things more interesting for our train. We'll set a minimum length of the train. This will vary the number of cars that are added to each train.

Click `Trains` in the left sidebar menu. Now select `TRAIN1` and then press the `Edit` button. In the `Min Length` field, enter 150.

Click `Done` to return to the Trains screen.

Now we have 2 Consignees and 2 drop zones to service with our train. Click `Trainlists` in the left sidebar. Click to hilite `TRAIN1`, then click `Generate Trainlist`.

ModuOps randomly selects equipment to add the the trainlist based on the value of CPW, the drop zones the train can service at the modules on the train's route and the train length. This results in varied work needing to be performed on our layout.

Click the `Generate Trainlist` multiple times to see how the equipment requests vary.

**CONGRATULATIONS!!!** You have completed the tutorial for ModuOps.
