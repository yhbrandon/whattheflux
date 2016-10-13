import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

const context = require.context('../app', true, /\.spec\.js$/)
context.keys().forEach(context);
