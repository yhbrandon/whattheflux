// Views
import App from 'views/App/AppContainer'
import About from 'views/About/About'

const paths = {
  app: {
    path: '/',
    component: App,
    index: {
      label: 'About',
      component: About
    },
    children: []
  }
}

export default paths
