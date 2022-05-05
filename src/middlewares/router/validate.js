
import Joi from 'joi'

import APIError from '@/utils/api-error'
import { isPlainObject } from '@/utils/helpers'

import { HTTP_STATUS_CODES } from '@/utils/constants'

const validate = (schema) => (req, res, next) => {
  const defaultSchema = {
    body  : Joi.object().keys({}),
    query : Joi.object().keys({}),
    params: Joi.object().keys({})
  }
  const joiSchema = Joi.object().keys({ ...defaultSchema, ...schema })

  const payloads = Object.fromEntries(['body', 'query', 'params'].map((param) => [param, req[param]]))
  const { value, error } = joiSchema.validate(payloads, {
    debug     : true,
    abortEarly: false
  })

  if (error) {
    const errors = error.details.map((detail) => detail.message)

    const apiError = new APIError(errors[0], HTTP_STATUS_CODES.BAD_REQUEST)
    return next(apiError)
  }

  if (isPlainObject(value)) {
    Object.assign(req, value)
  }

  return next()
}

export default validate
