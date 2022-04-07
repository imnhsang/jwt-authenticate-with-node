import { createClient } from 'redis'
import config from 'config'

const connectToRedis = async () => {
  const {
    host, username, password, port
  } = config.get('redis')

  const client = createClient({ url: `redis://${username}:${password}@${host}:${port}` })

  client.on('connect', () => {
    console.log('Redis is connected.')
  })

  client.on('reconnecting', () => {
    console.log('Redis trying to reconnect...')
  })

  client.on('error', (err) => {
    console.error('Unable to connect to the Redis: ', err)
  })

  client.on('end', () => {
    console.log('Redis has closed!')
  })

  return client.connect()
}

export default { connectToRedis }
