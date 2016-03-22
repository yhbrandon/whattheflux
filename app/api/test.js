import _test from './test.json'

const TIMEOUT = 200

export default {
  getData(cb, timeout) {
    setTimeout(() => cb(_test, timeout || TIMEOUT))
  }
}
