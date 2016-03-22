# React / Redux Boilerplate

Plug and play setup for React and Redux with examples.

---

## Code examples

- API - A short example of making a request and returning data, this example just calls in a static JSON object
- Store - This example includes all parts needed for building and interaction with a Redux store. store/configureStore.js takes all the reducers and creates a single store instance for the reducers. This allows you to have segment logic into separate reducers but combine them into a single store (Redux). The reducers listen for an action type to be called, which is configured in constants/ActionTypes.js. Actions are responsible for firing specific functionality for that action type.
- Containers - A wrapper for components
- Components - Contained functionality for view components.

## Libraries
- React
- Reduct
- Material-UI
- LoDash

## Requirements

- [Node](https://nodejs.org) 4.0 or newer

## Installation

Clone repo and run:
After cloning the repository, install dependencies:

```
npm install
```

## Starting App

```
npm start
```

Open `http://localhost:3000`
