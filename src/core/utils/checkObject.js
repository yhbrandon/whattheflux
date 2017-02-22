/*
 * @name checkObject
 * @description check if variable is an object
 * @param {object} obj value to be checked
 */
export default (obj) => (
  obj !== null && typeof obj === 'object' && Object.keys(obj).length > 0
)
