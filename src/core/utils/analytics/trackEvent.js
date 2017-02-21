import ReactGA from 'react-ga'
import initializeGA from './initializeGA'

// track events for GA
const trackEvent = (event) => {
  initializeGA()

  // event should have category, action and/or label properties
  if (event) ReactGA.event(event)
}

export default trackEvent
