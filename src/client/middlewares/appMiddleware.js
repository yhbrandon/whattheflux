import constants from 'core/constants'

export default store => next => action => {
	if(action.type !== constants.reducerActions.CALL_APP) return next(action)

	next({ type: action.actionTypes.set, key: action.key, payload: action.payload })
}
