import express from 'express'

import router from '@/router'
import loadAppMiddlewares from '@/middlewares/app'
// eslint-disable-next-line import/no-unresolved
import loadErrorHandling from '@/middlewares/error-handling'

const app = express()

loadAppMiddlewares(app)

app.get('/', (req, res) => {
  res.send('API Running')
})

app.use(router)

loadErrorHandling(app)

export default app
