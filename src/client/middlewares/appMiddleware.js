import { actionTypes } from 'core/constants'

const { CALL_APP } = actionTypes

export default store => next => action => {
  const { type, types, payload } = action

  if (type !== CALL_APP) return next(action)

  const [ SET ] = types

  next({ type: SET, ...payload })
}
