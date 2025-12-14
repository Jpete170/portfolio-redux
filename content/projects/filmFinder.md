---
title: Film Finder
description: A place to search the web for movies
date: 2025-10-26
image:
---

## Overview

'Film Finder' is an online database for TV Shows and Movies, built upon Nuxt and FastAPI.
The data used in this project was sourced from a public dataset based on Netflix's catalogue of movies.

The motivation behind choosing the technologies in this project is that the stack contains technologies I personally haven't used before, and wanted to learn more about.

## Repositories

## Technical Overview

### UI - Nuxt

The front end website is a Nuxt.js Single Page Application, hosted on Vercel. The main reason behind choosing this framework was to gain familiarity with another JavaScript framework
I chose Nuxt for this project since I wanted to gain familiarity with another framework (as I talked about above) but also to gain exposure to Vue , since Nuxt is built on top of it (like how Next.js is built on top of React).
Alternatively, I went with Nuxt since the framework looked interesting to develop with.

Pages in the app:

- Landing page
- About page, providing details about the project itself
- The 'Movie' and 'Show' pages, which provides information and listings about their respective categories
- The 'Search' page which allows a user to query the database for information they want about the site

### Backend - FastAPI

The backend for this project is a Python project powered by [FastAPI](https://fastapi.tiangolo.com/) which uses Prisma to handle querying the SQLite database for data.
The specific Prisma engine that I used in this project is called 'Prisma Client Python' and the documentation for that can be found [here](https://prisma-client-py.readthedocs.io/en/stable).

I went with FastAPI for this project since it's not only popular (with 45.1K stars on GitHub) but it was relatively easy to setup and deploy to Heroku (although I did have some issues with getting Prisma to work on Heroku, but I'll elaborate on that later)

API Routes
There are several API endpoints that are available and that are accessed by the frontend. A brief overview of each route is provided below, a more in-depth overview of each is available in this [documentation](https://fastapi-movies.fly.dev/docs)

- /api/films - Get everything in the database.
- /api/films/search - queries the database with certain criteria. Takes column, query and limit as parameters
- /api/films/shows/(show_id) - returns a specific object based on the show_id field
- /api/films/(type) - filters results based on the type field, i.e. whether the object is a movie or a tv show
- /api/films/ratings/(ratings) - returns results based on the rating specified, such as G, PG-13, etc.
- /api/films/country/(country) - returns results based on what country the films / tv show was filmed in
- /api/films/year/(year_published) - returns results based when what year they were published to the platform was

## Complete Tech Stack

The complete Tech Stack used in this project is listed below:

- [Nuxt.js](https://nuxtjs.org)
- [Bootstrap Vue](https://bootstrap-vue.org/)
- [Vercel](https://vercel.com)
- [Axios](https://axios-http.com)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Heroku](https://www.heroku.com/)
- [Prisma](https://prisma-client-py.readthedocs.io/en/stable)

## Overall Development Experience

The overall development experience was quite smooth and simple, aside from the usual issues that stem from using completely new frameworks.
The most major issue that I faced was getting the prisma generate command working on Heroku, and the easiest solution was to updated the Heroku Procfile to

This allowed Heroku to run the prisma generate command before starting up the application itself.

### What I learned

The main things that I took away from creating and working on this project are that:

- It's rather easy and quick to get a Nuxt app and a FastAPI app initialised and running locally, and the easiness to deploy them to hosting sites
- How a Nuxt Single Page Application functions, in terms of development
- How to develop a Python REST API using FastAPI,and how to deploy it to Heroku using Prisma
