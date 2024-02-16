# Trainlists

Trainlist are the output used by train crews to operate a layout. Trainlists consist of randomly generated instructions for crew based on information from the modules' consignees, drop zones and equipment requests.

Trainlists are intended to give instructions to crew in situations where the layout has never existed before in environments where there are a number of distractions. ModuOps was originally written to balance switching operations on Free-mo layouts during train shows. Trainlists tend to provide more instructions than you would find when operating with car cards or a standard switchlist.

## Trainlist screen

Navigate to the trainlist screen by clicking `Trainlists` in the sidebar menu. The trainlist screen lists all trains setup in the layout. On the right side is a preview of the last generated trainlist. This preview is intended to visually represent the trainlist but may not be readable.

## What is a trainlist?

Trainlists documents guide crew members operating trains on the layout. Acting as a script, their purpose is to facilitate successful completion of tasks by providing a structured workflow.

Designed with the operational challenges of modular layouts in mind, trainlists aim to streamline operations, especially in dynamic environments like train shows. They offer a clear overview of tasks to be performed, accommodating crew members of varying skill levels. The comprehensive nature of trainlists may seem verbose to some, but this intentional detail enhances crew performance.

Each trainlist begins with the layout header, followed by train name, symbol, departure yard details, and crew instructions. As the train progresses, scheduled work at specific modules or towns is indicated, guiding crew members to their next destination. Instructions for set out work are provided, including equipment details and drop zone locations. Crew members mark tasks as completed, ensuring efficient workflow.

Trainlists may also include train orders interspersed with other tasks, providing additional instructions such as specific turn locations. Upon completion of assigned tasks, the trainlist concludes with terminating yard details and space for crew comments.

Trainlists serve as invaluable tools for train operations, offering clarity, organization, and guidance throughout the layout.

## Trainlist options

`Use equipment type codes` - checkbox to enable using equipment type codes instead of the default equipment short description on trainlists. Equipment type codes typically would be standard AAR codes for equipment types.

`Select Scheduling Engine` menu allows you to select from 2 scheduling engines, "Mad River and Big Timber" or "Use Cars/Week". Select the scheduling engine you want to use to generate trainlist with.

`Select Output Format` menu allows to select the output format of trainlists. An approximation of the original Mad River and Big Timber output format, A new modern full page, or a version of the modern format set to fit a 1/2 page.

`Drop Zone Favoring` - a slider that allows you to select the probability of the scheduling engine selecting a drop zone again when it is selected for work. This allows for customization of the probability of filling drop zones before randomly selecting a different drop zone. The knob all the way to the left is 0% probability. All the way to the right is 100% probability. There are 3 other steps each adding 25% probability.

## Scheduling Engines

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
