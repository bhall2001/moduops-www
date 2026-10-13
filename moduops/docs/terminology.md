---
id: terminology
title: Terminology
sidebar_label: Terminology
---

# Terminology

**Layout file** - a ModuOps file (`.mop3`) holding everything about one layout. Version 5 files (`.mop2`) are converted when opened. See [Upgrading from Version 5](upgrading.md).

**Modules/Towns** - places on the layout

**Equipment** - anything that is unpowered on the rails with wheels

**Consignee** - business that makes equipment requests

**Drop Zone** - a section of track where equipment can be dropped. A drop zone can be any length. It may be the full length of a siding or a siding can have multiple drop zones.

**Yard** - a drop zone marked `Is Yard Track`. Trains depart from and terminate at yards, so at least 1 yard drop zone is needed before a train can be created. The length of a yard drop zone should be the total yard length of all tracks that make up the yard.

**Equipment Request** - a unit of work where a specific equipment type is requested to be dropped to a specific drop zone.

**Demand** - a number used for weighted selection. A higher number increases the probability that the equipment request is selected when a train is scheduled with the Weighted Selection or Pull & Drop Ops engine. Called Cars Per Week (CPW) in version 5.

**Flow Type** - marks an equipment request as a Producer (ships loads) or Consumer (receives loads). Used by the Pull & Drop Ops engine to decide whether loads or empties are set out and picked up.

**Scheduling Engine** - the method used to pick work for a trainlist: Random (MRBT), Weighted Selection or Pull & Drop Ops. See [Trainlists](trainlists.md).

**Length Unit & Scale** - each layout records lengths in a unit (feet, centimeters, meters or generic units) at a model scale. Set on the [Layout](layout.md) screen.

**Trainlist** - a list of work for a given train.

**Train Job Overview** - general comments about the train and work it will perform.

**Train Crew Instructions** - comments added to the top of the train's trainlist

**Train Termination Instructions** - comments added to the end of the train's trainlist

**Train Orders** - single line instructions that can be added to the train's route

**Consignee Filter** - a setting on a train route stop that limits which consignees are worked: All Consignees, A Only, B Only, Must Service or No Service. See [Train Route](train-route.md).

**Car Distribution** - a per-train setting that controls whether cars are spread across consignees or concentrated at fewer stops. Used by the Weighted Selection and Pull & Drop Ops engines. Replaces the version 5 Drop Zone Favoring setting.

**Ops Session** - a planned operating session in the [Timetable](timetable.md), made up of train instances with times.

**Train Instance** - one run of a train within an ops session, shown as the train symbol with a trip number (for example `LOC1-1`).

**Station Order** - the order of modules/towns along the layout, used to draw the string diagram and timetable reports. See [Station Order](station-order.md).
