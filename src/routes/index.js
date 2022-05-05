import glob from 'glob'

import { resolveModule } from '@/utils/helpers'

export const getRoutes = () => {
  const routes = glob
    .sync(`${__dirname}/*/index.js`)
    // eslint-disable-next-line no-shadow
    .reduce((routes, path) => [...routes, ...resolveModule(path)], [])
  return routes
}

export default getRoutes()
