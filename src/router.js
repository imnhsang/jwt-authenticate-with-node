
import { Router } from 'express'

import allRoutes from '@/routes'
import { validate, authorize } from '@/middlewares/router'

const generateAPI = (routes) => {
  const router = Router()

  // eslint-disable-next-line no-restricted-syntax
  for (const {
    method, path, controller, authOpts = {}, validation
  } of routes) {
    router[method](path, authorize(authOpts), validate(validation), controller)
  }

  return router
}

const apiRouter = Router()
apiRouter.use('/', generateAPI(allRoutes))

const router = Router()
router.use('/api', apiRouter)

export default router
