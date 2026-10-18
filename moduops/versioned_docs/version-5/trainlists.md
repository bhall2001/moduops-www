# Trainlists

Trainlists documents guide crew members operating trains on the layout. Acting as a script, their purpose is to facilitate successful completion of tasks by providing a structured workflow.

Designed with the operational challenges of modular layouts in mind, trainlists aim to streamline operations, especially in dynamic environments like train shows. They offer a clear overview of tasks to be performed, accommodating crew members of varying skill levels. The comprehensive nature of trainlists may seem verbose to some, but this intentional detail enhances crew performance.

Each trainlist begins with the layout header, followed by train name, symbol, departure yard details, and crew instructions. As the train progresses, scheduled work at specific modules or towns is indicated, guiding crew members to their next destination. Instructions for set out work are provided, including equipment details and drop zone locations. Crew members mark tasks as completed, ensuring efficient workflow.

Trainlists may also include train orders interspersed with other tasks, providing additional instructions such as specific turn locations or details on how an industry should be worked. Upon completion of assigned tasks, the trainlist concludes with terminating yard details and space for crew comments.

Trainlists serve as invaluable tools for train operations, offering clarity, organization, and guidance.

## Trainlist screen

Navigate to the trainlist screen by clicking `Trainlists` in the sidebar menu. The trainlist screen lists all trains setup in the layout. On the right side is a preview of the last generated trainlist. This preview is intended to visually represent the trainlist but may not be readable.

## Trainlist options

`Use equipment type codes` - checkbox to enable using equipment type codes instead of the default equipment short description on trainlists. Equipment type codes typically would be standard AAR codes for equipment types.

`Select Scheduling Engine` menu allows you to select from 2 scheduling engines, "Mad River and Big Timber" or "Use Cars/Week". Select the scheduling engine you want to use to generate trainlist with.

`Select Output Format` menu allows to select the output format of trainlists. An approximation of the original Mad River and Big Timber output format, A new modern full page, or a version of the modern format set to fit a 1/2 page.

`Drop Zone Favoring` - a slider that allows you to select the probability of the scheduling engine selecting a drop zone again when it is selected for work. This allows for customization of the probability of filling drop zones before randomly selecting a different drop zone. The knob all the way to the left is 0% probability. All the way to the right is 100% probability. There are 3 other steps each adding 25% probability.

## Scheduling engines

### Mad River and Big Timber

The Mad River and Big Timber (MRBT) scheduling engine is an attempt to replicate the random selection of work presented by the MRBT program. MRBT did not do any weighting of selection. Every equipment requests has a 1/n probability of selection where n is the total number of equipment requests that are scheduled on the train's route.

The MRBT scheduling engine only schedules **all consignees** for a module. Any other instructions added to a train's route are ignored. When selecting the MRBT engine, you may not get trainlists that you would expect from the trains route as a result of this "feature".

The MRBT scheduling engine is provided as a tip of our hat to the program that got use excited about doing operations using car types.

### Cars per week

The Cars Per Week (CPW) scheduling engine employs a weighted random selection method for equipment requests, based on the cars/week field. This approach aims to mirror real-world scenarios more accurately, reflecting varying demand levels among Consignees.

On the Trainlist screen, the drop zone favoring slider can influence this selection process. By adjusting the slider, you can increase the likelihood of selecting the same drop zone repeatedly, effectively prioritizing its filling over others. The slider allows for fine-tuning, ranging from 0% to 100% probability in 25% increments.

Utilize the slider to optimize drop zone utilization, favoring capacity fill-ups before moving on. Increasing the slider's setting enhances the chances of filling the selected drop zone completely. Keep in mind that fuller drop zones tend to reduce the number of stops on a route, impacting the operational flow accordingly.

The CPW scheduler enhances realism during operating sessions but requires careful consideration. It may inadvertently favor certain Consignees over others, especially if their equipment requests yield disproportionate selections.

For instance, consider a scenario where a grain siding with 30 CPW competes with three other Consignees, each with a CPW of 1. Statistically, Consignees with 1 CPW requests would have a 1/33 chance of selection.

To address such situations, several strategies can be employed:

- Create a dedicated grain unit train servicing the grain siding.
- Adjust the CPW value of the grain siding to lower its selection probability, thereby balancing the selection process.
- Utilize the MRBT scheduler, offering equal chances for all equipment requests.

The Cars Per Week (CPW) scheduling engine introduces a sophisticated approach to managing equipment requests, aligning with real-world dynamics. By leveraging weighted random selection based on the cars/week field, it accurately reflects the varying demand levels among Consignees.

## Output formats

ModuOps has a number of output formats to choose from.

### Mad River and Big Timber full page

Output a page that mimics the original MRBT full page format. Use this when you would like to use the original formatting of Mad River and Big Timber.

### Mad River and Big Timber half page

Based on the full page MRBT format, this output prints out a 1/2 page intended to be folded down the middle. The format mimics the original MRBT full page format.

### Modern full page

A new format introduced with ModuOps adding more verbose instructions for crew to follow. The modern format's goal is to add crew in successfully completing their jobs with the lowest number of mistakes.

### Modern half page

A new format introduced with ModuOps adding more verbose instructions for crew to follow on a half-page. The page can be folded in half making it easier to carry while performing work. The modern format is more verbose than the original MRBT format with the goal of make crew as successful as possible with additional instructions.

### Switch list NEW!

ModuOps spin on a prototypical switch list. The form is printed on half a page, folded lengthwise. The back page has helpful information for the crew related to the job they need to perform.

The ModuOps switch list requires equipment have an AAR code defined. In addition to this, drop zones are required to have a zone reference defined. If either of these are not defined, the switch list will have no information displayed when work is scheduled with a piece of equipment or a drop zone where the information is missing.

![alt text](/img/switchlist.svg)

The switch list displays the layout name in the header. This is defined on the layout screen. The train symbol is added to the switch list when printing.

The switch list displays the AAR code followed buy the length for each car that needs to be switched in the format of `<AAR CODE>-<equipment length>`. As an example, `XM-50` in the type field indicates a box car of 50 feet is required to be switched.

The `From` column currently displays the source yard of the train.

The `Dest` column displays the drop zone reference where the car is to be placed.

Yard crew are required to add reporting marks for cars in the first column of the switch list. Reporting marks are added to the switch list after a train is assembled but before the crew takes the train from the yard.

The reporting marks field is divided into 2 sections on a diagonal. The upper left triangle is where the crew writes the road name of the equipment being used for the line of the switch list. The lower right triangle is where the crew writes the number of the equipment being used for the line of the switch list.

![reporting marks](/img/reporting_marks.svg)

#### Crew instructions and reference

The 2nd column of the switch list provides crew with information about the work they need to perform. The header details the train information including the name and symbol as well as the number of cars and length.

Any special crew instructions are added to assist the crew in performing their job. This is information taken from the train's crew instructions as well as remarks for the module/towns and consignees they are working.

A handy reference is provided for the equipment on the train. This is a cross reference of the AAR Code to the equipment's description.

Crew will also find a reference for the drop zones they will be working to assist in setting out equipment to the correct zone.

#### Crew convenience

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
