// Config
import config from 'core/config'

// Utils
import { trackRouteChange } from 'core/utils'

const { ROUTE } = config.actionTypes

export default store => next => action => {
  const { type, payload } = action

  if (type !== ROUTE) return next(action)

  if (payload) {
    const { pathname } = payload

    trackRouteChange(pathname)
  }

  return next(action)
}
