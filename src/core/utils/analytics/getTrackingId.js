// Config
import config from 'core/config'

const getTrackingId = () => {
  // get google analytics tracking id for current environment
  const gaEnv = config.analytics.environment
  const { trackingIds } = config.analytics

  return trackingIds[gaEnv]
}

export default getTrackingId
