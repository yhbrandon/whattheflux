export default (obj) => {
  return obj !== null && typeof obj === 'object' && Object.keys(obj).length > 0
}
