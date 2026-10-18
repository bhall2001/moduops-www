---
id: timetable-reports
title: String Diagram & Timetable Reports
sidebar_label: String Diagram & Reports
---

# String Diagram & Timetable Reports

Each ops session on the [Timetable](timetable.md) has three tabs that turn your train instances into something you can look at, print and share: the `String Diagram`, the `Timetable Report` and the `Crew Schedule`. All three are built from the train instances and times you enter on the `Train Instances` tab. They update each time you open the tab.

## String Diagram

A string diagram (also called a time-distance graph) shows every train in the session on one chart. Stations run down the side in [station order](station-order.md). Time runs across the top, with a grid line every 30 minutes. Each train instance is drawn as a colored line from station to station, so you can see at a glance where trains meet, pass or overlap.

Each train instance gets its own color, with its trip number (`LOC1-1`) at the start of the line. A dot marks each arrival and departure; hover over one to see the time on a 24-hour clock. Where a line runs flat the train is sitting at a station, and where it's steep the train is moving. The chart starts just before the first train and ends just after the last, so scroll across and down to see the whole session. The time header and station names stay put as you scroll.

The legend across the top lists each train instance with its color. Click a train in the legend, or click its line, to highlight it. That train instance is also the one opened on the `Train Instances` tab, so you can jump straight to editing its times.

:::info[Screenshot needed]
String Diagram tab showing several colored train lines, the legend and one highlighted train.
:::

### Hiding trains from the string diagram

Some trains, such as yard jobs or trains that run freely, clutter the diagram without adding much. To leave a train off the string diagram, open the train on the [Trains](train.md) screen and uncheck `Show on String Diagram`. The train still appears on the Timetable Report and Crew Schedule.

### Exporting the diagram

- `Export SVG` saves the diagram as an SVG file. SVG images stay sharp at any size and are a good choice for printing large.
- `Export PNG` saves the diagram as a PNG image, handy for email or sharing online.

ModuOps asks where to save the file. The exported image includes the legend and the whole diagram, not just the part visible on screen.

## Timetable Report

The Timetable Report is a traditional printed timetable. Stations are listed down the left in [station order](station-order.md). Each train instance has its own column, headed with its trip number, and columns are in order of departure time.

Each cell is the time the train departs that station, or the arrival time at the terminating station. The departure from the train's origin is in bold, and "--" means the train doesn't stop there. Every Module/Town in the station order is listed, even if no train stops at it.

### Out-and-back trains

A train that goes out along the line and comes back past the same stations gets two columns under one heading: one for the outbound trip and one for the return. Arrow icons show the direction of each column. At the turnaround station, the arrival time is in the outbound column and the departure time is in the return column.

:::info[Screenshot needed]
Timetable Report tab with the filters, several train columns and an out-and-back train shown as two columns.
:::

### Filters

- `Origin` - show only trains that depart from one origin drop zone. Choose `All Origins` to show every train.
- `Train` - show only the runs of one train symbol. Choose `All Trains` to show every train.

If no trains match the filters, the report shows "No trains originate here."

### Printing and exporting

- `Print Timetable` opens a print-ready copy of the timetable and shows your system print dialog.
- `Export CSV` saves the timetable as a CSV file that opens in any spreadsheet program. ModuOps asks where to save the file. Out-and-back trains get two columns, marked "(Out)" and "(Return)".

Both print and export use the current `Origin` and `Train` filters. For example, filter by origin to print a timetable for each yard's crews.

## Crew Schedule

The Crew Schedule is a sign-up sheet for the session. It lists every train instance in order of departure time.

| Column | Description |
| --- | --- |
| `Departure` | The time the train departs its origin. |
| `Train` | The trip number and train name. |
| `Origin` | The short name of the Module/Town the train departs from. |
| `Crew` | Left blank so crews can write their names in. |

- `Print` opens a print-ready copy with room to write in the `Crew` column and shows your system print dialog. Post it at the session so operators can sign up for trains.
- `Export CSV` saves the schedule as a CSV file. ModuOps asks where to save the file.
