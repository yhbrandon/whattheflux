import ReactGA from 'react-ga'
import initializeGA from './initializeGA'

// track route changes for GA
const trackRouteChange = (pathname) => {
  initializeGA()

  if (pathname) {
    ReactGA.set({
      page: pathname
    })

    ReactGA.pageview(pathname)
  }
}

export default trackRouteChange
