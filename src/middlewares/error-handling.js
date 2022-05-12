import APIError from '@/utils/api-error'

import { HTTP_STATUS_CODES } from '@/utils/constants'

// eslint-disable-next-line no-unused-vars
const handler = (error, req, res, next) => res.status(error.code).json(error.toObject())

const converter = (error, req, res, next) => {
  let parsedError = error

  if (!(error instanceof APIError)) {
    parsedError = new APIError(
      error.message,
      HTTP_STATUS_CODES.BAD_REQUEST,
      undefined,
      error.stack
    )
  }

  return handler(parsedError, req, res, next)
}

const notFound = (req, res, next) => {
  const apiError = new APIError(
    `Unknown path components: ${req.originalUrl}`,
    HTTP_STATUS_CODES.NOT_FOUND
  )

  return handler(apiError, req, res, next)
}

const load = (app) => {
  app.use(converter)

  app.use(notFound)

  app.use(handler)
}

export default load
