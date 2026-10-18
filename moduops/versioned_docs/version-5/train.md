# Trains

The train screen is where you handle all aspects related to trains on your layout. A train comprises equipment that is randomly chosen from the equipment requests made by consignees on the train's route.

## Editing Train Information

Trains contain various details regarding their characteristics, such as symbols, names, departure, and terminating points.

To create a new train, simply click the New button on the train management screen.

To edit an existing train, follow these steps:

1. Select the desired train from the train list.
2. Click the `Edit` button on the train management screen.

## Train fields

**Symbol (required)** - the identifier of the train.

**Type** - a menu offering various classifications of the train. Currently there is no use for types in the application. The option is provided as a means for documentation only.

**Departure (required)** - the yard the train will depart from.

**Terminates (required)** - the yard the train will terminate at.

**Length (required)** - the length of the train intended to be in feet. This value is the maximum length a train could potentially be. The ModuOps scheduler will create a train up to this length but not longer.

:::tip
The length of a train is for equipment only. The length of power and vans should not be included in this value.
:::

:::info
The unit of measure is arbitrary and technically this value can represent any unit needed. However you must be sure that the unit is consistent with the length of equipment and drop zones.
:::

**Minimum length** - the minimum length a train can be. When there is a value in this field, the ModuOps scheduler will select a random number between and including the minimum length and the maximum length.

:::info
ModuOps algorithms build trains up to but not exceeding the minimum length. Consequently, you will see train lengths that are less then the minimum.
:::

**Name** - the name of the train

**Remark** - additional comment about the train. Currently the remark is provided as a means for documentation only and is not used anywhere in the application.

**Limit modules** - the maximum number of modules/towns a train can service in 1 trip. This is useful in situations where a train's route may take it across several modules/towns but is desired to limit the work done to a subset of all the modules/towns. The modules/towns are randomly selected from the modules/towns on equipment orders based on the scheduling engine being used.

## Additional instruction fields

### Job Overview

A field for describing the job the crew of this train will perform. Currently this field is provided for documentation only and is not used anywhere in the application.

### Crew Instructions

A field describing specific instructions to the crew operating this train. Crew instructions are printed at the top of trainlists after the details of the train. Crew instructions are a way to give overall instructions to the crew for operating this train.

:::tip
Most fields in ModuOps allow for basic html formatting. As an example, enclosing text between `<b></b>` causes the text to be formatted as bold text.

`<b>PICKUP ALL WHEN DROPPING</b>` is a common instruction to add to the crew instructions. This will be rendered as **PICKUP ALL WHEN DROPPING** on trainlists.
:::

### Termination instructions

A field typically containing instructions for the crew of a train on procedures for terminating the train. This can include instructions for returning motive power to a certain track or perhaps even a shutdown procedure for the locomotive.

This field is added to all trainlists generated for this train after all work instructions but before the train termination location line.

**Example termination instructions**

```
<b>Scheduled Work Harris Yard</b>
[ ] Terminate Track 1 Harris Yard
```

### Train Orders

The train orders field is available for additional information or instructions that can be added to a train's route. Each line within this field can be added to a train route. For instance, with a train order, you can direct a crew where they should turn, such as <b>TURN at St. Cloud</b>.

Train orders seamlessly integrate with the train's route instructions. While mastering this technique may require some practice, it's not overly complex. By employing basic HTML, including `<b></b>` to make text bold, indenting and simple formatting of orders, it's possible to blend train orders with other route instructions.

**Train order example**

We will create a series of train orders for the crew to set out a cut of cars on the outbound journey and pick up a transfer cut on the return, set out by a branch crew.

The initial step is to create a train order that designates the start of this work at a specific module or town location.

`<b>Scheduled Transfer at Woodstown Junction</b>`

When the above is rendered the text will be bold just as other module headings appear on a printed trainlist.

:::tip
Basic html formatting can be used on train orders. This allows you to match the formatting of a trainlist so the train order blends in with other route instructions.

`<b></b>` any text between these tags will be bold

`<i></i>` any text between these tags will be italic
:::

Next we need 2 orders to set out and pick up the transfer cut of cars. Our crew in this example is working a turn. On the way out the crew will set out a cut of cars at the transfer location. On the return of the turn, the crew will pick up a cut of cars left at the transfer location by a local branch crew.

```
[ ] Set out Lackawanna Local transfer cut
[ ] Pick up all
```

The instructions above provide a space for the crew to add a checkmark when the task is completed just like other tasks would have on the trainlist.

Finally we need to add additional details on where the transfer cut is to be set out and picked up.

```
    to Transfer Track 1
    from Transfer Track 1
```

It is a little difficult to see but these lines are indented the same spacing as the 2nd line of a trainlist would be. This allows the train order text to blend in with other text on the trainlist.

The finale train order field for our example looks like:

```
<b>TURN at St. Cloud</b>
<b>Scheduled Transfer at Woodstown Junction</b>
[ ] Set out Lackawanna Local transfer cut
[ ] Pick up all
    to Transfer Track 1
    from Transfer Track 1
```

Each of these lines is available on the train route screen to be added to the train's route. Details on how to do this are in the section below for describing the features related to train routes.
