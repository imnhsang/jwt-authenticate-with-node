import './register'

import application from './app'

import cache from './cache'
import database from './database'

const createServer = async (app) => {
  database.loadModels()

  Promise.all([
    cache.connectToRedis(),
    database.connectToMongo()
  ])

  const port = process.env.PORT || 5000
  return app.listen(port, () => console.log(`Server listening port ${port}.`))
}

export default createServer(application)
