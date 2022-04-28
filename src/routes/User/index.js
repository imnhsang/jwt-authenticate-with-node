
import { METHODS } from '@/constants'

import * as controller from './controller'

export default [
  {
    method: METHODS.GET,
    path  : '/users/me',

    controller: controller.getMe
  }
]
