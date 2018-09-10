Test App with NodeJS, Express, AngularJS, Jasmine, Karma, Travis-CI, CodeMate
==============================================================================

[![codebeat badge](https://codebeat.co/badges/8529163a-631f-4159-a5ff-27741d76adc8)](https://codebeat.co/projects/github-com-shabin-slr-hotel-searcher-master)
[![Build Status](https://travis-ci.org/shabin-slr/hotel-searcher.svg?branch=master)](https://travis-ci.org/shabin-slr/hotel-searcher)
#### An app that allows search in the given inventory by any of the following:

- Hotel Name
- Destination [City]
- Price range [ex: $100:$200]
- Date range [ex: 10-10-2020:15-10-2020]

and allow sorting by:

- Hotel Name
- Price

####  Stack
- Angular : v1.7.3
- NodeJS : v9.11.2
- Continuous Integration : Travis CI  [![Build Status](https://travis-ci.org/shabin-slr/hotel-searcher.svg?branch=master)](https://travis-ci.org/shabin-slr/hotel-searcher)
- Code Quality : Codebeat  [![codebeat badge](https://codebeat.co/badges/8529163a-631f-4159-a5ff-27741d76adc8)](https://codebeat.co/projects/github-com-shabin-slr-hotel-searcher-master) 

#### Getting Started
- Install dependencies
```
npm install
```
- Start Application
```
npm start
```
Server will start on port 3000 in localhost
Got to <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> to see the app running

- Run Backend unit tests
```
npm test
```
- Run front-end unit tests
```
npm test-frontend
```
- Get Coverage Report
```
npm run coverage
```
