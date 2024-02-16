---
id: overview
title: Overview
sidebar_label: Overview
slug: /overview
---

# Getting to Know ModuOps

The original use cases for ModuOps comes from Free-mo Operators. ModuOps takes into account the nuances of operating plans for Modular layouts. Club and home layouts also had a hand in steering ModuOps development.

A Free-mo layout has many unique characteristics not found with other Model Railroad setups:

- Layout is unique at each setup
- Layout will never exist again
- Layout exists for only a day or 2.
- Starting state of the layout is unknown
- Crew errors occur but should be self-correcting
- Rolling stock administration is cumbersome and error-prone

ModuOps is based on the original Mad River and Big Timber (MRBT) software. With this in mind and the constraints listed above, this Chapter helps new users understand some design decisions of the Application. ModuOps' features directly stem from the prior experience with MRBT and New England Free-mo.

## The ModuOps Difference

ModuOps is a random car type generator. The software essentially takes a list of car types and randomly assigns them to locations on the layout. Using car types IS the significant difference ModuOps offers.

The strict rules associated with reporting marks adds significant effort to an Operating Session. The administrative overhead to maintain car reporting marks takes a tremendous amount of time. In fact, the time invested in this task alone typically exceeds the life-span of the layout by many factors.

## Best Practices

ModuOps requires a sourcing yard sending cars to Consignees. Large layouts can be split into Districts with regional yards acting as the source of cars for an area of the Layout. It is even possible to simulate transfers between yards by making the yard itself a Consignee.

ModuOps is Stateless. That means that the system does not store any information about the past, present or future state of the layout. Another advantage in a layout where "Free-running" occurs between formal operations sessions. ModuOps does not need the layout to be setup in any particular manner prior to an operating session beginning.

ModuOps does not have the ability to schedule a "Pick Up". This is the direct result of the software being Stateless. Future stateful scheduling engines are planned and will be included this feature.

ModuOps currently offers 2 scheduling engines, the original MRBT random car type engine (each request has a 1/n chance of selection) and a weighted selection engine.

The weighted selection uses a cars per week number given to the car type. In addition to the weighted selection, it is possible to skews selections to facilitate car blocking.

The Application as it stands today is based on MRBT's original flow. That means that all traffic originates at a yard and travels to a consignee. It is important to remember this sequence when creating operating plans.

## Home Layouts

ModuOps works GREAT with home layouts. In fact, there are quite a few home layouts switching from car cards to ModuOps for formal Operating Sessions. Many of the concerns that Free-mo Ops Chiefs have transfer directly to operations on a home layout.

In fact, a home layout is the perfect place to start before diving in to be a Free-mo layout Ops Chief. Most home layouts are smaller than Modular Layouts. Starting with a small layout allows you to learn how ModuOps works.

## Club Layouts

We even have clubs using ModuOps. A great benefit of ModuOps is there is no setup required for an ops session. This gives clubs the flexibility to have host formal operating sessions as well as open "free running" sessions. ModuOps does not care what state the layout is left in. An operating session can start at any time no matter where cars are on the layout.

## Contacts

ModuOps has an email list hosted on [groups.io](https://groups.io/g/moduops/topics).

There is also a group on [Facebook](https://www.facebook.com/groups/1029861033780522).

If you need to reach me directly best way is bhall underscore 2001 at yahoo dot com. Hopefully you can figure that out ;-)

## How Much?

Good question. Developing a software such as this does incur costs. I've invested time in training, development tools, the website and time in creating this system. The app is Donation-ware. If you feel compelled to donate please contact me for details on how to make a donation. Thank you!
