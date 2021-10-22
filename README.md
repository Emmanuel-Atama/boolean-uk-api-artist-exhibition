# Artist Exhibition

**Repo Name:** boolean-uk-api-artist-exhibition

## Description

Practice writing models with relationships for an API of an artist exhibition management service.

## Requirements

The Artist Exhibition Service organises exhibitions that can have multiple Artists at an exhibtion. The exhibitions will be organised for a specific date and at a specific location, the same location can be used at multiple exhibitions so we want to store these addresses separately. The host of the exhibition will sell tickets to each exhibition and each ticket needs to have an email in order to send a confirmation email.

The employees of the Artist Exhibition Service need to be able to do the following:

- create an exhibition with an address
- create an artist profile and add them to an exhibition
- create a ticket for a customer
- delete a ticket for a customer
- view the ticket sales of an exhibition
- view the artists with an exhibit at an exhibition
- update the exhibition address
- update the exhibition date

The artists who participate in exhibitions need to be able to do the following:

- view a list of exhibitions
- view a list of exhibtiions they will be participating in

## Instructions

### Setup

- Download this repo.
- Rename `.env.example` to `.env`
- Update `.env` with your URLs from Elephant SQL
- Run `npm install`
- Run `npm start`

### Plan

- Use an entity diagram map to create a data model for this project.
- There are 5 data models in this project; include fields, data types and relationships.
- Write up a list of routes with a description of what they will return.

### Example

Artist:

- id Int
- firstName String
- lastName String

An artist can be at many exhibtions : An exhibition has many artists

- [POST] `/artists` creates an artist and adds them to an exhibition
- [GET] `/artists/:id/exhibitions` returns a list of exhibitions for a specific artist

### Build Process

- Add a model to the `schema.prisma`
- Run a migration
- Create a route
- Create a controller
- Test the route and controller
- Commit to Git

## Challenge

An Artist stores their paintings on https://metmuseum.github.io/ and the Artist Exhibition Service needs a list of paintings of each artist at their exhibition.

Build these routes:

- `/exhibtions/:id/paintings` returns a list of paintings for the exhibit
- `/exhibitions/:id/classifications` returns a list of unique classifications for the exhibition
