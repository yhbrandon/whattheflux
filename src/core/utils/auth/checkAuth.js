// Core
import cookie from 'react-cookie'
import jwtDecode from 'jwt-decode'

// Config
import config from 'core/config'

const isExpired = (token) => {
  // jwt expiration time in epoch hours, rounded
  const expirationTime = jwtDecode(token).exp

  // current time in epoch hours, also rounded
  const currentTime = Math.round(new Date().getTime() / 1000)

  // calculate an eight hour buffer
  const date = new Date()
  const eightHoursFromNow = date.setTime(currentTime + 28800)

  // is the jwt expiring in the next eight hours?
  return expirationTime < eightHoursFromNow
}

const isAuthorized = () => {
  const token = cookie.load(config.auth.cookie)

  return !!token && !isExpired(token)
}

export default isAuthorized
