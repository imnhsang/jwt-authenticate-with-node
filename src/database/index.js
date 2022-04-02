import config from 'config'
import mongoose from 'mongoose'

const connectToMongo = async () => {
  const uri = config.get('mongo.uri')
  const options = {
    // useCreateIndex    : true,
    useNewUrlParser   : true,
    // useFindAndModify  : false,
    useUnifiedTopology: true,
  }

  // mongoose.connection.on('connecting', () => {
  //   console.log('Connecting to Mongo...')
  // })

  // mongoose.connection.on('connected', () => {
  //   console.log('Mongo is connected.')
  // })

  // mongoose.connection.on('reconnected', () => {
  //   console.log('Mongo trying to reconnect...')
  // })

  // mongoose.connection.on('error', (error) => {
  //   console.error('Unable to connect to the Mongo: ', error)
  // })

  // mongoose.connection.on('disconnected', () => {
  //   console.log('Mongo has disconnected!')

  //   // Trying to connect
  //   const waitingMS = 5000
  //   setTimeout(() => {
  //     console.log(`Reconnecting in ${waitingMS / 1000}s...`)
  //     return mongoose.connect(uri, options)
  //   }, waitingMS)
  // })

  // return mongoose.connect(uri, options)
}

export default { connectToMongo }
