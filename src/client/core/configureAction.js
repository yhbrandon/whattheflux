export default (key, payload) => {
	const action = key.replace( /([A-Z])/g, '_$1').toUpperCase()
	
	return {
		type: 'CALL_APP',
		key: key,
		actionTypes: {
      set: `SET_${ action }`
    },
		payload: payload
	}
}