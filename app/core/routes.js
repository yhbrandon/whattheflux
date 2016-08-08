// Core
import React from 'react'

// Views
import App from '../views/App'
import Welcome from '../modules/Welcome/WelcomeContainer'

export const routes = (store) => ({
  path: '/',
  component: App,
  indexRoute: { onEnter: (nexState, replace) => replace('/welcome') },
  childRoutes: [
    { path: 'welcome', component: Welcome }
  ]
})

export default routes
