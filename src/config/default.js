import { ONE_DAY } from '@/utils/constants'

const config = {
  mongo: {
    uri: 'mongodb+srv://admin:Aa123456@cluster0.e8e1c.mongodb.net/jwt-auth-redis'
  },
  redis: {
    host    : 'redis-11072.c10.us-east-1-4.ec2.cloud.redislabs.com',
    username: 'default',
    password: '5xjLDrgbD1J7SkCWRvGLCUFneiy5t8Cx',
    port    : 11072
  },
  jwt: {
    secret: 'hVKMNLXmnE8FFrukPZhTD6U7'
  },
  token: {
    authentication: {
      lifetime: 30 * ONE_DAY
    }
  }
}

module.exports = config
