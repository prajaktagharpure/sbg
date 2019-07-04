## Get Started

App is built using the React Slingshot boilerplate https://github.com/coryhouse/react-slingshot

It consumes the Sky Docker API and Websocket

- Please replace the host to the SERVICE_URL & WEBSOCKET_URL in the config/service_config.json to the IP of your machine docker is running

- Simply run the command `npm run start` or `npm start` which should run the app, run eslinter and unit tests

## Tech Stalk (MY choice)

- React
- Redux
- Modern JS features of ES6 + with transpiling using Babel
- Webpack for Bundling
- ESLint for ensuring code consistensy (Perfect when working in a team)
- Unit Test - Jest, Enzyme
- Basic Styling using materialisecss and scss implementation

## Features Implemented

- Implementation of WebSocket through react redux middleware support
- Displaying the events on the overview page showing only the primary market
- On click of View Details, nagivates to the Details page showing more markets and outcomes (currently displaying first 20)
- Ability to select your favourite event by clicking on heart symbol which gives live updates about the event
- For the favourite events or events of interest since live updates are triggered, UI layout changes from accordion/collapsible to normal display or markets and outcomes. Done so that live updates in OUTCOME PRICE and STATUS could be seen
- Live updates are subscribed to events are showing changes related to outcome status and outcome price
- Ability to add an outcome to the my betslip panel (just basic data flow shown)
- Some very simple unit tests

--(Some of the features in the three tech test task not completed as a part of this app due to some time constraints on my end. Features implemented above have been selected randomly)

## TODOS

- At times, JS renders before the CSS for split second (Webpack config error maybe? )
