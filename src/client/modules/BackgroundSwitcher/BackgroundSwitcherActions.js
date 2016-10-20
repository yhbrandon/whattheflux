import { createAction } from 'core/utils'

let theme = 'light'

export const toggleBackground = () => {
  theme = theme === 'light' ? 'dark' : 'light'

  const action = {
    key: 'theme',
    payload: {
      theme: theme
    }
  }

  return (dispatch) => {
    dispatch(createAction('CALL_APP', action))
  }
}
