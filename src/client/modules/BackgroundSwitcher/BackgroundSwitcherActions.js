import { createAction } from 'core/utils'

let theme = 'light'

export const toggleBackground = () => {
  const action = {
    key: 'theme',
    payload: {
      theme: theme === 'light' ? 'dark' : 'light'
    }
  }
	
  return (dispatch) => {
    dispatch(createAction('CALL_APP', action))
  }
}
