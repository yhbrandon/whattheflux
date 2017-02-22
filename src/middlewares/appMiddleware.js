// Config
import config from 'core/config'

// Utils
import { trackEvent } from 'core/utils'

const { CALL_APP } = config.actionTypes

/*
 * @name appMiddleware
 * @description middleware responsible for handling CALL_API actions
 * @param {object}   action params passed in from action
 * @param {function} next   redux dispatch function
 * @param {object}   store  redux global store
 */
export default store => next => action => {
  const { type, types, payload } = action

  if (type !== CALL_APP) return next(action)

  // Google Analytics event tracking
  if (payload && payload.event) trackEvent(payload.event)

  const [ SET ] = types

  // Dispatching Set with payload from action
  next({ type: SET, ...payload })
}
