// get userId from sessionStorage for GA user tracking
const getUserId = () => (
  sessionStorage.getItem('userId')
)

export default getUserId
