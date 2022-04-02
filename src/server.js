import './register'

import application from './app'
import database from './database'

const createServer = async (app) => {
  database.connectToMongo()

  const port = process.env.PORT || 5000
  return app.listen(port, () => console.log(`Server listening port ${port}.`))
}

export default createServer(application)
