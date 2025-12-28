---
title: "Listings Finder | MERN Stack Project"
description: 'An overview of the Listings Finder Project that I have created using the MERN technology stack.'
date: '2022-03-04T05:35:07.322Z'
author:
    name: Jackson Peters
    picture: '/profile_pic.PNG'
ogImage:
    url: ''
---

## Introduction to the Project

For my first major side project, I've undertaken creating a full stack project using the MERN stack. The MERN stack is made of the following:

- MongoDB
- Express.JS
- React
- Node.JS

My reasoning for choosing this technology stack to work with is that I have previous experience with working and using these technologies as part of my University course, and I’m using this project to exercise my existing skills as well as learning new ones.

## The Tech Stack

The main core technologies used in the project are:

- MongoDB, for all-database capabilities
- Express.JS, for the backend web capabilities, used in conjunction with Node.js
- React, for the Front end capabilities
- Node.js, for the Javascript runtime stuff, as well as powering Express.js

I’ve used Bootstrap to handle all the CSS requirements for the frontend React application.
In addition, these technologies were used as well:

- Axios, for handling HTTP get requests from the frontend to the backend. In addition, the module Axios-Auth-Refresh is also used to automatically update the request header with the newest Authentication token.
- Auth0, for securing the API routes, so only the front end application can access it

### Web Hosting

I’ve used 2 separate web hosting services to host the front end and back end of the project. For hosting the frontend React app I used Vercel, and for the backend Express server I used Heroku.

The main reason behind this separation is that I was unsure if the Express server would properly function if it was bundled together with the React app and hosted on Vercel.

## Project Experiences

My overall experiences with this project have been positive, mainly due to the fact that I am familiar with most of the technologies used in this project, so the initial setup and first steps were relatively easy.

The first hurdle / obstacle I faced is implementing authentication for the Express API, since I had no prior experience with properly implementing authentication in any project.

I used [Auth0](https://www.auth0.com) for handling authentication, and used their 'Getting Started' guides to get everything set up. The main issue I ran into was using `Axios` in sending and receiving authentication data to the Express API, but that easily resolved when the correct fields in the `Axios` config.

Another hurdle that was faced was that the MongoDB example data had inconsistent fields throughout the many different Documents.

For example, one listing may have a `weekly_price['$numberDecimal']` and another may not. The solution I found was the implement the following code:

     dbConn.collection("listingsAndReviews")
        .find({
        weekly_price: {$exists: true},
        monthly_price: {$exists: true},
        cleaning_fee: {$exists: true},
        extra_people: {$exists: true},
        guests_included: {$exists: true}
        })
        .limit(20)
        .skip(5)
        .toArray(function(err, result){
        if (err) throw err;
        res.json(result)} 

This code basically ensures that all data requested from the database will have the included fields, which will make rendering the individual listing pages on the front end much easier.

## Future Project Plans

The project in its current (at time of posting this blog post) can be considered version 1.0, as I do have plans to continue to support and develop this project further. However, the plans I do currently require me to learn more about REST APIs and filtering functionality, so it'll be sometime before any major additions are made to this project.

Currently, such plans include:

- Adding Search and Filter functions
- Adding and using Redux for state management.
- Adding a 'Restaurant' section to the frontend, along with it's own search and filter functions.
- Find a way to dynamically render the individual listing pages in such a way that the aforementioned code is not necessary.
