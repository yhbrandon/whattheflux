// Core
import ReactGA from 'react-ga'

// Utils
import getTrackingId from './getTrackingId'
import { getUserId } from 'core/utils'

// initialize GA with tracking id and user id
const initializeGA = () => {
  const trackingId = getTrackingId() || 0

  if (trackingId) {
    const userId = getUserId() || 0
    let options = {}

    if (userId) {
      // create options for user tracking if userId exists
      options = {
        gaOptions: {
          userId: userId
        }
      }
    }

    ReactGA.initialize(trackingId, options)
  }
}

export default initializeGA
