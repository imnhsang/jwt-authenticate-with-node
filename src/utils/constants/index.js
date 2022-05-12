const METHODS = {
  POST  : 'post',
  GET   : 'get',
  DELETE: 'delete',
  PATCH : 'patch',
  PUT   : 'put'
}

const HTTP_STATUS_CODE_DEFINITIONS = {
  200: {
    type   : 'OK',
    message: 'Success'
  },
  201: {
    type   : 'CREATED',
    message: 'Created'
  },
  400: {
    type   : 'BAD_REQUEST',
    message: 'Bad request.'
  },
  401: {
    type   : 'UNAUTHORIZED',
    message: 'Authentication is needed to get requests response.'
  },
  403: {
    type   : 'FORBIDDEN',
    message: 'Permission denied.'
  },
  404: {
    type   : 'NOT_FOUND',
    message: 'Not found.'
  },
  408: {
    type   : 'REQUEST_TIMEOUT',
    message: 'Request timeout.'
  },
  409: {
    type   : 'CONFLICT',
    message: 'Conflict.'
  },
  422: {
    type   : 'UNPROCESSABLE_ENTITY',
    message: 'Unprocessable entity.'
  }
}

const HTTP_STATUS_CODES = Object.keys(HTTP_STATUS_CODE_DEFINITIONS).reduce(
  (merge, code) => ({
    ...merge,
    [HTTP_STATUS_CODE_DEFINITIONS[code].type]: code
  }),
  {}
)

const ONE_SECOND = 1000
const ONE_MINUTE = 60 * ONE_SECOND
const ONE_HOUR = 60 * ONE_MINUTE
const ONE_DAY = 24 * ONE_HOUR

export {
  METHODS,
  HTTP_STATUS_CODES,
  HTTP_STATUS_CODE_DEFINITIONS,

  ONE_DAY
}
