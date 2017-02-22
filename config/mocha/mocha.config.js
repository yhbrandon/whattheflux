const noop = () => {}

require.extensions['.jpg'] = noop
require.extensions['.png'] = noop
require.extensions['.scss'] = noop