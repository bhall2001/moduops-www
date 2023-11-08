# Additional comments

A module has both Consignees and drop zones. Consignees request specific equipment types to specific drop zones.

A module must have at least 1 drop zone, 1 consignee and 1 equipment request defined in order to be scheduled on a trainlist. Equipment requests can not be created until there is at least 1 drop zone defined.

Drop zone length is simply the length of track reserved for cars to be dropped at. It may or may not be the total length of a siding. Any segment of track or siding can have 1 or more drop zones.

Drop zone length can exceed the actual length of a siding. This is useful if there is off-spot storage to cover equipment that may not fit on the siding.

Multiple Consignees may have equipment requests using the same drop zone. A team track is a great example of this.

It is possible to have numerous drop zones on a siding to represent multiple spots to drop equipment at. A warehouse with multiple doors could have drop zones representing each door -- "Warehouse Door 1", "Warehouse Door 2", "Warehouse Door 3".

Equipment requests have a one to one relationship with equipment types and drop zones. Each equipment type needed by a consignee and each drop zone location will result in a unique equipment request being.

As an example, if a consignee has 2 drop zones, Track 1 and Track 2, and needs to request 40' box cars and 50' box cars be set out to both drop zones, there will be 4 equipment requests to cover the work:

1. 40' box Track 1
2. 50' box Track 1
3. 40' box Track 2
4. 50' box Track 2.

The scheduling algorithm may schedule multiple pieces of equipment to the same drop zone if the length of the drop zone allows.

ModuOps currently does not schedule pickups. It is common practice to pick up all equipment in a drop zone when dropping. I personally add a note to the train lists for the crew stating "PICKUP ALL WHEN DROPPING". Note: there may be special instructions in the train order that supersede picking up all when dropping.
