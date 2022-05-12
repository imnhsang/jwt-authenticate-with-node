
const resolveModule = (path) => {
  /* eslint-disable import/no-dynamic-require */
  /* eslint-disable global-require */
  const module = require(path)
  return (module && module.default) || module
}

const getTag = (value) => {
  if (value === null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

const isObjectLike = (value) => typeof value === 'object' && value !== null

const isPlainObject = (value) => {
  if (!isObjectLike(value) || getTag(value) !== '[object Object]') {
    return false
  }
  if (Object.getPrototypeOf(value) === null) {
    return true
  }
  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto
}

export {
  resolveModule,
  isPlainObject
}
