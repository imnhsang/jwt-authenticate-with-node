
import { METHODS } from '@/utils/constants'

import * as controller from './controller'

export default [
  {
    method: METHODS.GET,
    path  : '/users/me',

    controller: controller.getMe,
    authOpts  : { mode: 'required' }
  }
]
