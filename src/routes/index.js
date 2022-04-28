import glob from 'glob'

import helpers from '@/helpers'

export const getRoutes = () => {
  const routes = glob
    .sync(`${__dirname}/*/index.js`)
    // eslint-disable-next-line no-shadow
    .reduce((routes, path) => [...routes, ...helpers.resolveModule(path)], [])
  return routes
}

export default getRoutes()
