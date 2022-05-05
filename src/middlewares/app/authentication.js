import authService from '@/services/auth'

const authentication = async (req, res, next) => {
  try {
    const jwtToken = authService.getJwtTokenFromRequest(req)
    if (jwtToken) {
      req.auth = await authService.getAuthentication(jwtToken)
    }

    return next()
  } catch (error) {
    return next(error)
  }
}

export default authentication
