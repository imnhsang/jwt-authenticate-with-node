import config from 'config'
import jwt from 'jsonwebtoken'

import APIError from '@/utils/api-error'
import { HTTP_STATUS_CODES } from '@/utils/constants'

const generateCredential = async (uid) => {
  const jwtToken = jwt.sign({ uid }, config.get('jwt.secret'), { expiresIn: config.get('token.verification.lifetime') })
  const [header, payload, signature] = jwtToken.split('.')

  return {
    header, payload, signature
  }
}

const getJwtTokenFromRequest = (req) => {
  const head = req?.headers?.authorization || null
  const tail = req?.cookies?.access_token || null
  const bearerAuthRegex = /^Bearer\s(\S+)$/
  if (!(head && tail)) {
    return null
  }

  const accessToken = `${head}.${tail}`

  if (!accessToken.match(bearerAuthRegex)) {
    throw new APIError('Token is invalid.', HTTP_STATUS_CODES.UNAUTHORIZED)
  }

  const jwtToken = accessToken?.replace(bearerAuthRegex, '$1')
  return jwtToken
}

const getAuthentication = async (jwtToken) => {
  try {
    const uid = jwt.verify(jwtToken, config.get('jwt.secret'))?.uid

    return { uid }
  } catch (error) {
    throw new APIError('Token is invalid.', HTTP_STATUS_CODES.UNAUTHORIZED)
  }
}

export default {
  generateCredential,

  getJwtTokenFromRequest,
  getAuthentication
}
