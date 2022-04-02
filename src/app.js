import express from 'express'

import loadAppMiddlewares from '@/middlewares/app'

const app = express()

loadAppMiddlewares(app)

app.get('/', (req, res) => {
  res.send('API Running')
})

export default app
