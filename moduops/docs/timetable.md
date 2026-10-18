---
id: timetable
title: Timetable
sidebar_label: Timetable
---

# Timetable

The Timetable is new in ModuOps version 6. It lets you plan an operating session by giving your trains departure times and working out when each train reaches every station along its route. From that plan ModuOps draws a string diagram, prints a timetable, and prints a crew sign-up sheet.

The Timetable builds on the trains you have already set up. Each train's departure yard, route and terminating yard decide which stations appear in its schedule. You add the minutes it takes to travel between stations and how long the train stops at each one. ModuOps works out the arrival and departure times for you.

## A few terms

An **ops session** is a named operating day, "Saturday Ops January 15" say. It holds the trains that run that day and their times, and you can keep as many sessions as you like.

Each scheduled run of a train within a session is a **train instance**. The same train can run more than once in a session, a morning run and an afternoon run for example, and each run is its own train instance with its own departure time. A train instance is shown as the train symbol followed by a **trip number**, `LOC1-1` and `LOC1-2`. Trip numbers count the runs of that train in order of departure time, so the earliest run is always `-1`, and the `-1` shows even when a train only runs once.

On the Timetable every Module/Town is a **station**. Yards are not listed separately; a train's departure and terminating yards are shown at the Module/Town that contains them. The **station order** is the order stations are listed on the string diagram and the timetable report. There's one station order for the whole layout, shared by every session. See [Station Order](station-order.md).

## Timetable screen

Navigate to the Timetable screen by clicking `Timetable` in the sidebar menu. The screen lists all ops sessions in the layout, newest date first. Each row shows the `Session Name`, `Date`, `Status` and `Notes`.

Click a row to select it. Double-click a row to open the session.

| Button | Description |
| --- | --- |
| `New Session` | Create a new ops session. |
| `Edit Station Order` | Open the [Station Order](station-order.md) screen. |
| `Edit` | Change the name, date or notes of the selected session. |
| `Open` | Open the selected session. |
| `Clone` | Copy the selected session, including all its train instances and times. |
| `Delete` | Delete the selected session. |

:::info[Screenshot needed]
Timetable screen listing a few ops sessions with the toolbar buttons.
:::

## Creating a session

1. Click `New Session`.
2. Enter a `Session Name` (required).
3. Choose a `Date` (optional). It defaults to today.
4. Optionally add `Notes` about the session.
5. Click `Create`. The button stays greyed out until the session has a name.

New sessions start with a status of `draft`. You change the status from inside the session (see [Session status](#session-status)).

To change the name, date or notes later, select the session and click `Edit`, make your changes and click `Save`. The `Session Name` can't be left blank.

### Cloning a session

Cloning is the quickest way to set up your next operating session when it runs much like the last one.

1. Select a session and click `Clone`.
2. Enter a `New Session Name` (required). It defaults to "Copy of" followed by the original name.
3. Click `Clone`. The button is greyed out if the name is blank.

The copy has the same date, notes, train instances, and travel and dwell times as the original. Its status is reset to draft.

### Deleting a session

Select a session, click `Delete`, then click `Delete` again to confirm.

:::warning
Deleting a session also deletes all train instances and stop times in that session. This cannot be undone.
:::

## Inside a session

Open a session by double-clicking it, or by selecting it and clicking `Open`. The session name and date are shown at the top, along with the `Status` dropdown.

The session has four tabs:

- `Train Instances` - add trains to the session and enter their times. The tab label shows how many train instances the session has. Described below.
- `String Diagram` - a time-and-distance chart of every train in the session. See [String Diagram & Timetable Reports](timetable-reports.md#string-diagram).
- `Timetable Report` - a printable timetable with a column for each train. See [String Diagram & Timetable Reports](timetable-reports.md#timetable-report).
- `Crew Schedule` - a printable list of trains in departure order with a blank column for crew sign-up. See [String Diagram & Timetable Reports](timetable-reports.md#crew-schedule).

### Session status

The `Status` dropdown can be set to `Draft`, `Active` or `Completed`. The change is saved as soon as you pick a new value. Status helps you keep track of which sessions are still being planned, which is running now, and which are finished. It is shown as a colored label on the Timetable screen.

## Train instances

The `Train Instances` tab lists every train scheduled in the session. Each train instance is a panel you can expand to see its stops. Only one panel is open at a time. The panel header shows the trip number, the train name and the departure time.

Use the `Sort By` dropdown to list train instances by `Departure Time` or by `Train Symbol`.

### Adding a train

1. Click `Add Train`.
2. Choose the `Train` from the list (required). Every train on the Trains screen is listed.
3. Enter the `Departure Time` (optional), the time the train leaves its departure yard, for example 8:00 AM. You can add it later.
4. Click `Add`. The button stays greyed out until you choose a train.

The new train instance opens so you can enter its travel and dwell times right away.

:::tip
To add another run of the same train later in the day, click the copy icon (`Clone with time offset`) in the train instance header. Enter a `Time Offset (minutes)` and click `Clone`. The copy keeps all travel and dwell times, with the departure shifted by the offset. Positive numbers move the run later, negative numbers move it earlier. The offset defaults to 60 minutes.
:::

### Removing a train

Click the red delete icon in the train instance header, then click `Remove` to confirm. This removes the train and its stop times from this session only. The train itself stays on the Trains screen.

## Entering times

Expand a train instance to see its stops. Each row is a station the train visits, in route order.

| Column | Description |
| --- | --- |
| `#` | Stop number. |
| `Station` | The Module/Town. The first row is the departure yard, marked "(Departs)". The last row is the terminating yard, marked "(Terminates)". |
| `Travel` | Minutes to travel from the previous stop to this one. |
| `Arrival` | Calculated arrival time. |
| `Dwell` | Minutes the train stops at this station. |
| `Departure` | Calculated departure time. On the first row you type the departure time. |

On the first row you enter only the `Departure` time. On the stations along the route you enter `Travel` and `Dwell` in whole minutes. On the last row you enter only `Travel`, since the train arrives there and is done.

Your entries are saved when you move out of a field. There is no Save button.

:::info[Screenshot needed]
An expanded train instance showing Travel and Dwell entered with calculated Arrival and Departure times.
:::

### How times are calculated

ModuOps works out each time from the one before it. Arrival is the previous stop's departure plus `Travel`, and departure is arrival plus `Dwell`. Blank travel or dwell counts as 0 minutes. If the train instance has no departure time, all times show "--" until you enter one.

Times are shown on a 12-hour clock, for example "8:30 AM". Change the departure time and every time along the route updates.

### Typing times

Time fields accept several styles. For example "8:30", "8:30 AM", "830", "0830", "1430", "830a" and "830p" all work. Typing "a" or "p" fills in AM or PM. A time without AM or PM is read as a 24-hour time, so "1430" is 2:30 PM. Press Enter or move out of the field to save it.

## Where the stops come from

A train instance's stops come straight from the train's setup on the Trains screen. The first stop is the Module/Town that holds the train's departure yard. Then each Module/Town in the route is a stop, in route order, with back-to-back rows for the same Module/Town counting as one stop. A route row added with `Add timetable instruction` is a stop at that Module/Town too (see [Train Route](train-route.md)). The last stop is the Module/Town that holds the terminating yard, unless that's the same place as the stop before it. Train orders in the route are not stops.

If a train has no stops, the train instance shows "This train has no route defined. Please add stops to the train's route first." Build the train's route on the [Train Route](train-route.md) tab, then return to the Timetable.

If you change a train's route after entering times, the times you entered stay with their stations. New stations start at 0 minutes.

:::tip
Use a timetable instruction for a place such as a turn point, where you want a timetable stop and a note on the trainlist but no car work. On the trainlist it prints as "Train order at" the Module/Town name, followed by your instruction.
:::

## Timetables, trains and trainlists

The Timetable uses your trains as they're set up on the [Trains](train.md) screen, so changes to a train, a Module/Town or a yard show up here on their own. It doesn't go the other way: trainlists don't show timetable times, and generating trainlists works the same whether or not you use the Timetable. See [Trainlists](trainlists.md). To keep a train such as a yard job off the string diagram, uncheck `Show on String Diagram` on the train. It still appears on the Timetable Report and Crew Schedule.

:::warning
Deleting a train also removes its train instances from every ops session.
:::

## Planning a session, step by step

1. On the Trains screen, check that each train has a departure yard, a terminating yard and a route with Module/Town stops.
2. On the Timetable screen, click `Edit Station Order`, drag stations into the order they run on the layout, and click `Save`.
3. Click `New Session`, fill in the details and click `Create`.
4. Open the session.
5. On the `Train Instances` tab, add each train with its departure time.
6. Enter `Travel` and `Dwell` minutes for each station.
7. Use `Clone with time offset` for trains that run more than once.
8. Check the `String Diagram` tab for trains that meet or overlap.
9. Print the `Timetable Report` and the `Crew Schedule` for the session.
10. For the next session, `Clone` this one and adjust.
