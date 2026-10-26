# Workout Planner

A React app for viewing a five-day workout plan, checking exercise references, adjusting exercise weights, and using rest timers.

## Getting started

Install dependencies and start the development server:

```sh
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm start` - run the development server.
- `npm test -- --watchAll=false` - run tests once.
- `npm run build` - create an optimized production build in `build/`.

## Project data

Workout schedules, exercise details, and weight variations are bundled in `src/tempDB.js`. Exercise reference images are served from `public/Imgs/`.

The app currently has no backend or saved workout history. Weight changes are held in memory and are not retained after a page reload.
