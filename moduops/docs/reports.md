---
id: reports
title: Reports
sidebar_label: Reports
---

# Reports

ModuOps offers reports that summarize the equipment requests in your layout. Reports display data in a table that you can search, filter, sort and export to a comma separated values (CSV) file. CSV files can be opened in a spreadsheet application for further work.

Find the reports under the `Reports` heading in the sidebar menu:

- `Equipment Summary`
- `Car Requests`
- `Module Summary`

For timetable printouts, see [String Diagram & Timetable Reports](timetable-reports.md).

## Working with report tables

All three reports use the same table. You can search across every column, filter any column, sort by clicking a column header, and show or hide columns from the column menu. There's a row density control to fit more on screen, paging with a choice of rows per page, and checkboxes to select rows when you only want to export some of them.

## Exporting to CSV

Each report has export buttons:

| Button | Description |
| --- | --- |
| `Export All Rows` | Exports every row that matches the current search and filters, across all pages. |
| `Export Page Rows` | Exports only the rows on the current page. Not available on the Equipment Summary. |
| `Export Selected Rows` | Exports only the rows you have checked. Disabled until you select at least one row. |

The column titles become the first row of the CSV file. Exports are flat lists of rows. Grouping on the Car Requests report is not carried into the file.

## Car Requests

The Car Requests report lists every equipment request in the layout, one row per request. Use it to see what cars each Module/Town, owner, consignee or drop zone is asking for.

| Column | Description |
| --- | --- |
| `Module` | The Module/Town. |
| `Owner` | The Module/Town owner. |
| `Consignee` | The consignee making the request. |
| `Drop Zone` | The drop zone the cars are delivered to. |
| `Spot Capacity` | The drop zone's capacity, in your layout's length unit. |
| `Car Class` | The requested equipment class. |
| `Car Code` | The equipment type code, such as an AAR code. |
| `Description` | The equipment description. |
| `Car Length` | The equipment length, in your layout's length unit. |
| `Demand` | The equipment request's `Demand`. |

Only equipment requests that have a Module/Town, consignee, drop zone and equipment type are listed.

:::info[Screenshot needed]
Car Requests report grouped By Module, showing the Demand totals on each group row.
:::

### View presets

Buttons above the table set up the report for a common question with one click. Each preset chooses which columns show and how rows are grouped.

| Preset | Groups rows by |
| --- | --- |
| `By Owner` | Owner |
| `By Module` | Module |
| `By Car Type` | Car Class |
| `By Consignee` | Consignee |
| `By Drop Zone` | Module, then Drop Zone |
| `All Columns` | No grouping. Shows every column. |

`All Columns` is the starting view.

### Grouping

To group rows your own way, drag a column header into the grouping area above the table. Drag in more headers to group within groups. Each group row shows the total `Demand` for that group, for example "Total: 12".

ModuOps remembers the columns you show and the grouping you choose, and uses them the next time you open the report for this layout.

## Equipment Summary

The Equipment Summary shows total demand for each equipment type across all Modules/Towns. Use it before a session to let members know what rolling stock to bring.

| Column | Description |
| --- | --- |
| `Car Type` | The equipment class and length, for example "B 40". |
| `Code` | The equipment type code. |
| `Description` | The equipment description. |
| `Short` | The equipment short description. |
| `Era` | The equipment era. |
| `Relative Demand` | The total `Demand` of all equipment requests for this equipment type. |

Only equipment types with at least one equipment request are listed. Sort by `Relative Demand` to see the most requested cars first.

## Module Summary

The Module Summary gives a high level overview of each Module/Town in the layout.

| Column | Description |
| --- | --- |
| `Module` | The Module/Town. |
| `Owner` | The Module/Town owner. |
| `# Drop Zones` | Number of drop zones. |
| `# Consignees` | Number of consignees. |
| `Total Demand` | The total `Demand` of all equipment requests on the Module/Town. |
| `# Car Requests` | Number of equipment requests. |

Every Module/Town is listed, including those with no equipment requests.

## Changes from version 5

- The Equipment Request report is now **Car Requests**. You can filter, sort and group by any column, and use view presets.
- The Modules/Towns Summary Listing is now **Module Summary**. It adds the `Owner` and `Total Demand` columns.
- The **Equipment Summary** report is new.
- Cars/Week is now called `Demand`.
- Reports export to CSV only. TSV export and printing from these reports have been removed.
- The Equipment Register report is no longer in the Reports menu.
