import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

const noop = () => {}

require.extensions['.jpg'] = noop
require.extensions['.png'] = noop
require.extensions['.scss'] = noop
