import { actionTypes } from 'core/constants'

const { CALL_APP } = actionTypes

/*
 * @name apiMiddleware
 * @description middleware responsible for handling CALL_API actions
 * @param {object}   action params passed in from action
 * @param {function} next   redux dispatch function
 * @param {object}   store  redux global store
 */
export default store => next => action => {
  const { type, types, payload } = action

  if (type !== CALL_APP) return next(action)

  const [ SET ] = types

  // Dispatching Set with payload from action
  next({ type: SET, ...payload })
}
