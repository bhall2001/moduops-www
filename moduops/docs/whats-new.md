---
id: whats-new
title: What's New in Version 6
sidebar_label: What's New in v6
---

# What's New in Version 6

ModuOps version 6 is a complete rewrite. It's now an Electron desktop app written in React with TypeScript. Here are the highlights:

- A new modern interface that is responsive, with light and dark themes.
- Mac, Linux (in progress) and Windows support. Mac ships first, then Linux, then Windows.
- Automatic updates on Mac and Windows.
- The new [Pull & Drop Ops](overview.md#pull--drop-ops) scheduling engine with pickups, loads and empties. Trains leave the yard full, and you can generate and print a whole day of runs in one batch.
- A new [Origins](origins.md) screen that works out how many of each car type to put in a yard or other train origin.
- A switch to print PICKUP ALL WHEN DROPPING on trainlists, and a refreshed printed SwitchList.
- Cars/Week is now called Demand.
- Yards are now **train origin/terminus** drop zones. Version 5's "Yard/Interchange/Staging" checkbox is now `Train Origin/Terminus`, and it's set on the drop zone only, not the module/town. Any drop zone where a train starts or ends, whether a yard, staging or interchange track, gets the check. It doesn't have to be a yard at all. A coal unit train can originate at the mine's loading track and terminate at the power plant, so check `Train Origin/Terminus` on those two drop zones. See [Drop Zones](drop-zones.md#origin-and-terminus-tracks).
- A new layout file format (`.mop3`). Version 5 `.mop2` files are automatically migrated the first time you open them, and your original file is left untouched. See [Upgrading from v5](upgrading.md).
- Lengths can use any unit and any scale, standard or custom, and can easily be converted between them. A real-world measurement converter turns a tape measure reading into your layout's scale.
- A much better trainlist preview. What you see is the actual printed page.
- A new [Timetable](timetable.md) with [string diagrams, timetable reports and a crew sign-up sheet](timetable-reports.md).
- A new Equipment Summary report so members know what equipment to bring, and reports export to CSV.
- Clone trains, including their route, and import several modules at once.
- A formatting toolbar for remarks and instructions. No more typing `<b>` tags.
