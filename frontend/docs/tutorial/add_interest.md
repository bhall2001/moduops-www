# 10. Add a Drop Zone

Our tutorial has the most basic of layouts to service. Let's make things more interesting by creating another consignee with an additional drop zone to service.

1. Click the `Modules/Towns` sidebar menu. Click `Somewhere in the world` to highlight the module.

2. On the right half of the screen, click the `Drop zones` tab to list the drop zones for the module/town.

3. Click `New` under the drop zones list to create a new drop zone. Name the drop zone "Team Track" with a length of 300.

4. Click `Done` to return to the `Modules/Towns` screen.

## Add a Consignee

1. On the right half of the screen, click `Consignee` to list the consignees for the module/town.

2. Click the `New` button under the Consignees list.

3. Type "Team Track" into the `Consignee` field.

4. Click `Create` to create the new Consignee.

## New Equipment Request

Now we can create a new equipment request.

1. Click `New Request` to create a new request for the team track.

2. Now, select the Team Track drop zone and 50-foot box car to highlight both lines for the equipment request.

3. Set the `Cars/Week` to 2. This will increase the probability that this request is selected over requests that are for 1 car per week.

4. Click `Done` to return to the Consignee screen.

5. Click `Done` again to return to the `Modules/Towns` screen.

## Adjust Minimum Train Length

Let's make things more interesting for our train by setting a minimum length of the train.

1. Click `Trains` in the left sidebar menu. Now select `TRAIN1` and then click the `Edit` button.

2. In the `Min Length` field, enter 150.

:::note
When using the minimum train length field, ModuOps defines this as the minimum length that cannot be exceeded for a train length. This means that the minimum train length can be up to but no more than this length. As a result, train lengths will be less than this value in practice but that is expected.
:::

3. Click `Done` to return to the `Trains` screen.

## Generate Trainlist

Now we have 2 Consignees and 2 drop zones to service with our train. We do not need to update the train's route because we already have the train servicing all Consignees at Somewhere in the World.

1. Click `Trainlists` in the left sidebar. Click to highlight `TRAIN1`, then click `Generate Trainlist`.

2. ModuOps randomly selects equipment to add to the trainlist based on the train length, the drop zones and modules on the train's route, and the CPW value for the equipment requests. This results in varied work needing to be performed on our layout.

3. Click the `Generate Trainlist` multiple times to see how the equipment requests vary.

**CONGRATULATIONS!!!** This step completes the tutorial! You are now ready to set up your layout with ModuOps.
