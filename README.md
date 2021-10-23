# Blue Ocean Project

# Jobify *Your next hire is here*

## Table of Contents

- [Overview](#overview)
- [Setup tasks](#setup-tasks)
- [Contributors](#contributors)
- [Tech Stack](#tech-stack)
- [App Features](#app-features)
- [Challenges](#challenges)
- [Ticketing System](#ticketing-system)
- [Future Considerations](#future-considerations)

## Overview

Jobify is an open-source job search portal for employers/job seekers of all industries and backgrounds. Project timeline was one week, from 10/16/21 to 10/22/21. 

## Setup tasks

- run `npm install` in this directory to install the dependencies.
- run `npm run start:react` and `npm start` in separate terminals to build with parcel and start the express server.
- use the `authkey.example.js` file to create your own `authkey.js` and add your github API token to attach as an "Authorization" header in requests.
- navigate to cloud.google.com, create an account and create new credentials for an auth file. Store this file on the top level of the project (same level as package.json).

## Contributors

- [Alex Roberson](https://github.com/ajroberson321)
- [Andy Chen](https://github.com/andy-ch3n)
- [Daniel Politis](https://github.com/danpolitis)
- [Gabrielle Guo](https://github.com/ggbbi)
- [Pritam Sarker](https://github.com/pritms)
- [Richard Cui](https://github.com/richardcuii)
- [William Lee](https://github.com/djDUBlee)
- [Yingchen Bai](https://github.com/pppbyc)

## Tech Stack

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Material UI](https://mui.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Parcel](https://parceljs.org/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Amazon RDS](https://aws.amazon.com/rds/)
- [Firebase](https://firebase.google.com/)

## App Features

### For public users:
- Search and apply for jobs
- Read public blog posts

### For job seekers:
- Search and apply for jobs
- View personal calendar & create daily tasks
- Upload & view a list of documents
- Create personal notes
- Create personal blog posts, read public blog posts
- Chat with other registered job seekers & employers

### For employers:
- Create job listings 
- View personal calendar & create daily tasks
- View submitted applications
- Create personal blog posts, read public blog posts
- Chat with other registered job seekers & employers

## Challenges
### Technical
- Postgresql document storage changed formatting of files, had to switch to google-cloud storage using node module.
- Tracking user state throughout the web app using global context without accidentally reverting to the initial state. 
#### Unexpected
- Differentiating user roles (job seekers vs employers) within Postgresql database, while staying in sync with firebase.


## Ticketing System
- [Trello](https://trello.com/b/Cdqi4ueG/jobify)

## Future Considerations
- Deploy on AWS/EC2 instance or any web server
- Make website mobile responsive with material UI
- Write tests
- Make an animated landing page and style fonts and color scheme
- Navbar change to include icons instead of text (like LinkedIn)

