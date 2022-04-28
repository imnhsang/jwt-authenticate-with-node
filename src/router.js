
import { Router } from 'express'

import allRoutes from '@/routes'

const generateAPI = (routes) => {
  const router = Router()

  // eslint-disable-next-line no-restricted-syntax
  for (const {
    method, path, controller
  } of routes) {
    router[method](path, controller)
  }

  return router
}

const apiRouter = Router()
apiRouter.use('/', generateAPI(allRoutes))

const router = Router()
router.use('/api', apiRouter)

export default router
