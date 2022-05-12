
import path from 'path'

const root = path.join(__dirname, '../../')

const paths = {
  root,

  src   : path.join(root, 'src'),
  config: path.join(root, 'config'),

  utils      : path.join(root, 'src/utils'),
  routes     : path.join(root, 'src/routes'),
  database   : path.join(root, 'src/database'),
  services   : path.join(root, 'src/services'),
  middlewares: path.join(root, 'src/middlewares')
}

export default paths
