// Core
import cookie from 'react-cookie'

// Config
import config from 'core/config'

const getToken = () => {
  const token = cookie.load(config.auth.cookie)

  return `JWT ${token}`
}

export default getToken
