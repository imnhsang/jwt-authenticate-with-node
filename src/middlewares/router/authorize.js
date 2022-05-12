import APIError from '@/utils/api-error'
import { HTTP_STATUS_CODES } from '@/utils/constants'

const authorize = ({ mode = 'default' }) => (req, res, next) => {
  const errors = {
    UNAUTHORIZED: new APIError(
      'Authentication is needed to get requests response.',
      HTTP_STATUS_CODES.UNAUTHORIZED
    )
  }

  const isAuthenticated = !!req.auth
  switch (mode) {
    case 'required': {
      if (!isAuthenticated) {
        return next(errors.UNAUTHORIZED)
      }

      return next()
    }
    default:
      return next()
  }
}

export default authorize
