// Views
import App from 'views/App/App'

// Modules
import Welcome from 'modules/Welcome'

const paths = {
  app: {
    path: '/',
    component: App,
    index: {
      label: 'Geppetto',
      component: Welcome
    },
    children: []
  }
}

export default paths
