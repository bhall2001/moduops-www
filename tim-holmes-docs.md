# **ModuOps Overview**

Welcome to the manual for ModuOps.

The manual describes how to work with Version 2017.1 of the ModuOps software. ModuOps came into being from a desire by the New England Free-mo group to create a car routing system. The primary goal of the group is to reduce the amount of administration needed to get a Modular layout up and Operating.

ModuOps finds its' roots in a package called &quot;Mad River and Big Timber&quot; (MRBT for short). MRBT came from a Modular group in California in the 90s. Their goal was also to get a Modular layout up and running with minimal administrative overhead.

MRBT was a product of the late 90s and appears to have seen its' last update in the year 2000. The New England Free-mo group used old laptops up until about 2015 to run the MRBT software. However, there are just too many challenges in doing that in today's modern world.

ModuOps 1.0.0 essentially replicated the MRBT software package with some changes. The application has a modern graphical user interface (GUI). Routing logic is more sophisticated than the original MRBT. The hooks are in place to take ModuOps Online and integrate today's modern SmartPhone and Tablet technologies.

For those who care, ModuOps is written in Livecode. Livecode is a modern, rapid development tool incorporating a number of advanced capabilities. ModuOps version 1.0.0 used a SQLite database and is available on Windows and Macintosh systems.

# Getting to Know ModuOps

ModuOps makes assumptions based on its roots for how an Operation Session runs. ModuOps takes into account the nuances of Operations Plans for Modular layouts. The original use cases for ModuOps come from Free-mo Operators. Home layouts have also had a hand in steering ModuOps development.

A Free-mo modular layout has many unique characteristics not found with other Model Railroad setups:

- Layout is unique at each setup
- Layout will never exist again
- Layout exists for only a day or 2.
- Starting state of the layout is unknown
- Crew errors occur but should be self-correcting
- Rolling stock administration is cumbersome and error-prone

## The ModuOps Difference

ModuOps is a random car type generator. The software essentially takes a list of car types and randomly assigns them to locations on the layout. Using car types IS the significant difference ModuOps offers.

The strict rules associated with reporting marks add significant effort to an Operating Session. The administrative overhead to maintain car reporting marks takes a tremendous amount of time. In fact, the time invested in this task alone typically exceeds the life-span of the layout by many factors.

## Best Practices

ModuOps works best when there is a sourcing yard that sends cars to Consignees. Large layouts can be split into Districts with regional yards acting as the source of cars for an area of the Layout. It is even possible to simulate transfers between yards by making the yard itself a Consignee.

ModuOps is Stateless. That means that the system does not store any information about the past, present or future state of the layout. Another advantage is on a layout where &quot;Free-running&quot; occurs between formal operations sessions. ModuOps does not need the layout to be setup in any particular manner prior to the operating session beginning.

ModuOps does not have the ability to schedule a &quot;Pick Up&quot;. This is the direct result of the software being Stateless. Future stateful scheduling engines are planned.

ModuOps presently does not do any sophisticated car routing. The Application as it stands today is based on the Mad River and Big Timbers program logic. That means that all traffic originates at a yard and travels to a consignee. It is important to remember this sequence when creating Operations Plans.

ModuOps is a modular system allowing for scheduling engine Plugins. The initial release of the software ships with the Free Mad River and Big Timber scheduling engine. The MRBT scheduling engine is a basic random car type generator (each request has a 1/n chance of selection).

Also available is the sMarty scheduling engine. This is also a stateless engine with weighted random selection. The weighted selection uses the &quot;Cars Per Week&quot; (CPW) number given to the car type. In addition to the weighted selection, the system skews selections to facilitate car blocking.

#


# Quickstart Guide

Don't want to read the whole manual? We'll here's the steps you need to get ModuOps up and functioning.

Here's the order you'll want to follow to get going.

1. Create a few pieces of Equipment
2. Create a Module/Town
3. Create a Consignee (Industry) or 2 – Just enter the name in the Consignee field
4. Create a Drop Zone or 2 (or 3) - Enter the Name and length of track associated with a Consignee where cars are set out
5. Return to the Consignee details screen and add in a Car Request or 2 – Select a Consignee &amp; click on edit to get to car requests
6. Repeat steps 2 – 5 for the remaining Modules, Drop Zones and Consignees on your layout
7. Create a Train
8. Give the Train a Route
9. Generate a Trainlist for your new Train
10. Take the Trainlist to your layout and get to work ;-)

Additional tips: \* Keep unit of measurement of rolling stock, drop zones and train length consistent. We suggest feet. \* Train length must be set to a value greater than the shortest rolling stock. \* Drop Zones handle many cars buy setting the length of the zone. The length should be greater than or equal to the total length of the rolling stock intended to go there. A drop zone of 150 feet can hold 3 (50 foot) box cars.

### ModuOps 2017.1 Release Notes

#### New in this Version

- Drop Zone can now be designated as a Yard/Interchange/Staging
- Trains must originate and terminate at a Yard/Interchange/Staging
- Added Yard storage capacity based on percent or standard deviation of car requests
- Added AAR Code field to Car Types
- Added AAR Code as an option on Trainlists
- Added Report module (more reports coming soon)
- Fixed/Expanded options for Train Type
- Built with Livecode 8.1.3

#### NOTICE

NEW Added &quot;Yards&quot; to the system. Old data files are compatible with one small caveat. Trains must now originate from a Drop Zone that is designated as a Yard. Until you define at least 1 Yard and assign trains to originate and terminate at Yards, YOU WILL NOT BE ABLE TO GENERATE TRAINLISTS.

This change was un-avoidable and needed for future enhancements.

Yards are Drop Zones marked as a Yard/Interchange/Staging. A Drop Zone designated as a yard should not have any Equipment Orders assigned it. The length of the drop zone should be the total length of all tracks making up the yard (aka. If there are 6 tracks in the yard each 500' long, the Drop Zone length should be 6 x 500 = 3000).

Trains must specify an origin and destination that is a Yard/Interchange/Staging drop zone. Trainlists are not generated unless a train originates and terminates at a Yard/Interchange/Staging drop zone.

# Dashboard

ModuOps is designed to be easy to use and navigate. The Dashboard is the first screen you see when starting the Application. From this screen you have access to the most common items needed to use the application.

![](RackMultipart20220115-4-17z3lp3_html_e7ae68dc8711a2b8.jpg) ![Shape2](RackMultipart20220115-4-17z3lp3_html_2038d03fa24ed3b4.gif) ![Shape1](RackMultipart20220115-4-17z3lp3_html_ddad273c4441d0d0.gif)

**Breadcrumb**

On the left side of the screen is the Menu Bar. This menu bar appears on all screens. You will find buttons that take you to the major categories of the software.

Your current location is always displayed as the title of the screen. In the example to the left this is the &quot;Dashboard&quot; screen. Just below that are breadcrumbs. **Breadcrumbs** show you where you are within the application.

![Shape3](RackMultipart20220115-4-17z3lp3_html_4c74b92e462acc21.gif)

Menu Bar

The dashboard screen features an overview of the current data file loaded in. Here you can see actual counts for Modules/Towns, Rolling stock, Consignees, Drop Zones, Car Requests and Trains.

Just below this section are groups of menus organized by like categories. Use these menus to navigate to a section of the application that you need to work on.

You can always return to the Dashboard screen by clicking on the Dashboard menu on the left side of the screen.

# Equipment Register

Every Railroad must have rolling stock to ship commodities. The Equipment Register creates the types of equipment available for use on the layout.

![](RackMultipart20220115-4-17z3lp3_html_9d7e1c3016cc0d84.jpg)

## New Equipment

To create new equipment, click the &quot;New&quot; button. This takes you to the **Equipment details screen**.

![](RackMultipart20220115-4-17z3lp3_html_b112757228d471a6.jpg)

Items in **red** are required elements when defining your equipment.

Select the equipment's classification from the drop down list. The list contains standard classification for Equipment.

Select the era of the equipment from the Era drop down list. The options allow yard crews to select a car to best fit the era requested.

Add a short description of your equipment (12 characters max).

In many situations, ModuOps uses the short description of your equipment. There are a lot of options for how to use the short description. This could be a shortened version of the longer description, or possibly a code such as the standard AAR code for the equipment. For more information on AAR codes as they pertain to model railroads, we recommend the efforts of the Ops Sig group at [http://www.opsig.org/pdf/AARFreightCarCodes.pdf](http://www.opsig.org/pdf/AARFreightCarCodes.pdf).

The length of the equipment you define should be in scale feet. Make sure you stay consistent with the unit of measurement when defining other options requiring a length.

Remarks are optional when defining the equipment. The remarks are typically displayed on the output form when the car type is selected for use on a train. The remarks are intended for the crew handling the equipment and may contain information such as &quot;Hazardous&quot; or &quot;Flammable&quot;.

When you have finished entering all the equipment information on the form, click &quot;Done&quot;.

## Edit Equipment

To change information about an existing piece of equipment, double click on the item in the scrolling list on the Equipment Register screen.

You are taken to the Equipment Editing screen. Make any changes/corrections on this screen. Click &quot;Done&quot; when finished.

## Clone Equipment

It is common that you need to create a new piece of equipment that is very similar to another. Select the equipment in the Equipment Register screen and click &quot;Clone&quot;. An exact copy of the equipment is made and you are taken to the Equipment Edit screen.

Make any changes needed to the equipment. The original equipment is left unchanged by this process.

After you have made all your changes, click the &quot;Done&quot; button.

## Delete Equipment

In the Equipment Register screen, select the Equipment to be deleted form the scrolling list. Click the &quot;Delete&quot; button.

You are asked to confirm your desire to delete the item. THIS CAN NOT BE UNDONE. If you are sure you would like to delete the item, click &quot;Yes&quot;.

**Deleting equipment also deletes any related items including Consignee requests for the Equipment.**

# Modules/Towns

Modules and Towns are the places where your crews deliver rolling stock to. This screen is where you enter details about the Modules/Towns, the Consignees (Industries) for each Module/Town and the Drop Zones (Spots) where cars can be set out for each Consignee.

![](RackMultipart20220115-4-17z3lp3_html_11f84a789a2ed742.jpg)

![](RackMultipart20220115-4-17z3lp3_html_d288f015cda205fb.jpg) **New Module/Town**

**Required Entries:**

Items in **red** are required elements when defining your Module/Town

**Name:** Enter the name of your module.

**Short Name:** An abbreviated name often used by the program in the Trainlist.

**Optional Entries:**

**Owner:** Name of owner or group who owns the module. This is helpful info at a large setup with participants who may not be familiar with who owns what module.

**Size:** Enter length of module.

**Depicted City:** Enter name of location.

**State:** Choose State from list

**Passing Siding:** Enter length if you have a Passing siding on your module.

**Description:** Enter a detailed description of your module.

**Remarks:** Here you can enter any information that may be helpful to users when operating on your module. Turnout control, animation control, etc

Click on **&quot;Done&quot;** when finished to return to Modules/Towns screen.

# **Create New Consignees**

On the Modules/Towns screen select one of the Modules/Towns from the list.

To create a new Consignee, click on the **&quot;New&quot;** button in the Consignees column.

![](RackMultipart20220115-4-17z3lp3_html_11f84a789a2ed742.jpg)

![](RackMultipart20220115-4-17z3lp3_html_644ee970efa49cdf.png)You are now on the **Edit Consignees** page.

The only required item in **red** is the **Consignee**

At this point you just enter a name for the **Consignee** and any optional **Remarks** you might think are helpful to describe what kind of cars the Consigneee will request.

You will come back again to edit this form after creating Drop Zones for the Consignee

![](RackMultipart20220115-4-17z3lp3_html_9aa83ba112a64af4.jpg)This is the **New Drop Zone** page. You enter the Drop Zone information on this sheet.

**Required Entries:**

Items in **red** are required elements when defining your Drop Zones

**Name:** Enter the name of Drop Zone (Spot) – A good convention to use is the Consignees name and a track or spot number if there are multiple spots.

**Length:** Length in scale feet of track where cars will be dropped. Drop Zones handle many cars buy setting the length of the zone. The length should be greater than or equal to the total length of the rolling stock intended to go there. A drop zone of 150 feet can hold 3 (50 foot) box cars.

**Faces:** The side of Module/Town the Drop Zone faces

**Optional Entries:**

**Zone ID:** This is an arbitrary number you can assign to the Drop Zone

**Use Consignee Name** : Drop down list of Consignees names you can select from

**Yard/Interchange/Staging**** Checkbox**: Yards are Drop Zones marked as a Yard/Interchange/Staging. A Drop Zone designated as a yard should not have any Equipment Orders assigned it. The length of the drop zone should be the total length of all tracks making up the yard (aka. If there are 6 tracks in the yard each 500' long, the Drop Zone length should be 6 x 500 = 3000).

**Active** Checkbox: Indicate whether the Drop zone is available to use.

Let's take a look at an example of a **Module** where the **Consignees** and their **Drop Zones** have been defined. Here you'll see that the West Seneca module has three Consignees – Niagra Frontier Products, Edimar Material Corp &amp; American Can. There are a number of **Drop Zones** defined for the **Consignees** of West Seneca including the West Seneca Yard.

![](RackMultipart20220115-4-17z3lp3_html_6a15a91faa0e8059.jpg)

Let's edit one of the **Consignee's** and add in a **Car Request** or 2 – Select Niagra Frontier Products &amp; click on &quot;Edit&quot; to get to the **Edit Consignee** page. Here you see that the two Niagra Frontier Products Tracks have car requests for 50' Plug door boxcars and 50' Insulated boxcars each with a frequency of one car per week. To make a new **Car Request** click on &quot;New Request&quot;

![](RackMultipart20220115-4-17z3lp3_html_bb1b43a836d42d9a.jpg)

# **Car Requests**

After clicking on **&quot;New Request&quot;** you are taken to the **Equipment Request** page.

Here you will find a list of **Drop Zones** (Spots) where cars can be set out, and a drop down list of cars to choose from.

**Required Entries:**

Items in **red** are required elements when defining your Equipment Request

**Cars/Week:** Enter the number of cars per week requested for this Drop Zone

**Optional Entries:**

**Remarks:**![](RackMultipart20220115-4-17z3lp3_html_6df23abd4095c85e.jpg)Enter any information relevant to the cars that will be spotted in the selected Drop zone

After selecting the frequency of the request for a particular car type you need to select the **Drop Zone** from the left column and then what type car is needed at that **Drop Zone** from the right column to make a **Car Request**.

Notice in the line just above the Cars/Week box, shows the **Module** (West Seneca) and the **Consignee** (Niagra Frontier Products) for which the **Equipment Request** is being made.

In the example below you would select either &quot;Niagra Frontier Products Track 1&quot; or &quot;2&quot; in the **Drop Zo** ne column and then from the **Equipment** column select what type car to spot in the **Drop Zone**. Click on &quot;Done&quot; when finished with your **Equipment** request.

![](RackMultipart20220115-4-17z3lp3_html_521ce83aaffee402.jpg)

Once you have set up **Car Requests** for each of the **Drop Zones** of the **Consignees** on each **Module/Town** in your layout you can create **Trains!** At this pointhaving a list of modules and a layout diagram will be helpful in constructing **Trains.**

Here is an example **Trains** screen. This is where **Trains** are created. **Trains** must specify an origin and destination that is a Yard/Interchange/Staging drop zone. **Trainlists** (the printed instructions for operating your Train on the layout) are not generated unless a train originates and terminates at a Yard/Interchange/Staging drop zone. A Job overview, Crew Instructions and Train orders are added or edited on the Trains form.

![](RackMultipart20220115-4-17z3lp3_html_5e338c5b6140a28.jpg)

Let's take a look at the WSBST **Train**. This is the West Seneca to Boston Street Turn. Click on &quot;Edit&quot; to view the **Trains** details.

![](RackMultipart20220115-4-17z3lp3_html_96a6708230605753.jpg)Here you can see what information is needed to make up a **Train**.

**Required Entries:**

Items in **red** are required elements when defining your Train

**Symbol:** Enter an abbreviation for the Train derived from the Name of the Train.

**Origin:** Select the Yard/Interchange/Staging drop zone from the dropdown list

**Destination:** Select the Yard/Interchange/Staging drop zone from the dropdown list

**Length:** Length in scale feet of cars which will make up the train. Train length must be set to a value greater than the shortest rolling stock.

**Other Entries:**

**Name:** Descriptive name of **Train**

**Type:** Select a type of train from the dropdown list

**Remark:** Any additional information you might think is helpful for making up a train

**Limit Modules: ?**

**Job overview:** Give a general description of the jobs tasks

**Crew Instructions:** Instructions on train movements, car deliveries and pickups

**Train orders:** Detailedsingle line instructions on Trainlists that allow operators to move trains on the layout in an organized manner. For example add Train orders to a route when trains are making timed stops at Modules/Towns but not dropping or picking up cars (i.e. Passenger trains).

# **Creating Routes**

![](RackMultipart20220115-4-17z3lp3_html_f2af11bd209a2967.jpg)When you have finished building **Trains** , click on **&quot;Trains&quot;** in the menu bar on the left side of the screen to get back to the **Trains** screen.

Now you can give a Train a route. Select a Train from the **Trains** list and click on **&quot;Route&quot;.** Here we have chosen the WSBST train.

To define a **Route** you select a **Module/Town** from the scroll list and then click on the Drop/Pick-up dropdown list and choose between All, A only, B only or No Service choices. Depending on how your **Consignees** are defined you can then select particular **Consignees** for a **Drop Zone.**

![](RackMultipart20220115-4-17z3lp3_html_6d991f72fab03046.jpg)In this example for the **Module**&quot;The Grove at Cedar Hill&quot; when you select &quot;A only&quot; from the Drop/Pick-up dropdown list you can choose between &quot;Leon's Bakery Products&quot; and &quot;Suburban Propane&quot; as **Consignees** to service.

Choosing &quot;Leon's Bakery Products&quot; and then clicking on the **Right Pointing Arrow** you add the selected module and Consignee choice to the **Route.**

Click on **&quot;Done&quot;** when finished adding **Modules** and/or **Train Orders** to the **Route.**

Now that you have given a **Train** a **Route** you can generate a **Trainlist** for the **Train.**

![](RackMultipart20220115-4-17z3lp3_html_faf0735e91d92ade.jpg)Select a _Scheduling Engine_:

- **sMarty** - a stateless engine with weighted random selection. The weighted selection uses the &quot;Cars Per Week&quot; (CPW) number given to the car type. In addition to the weighted selection, the system skews selections to facilitate car blocking.

- **MRBT** -this scheduling engine is a basic random car type generator (each request has a 1/n chance of selection).

**Note -** _ **If your Train relies only on Train orders you must use this option.** _

Select the _Output Format_

- MRBT Full page - Basic text output
- Modern Full page - Formatted to fit text on Full page
- Modern 1/2 page - Formatted to fit text into two columns on page

Click on &quot;Generate Trainlist&quot;

This will fill the box to the right of the Trainlists with a preview version of your selected Trainlist

Click &quot;Print&quot;, select your printer and generate a hard copy of your Trainlist!

**Trainlist -** Below is the manifest created for the train listed above.

TRAINLIST for TRAIN: WSBST Train -West Seneca to Boston Street Turn

**CREW INSTRUCTIONS**

Pick up train at West Seneca yard.
 Operate to Boston Street servicing consignees at Altamont, South Troy Junction ,
 Cedar Hill (Leon's Bakery) and Boston Street per waybill instructions.
 Return to West Seneca.

When delivering to a consignee location, any cars at that specific location
 are to be pulled and placed on the outgoing train for return to yard.

**Train departs West Seneca Yard with 9 cars (378 feet) Scheduled work at Boston Street**

[] Set Out \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ X-Box 40' to Alameda Coal &amp; Lumber Track #1
 [] Set Out \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ X-Can stock 50' to Continental Can Company
 [] Set Out \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ L-2BayCov 35' to Car Float Tail Track #1
 [] Set Out \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ L-2BayCov 35' to Car Float Tail Track #1
 [] Set Out \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ T-Oil 45' to Car Float Tail Track #2

**Scheduled work at The Grove at Cedar Hill**

[] Set Out \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ X-Box 40' to Leon's Bakery Products

[] Set Out \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ X-Box 40' to Leon's Bakery Products

**Scheduled work at South Troy Junction**

[] Set Out \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ X-Box 50' to Freight Station
 [] Set Out \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ G-Gondola 43' to Scrap Corp

**Train Terminates West Seneca Yard**

Train Complete at: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Comments: