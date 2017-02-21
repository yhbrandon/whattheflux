import getUserId from './getUserId'

// save userId in sessionStorage for GA user tracking
const saveUserId = (userData) => {
  const { id } = userData

  if (id && id !== getUserId()) {
    sessionStorage.removeItem('userId')
    sessionStorage.setItem('userId', id)
  }
}

export default saveUserId
