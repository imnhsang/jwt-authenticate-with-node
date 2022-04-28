import { HTTP_STATUS_CODE_DEFINITIONS, HTTP_STATUS_CODES } from '@/constants'

class APIError extends Error {
  constructor(message, code, details, stack) {
    super(message)

    this.name = this.constructor.name

    this.type = HTTP_STATUS_CODE_DEFINITIONS[code].type
    this.code = code || HTTP_STATUS_CODES.BAD_REQUEST
    this.message = message || HTTP_STATUS_CODE_DEFINITIONS[code].message

    this.details = details
    this.stack = stack
  }

  /** Converts apiError to a plain object */
  toObject() {
    const fields = ['type', 'code', 'message', 'details', 'stack']

    if (process.env.NODE_ENV !== 'production') {
      fields.push('stack')
    }

    return Object.fromEntries(fields.map((field) => [field, this[field]]))
  }
}

export default APIError
