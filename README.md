# <img src="http://gdurl.com/r088" height="48" />

React / Redux starter kit with a focus on a modular file structure for self contained functionality.

## Prerequisites

- Node 6.5.0
- Npm 3.10.3

## Technologies Used

- React
- Redux
- React Redux Router
- React-toolbox
- Lodash
- Webpack


## Installation

```
  npm install
```


#### Building the code

You have access to many processes on the frontend. Chose the ony most applicable to your needs:

|`npm run ...`|Description|
|------------------|-----------|
|clean|Removes the current dist/ folder|
|compile|Compiles static files into dist/|
|dev|Webpack builds and starts a dev server|

If you do boot up a development server:

Navigate to [http://localhost:3000](http://localhost:3000)

## Philosophies / Uses 

#### Project Layout

Client code sits in `src`. App specific scripts are stored in `bin`. All build configurations are store in `config`.

```
.
├── bin             # Build scripts
├── config          # Build config
├── src             # Application source
│   ├── assets      # Static assets
│   ├── core        # Core Files
│   ├── middlewares # Redux Middlewares
│   ├── modules     # React Modules
│   └── views       # React Views

```

#### Modules

For the front end we are taking a module layout approach (domain). Each module should be self contained holding the logic for react, reduct, and styling. This folder is contained within `src/modules`

```
.
└── TestModule                 # Module Folder
    ├── index.js               # Index for export
    ├── TestModule.js          # Stateless component
    ├── TestModule.scss        # Styling for component
    ├── TestModuleActions.js   # Redux actions consumed by component
    └── TestModuleContainer.js # State / action binding container for component
```


#### Views

Views should remain stateless, their only responsibility is laying out the modules needed for that view. This folder is contained within `src/views`

```
.
└── View           # View Folder
    ├── View.js    # Stateless view
    └── View.scss  # Stlying for view
```

#### JavaScript

We use es6 / es7 syntax and options for our application. We are currently transpiling to es5 this using babel. 

#### Redux - Actions

In an attempt to keep boilerplate to a minimum and make it easier to have self-contained modules, we have created helpers for building redux actions. 

You can access the action helper by importing and using:

```
import { createAction } from 'core/utils'

createAction(type, action)
```

createAction expects a type and an action object.

Expected Types:

```
CALL_APP # For making app specific calls
```

Expected actions:

CALL_APP
```
{
  key: '',                        # Key used by reducer to set data in global store
  payload: '' || {} || [] || bool # Payload to store in the global store
}
```

Examples:

CALL_APP
```
const toggleSideNav = (isOpen) => {
  const action = {
    key: 'navigation',
    payload: {
      open: isOpen
    }
  }

  return createAction('CALL_APP', action)
}

export { toggleSideNav }
```

You'll notice that the function is being exported so that it can be imported into our container element and mapped to that element's props using redux. Also we are returning a dispatch, this is necessary in order for redux reducers and middlewares to consume the action.

#### Redux - Reducers

In a typical redux application the developer must write a reducer for each state driven component and include that in the global store. This can be somewhat burdensome and requires touching too many files. In an attempt to make this easier, we have create global reducers that will update the global store with the key and payloads passed in from the actions. What this means for the developer is that they do not have to write reducers, this is automatically handled for them! 

**Remember that key that we had to pass into the action? The reducers need that in order to set the data to the appropriate key!**

#### Redux - Middlewares

Our middleware are set to intercept the actions defined above. They take these actions and chain the appropriate dispatches needed for the reducers to set the state accordingly.

APP Middleware:

```
 type: [CALL_APP] # The action to intercept
 types: [ SET ]   # Dispatch type for reducer
 payload: {}      # Object set from the action

 SET # Dispatches the SET type with the payload for reducers
```

#### React

Generally we want our react components (modules in our case) to be as modular as possible. The component core should be stateless and simple in scope. If the component needs state, either self contained or redux, we would want a container for the module. This container would hold the responsibilities of mapping both state and actions to the props of the stateless component. The container should also hold responsibilities for the react component life cycle. 

Container:

```
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Component from 'my-stateless-component'

import Actions from './my-container-actions'

const mapStateToProps = ({ app: { stuff = {} } }) => {
  const { param } = stuff

  return { param }
}

export default connect(mapStateToProps, Actions)(Component)
```

Stateless Component:

```
import React, { PropTypes } from 'react'

const Component = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default Component

```

#### Routes

We use constants for building our routes. If a new route needs be create please place this in `core/constants/paths.js`.

That route object must look like:

```
{
  label: '',     # Header Label
  path: '',      # Url path
  component: ''  # React view to render
}
```

#### Theming 

We use [React-toolbox](http://react-toolbox.com/#/install) for our source of material components and style. If any theming needs to be done on a component please follow their guide for doing so.
