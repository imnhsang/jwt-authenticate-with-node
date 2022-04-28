
import path from 'path'

const root = path.join(__dirname, '../../')

const paths = {
  root,

  src   : path.join(root, 'src'),
  config: path.join(root, 'config'),

  cache      : path.join(root, 'src/cache'),
  utils      : path.join(root, 'src/utils'),
  routes     : path.join(root, 'src/routes'),
  helpers    : path.join(root, 'src/helpers'),
  database   : path.join(root, 'src/database'),
  services   : path.join(root, 'src/services'),
  constants  : path.join(root, 'src/constants'),
  middlewares: path.join(root, 'src/middlewares')
}

export default paths
