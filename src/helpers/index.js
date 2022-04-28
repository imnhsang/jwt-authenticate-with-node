
const resolveModule = (path) => {
  /* eslint-disable import/no-dynamic-require */
  /* eslint-disable global-require */
  const module = require(path)
  return (module && module.default) || module
}

export default {
  resolveModule

}
