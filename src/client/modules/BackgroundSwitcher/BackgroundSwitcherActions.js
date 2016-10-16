import configureAction from 'core/configureAction'

let theme = 'light'

export const toggleBackground = () => {
  theme = theme === 'light' ? 'dark' : 'light'

  return (dispatch) => {
    dispatch(configureAction('theme', theme))
  }
}
