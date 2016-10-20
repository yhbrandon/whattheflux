import { map } from 'lodash'

// Paths
import { paths } from 'core/constants'

const children = () => {
  return map(paths.app.children, (path) => {
    return { path: path.path, component: path.component }
  })
}

export const routes = (store) => ({
  path: paths.app.path,
  component: paths.app.component,
  indexRoute: paths.app.index,
  childRoutes: children()
})

export default routes
