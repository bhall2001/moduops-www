---
id: overview
title: Overview
sidebar_label: Overview
slug: /overview
---

# Getting to Know ModuOps

ModuOps (pronounced 'mod-you-ops') was initially developed with Free-mo Operators in mind, but it’s evolved to meet the needs of all types of modular layouts. It’s been shaped by feedback from clubs and home layout enthusiasts alike, making it a versatile tool for anyone interested in adding operations to their model railroad.

A modular Free-mo layout stands out in several ways:

- Each setup is completely unique.
- The layout only exists for a day or two.
- It will never be recreated in the exact same way.
- The starting state of the layout is unknown.
- Crew mistakes happen but should fix themselves as operations progress.
- Managing rolling stock can be tricky and prone to errors.
- ModuOps is built based on the characteristics of the Mad River and Big Timber (MRBT) software, and this guide explains some of the design choices behind the app. Many of its features stem from experience with MRBT and New England Free-mo, shaped by the challenges these setups face.

## The ModuOps Difference

ModuOps is a random car type generator. The software essentially takes a list of car types and randomly assigns them to locations on the layout. Using car types IS the significant difference ModuOps offers.

The strict rules associated with reporting marks adds significant effort to an Operating Session. The administrative overhead to maintain car reporting marks takes a tremendous amount of time. In fact, the time invested in this task alone typically exceeds the life-span of the layout by many factors.

## Best Practices

ModuOps requires a sourcing yard sending cars to Consignees. Large layouts can be split into Districts with regional yards acting as the source of cars for an area of the Layout. It is even possible to simulate transfers between yards by making the yard itself a Consignee.

ModuOps is Stateless. That means that the system does not store any information about the past, present or future state of the layout. Another advantage in a layout where "Free-running" occurs between formal operations sessions. ModuOps does not need the layout to be setup in any particular manner prior to an operating session beginning.

ModuOps does not have the ability to schedule a "Pick Up". This is the direct result of the software being Stateless. Future stateful scheduling engines are planned and will be included in the future.

ModuOps currently offers 2 scheduling engines, the original MRBT random engine (each request has a 1/n chance of selection) and a weighted selection engine.

The weighted selection uses a cars per week number given to requests. In addition to the weighted selection, it is possible to skews selections to facilitate car blocking.

The Application as it stands today is based on MRBT's original flow. That means that all traffic originates at a yard and travels to a consignee. It is important to remember this sequence when creating operating plans.

## Home Layouts

ModuOps works GREAT with home layouts. In fact, there are quite a few home layouts switching from car cards to ModuOps for formal Operating Sessions. Many of the concerns that Free-mo Ops Chiefs have transfer directly to operations on a home layout.

In fact, a home layout is the perfect place to start before diving in as a Free-mo layout Ops Chief. Most home layouts are smaller than Modular Layouts. Starting with a small layout allows you to learn how ModuOps works.

## Club Layouts

ModuOps is an excellent choice for static club layouts. A great benefit of ModuOps is there is no setup required for an ops session. This gives clubs the flexibility to have host formal operating sessions as well as open "free running" sessions intermixed. ModuOps does not care what state the layout starts at or is left in. An operating session can start at any time no matter where cars are on the layout.

## Contacts

ModuOps has an email list hosted on [groups.io](https://groups.io/g/moduops/topics).

There is also a group on [Facebook](https://www.facebook.com/groups/1029861033780522).

If you need to reach me directly best way is bhall underscore 2001 at yahoo dot com. Hopefully you can figure that out ;-)

## How Much?

Good question. Developing a software such as this does incur costs. I've invested time in training, development tools, the website and time in writing and maintaining the application.

ModuOps is Donation-ware. If you feel compelled to donate, please contact Bob Hall for details on how to make a donation. Thank you!
