// get userId from sessionStorage for GA user tracking
const getUserId = () => {
  return sessionStorage.getItem('userId')
}

export default getUserId
