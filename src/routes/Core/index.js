
import { METHODS } from '@/constants'

import * as controller from './controller'

export default [{
  method: METHODS.POST,
  path  : '/signup',

  controller: controller.signUp
}, {
  method: METHODS.POST,
  path  : '/login',

  controller: controller.logIn
},
{
  method: METHODS.POST,
  path  : '/logout',

  controller: controller.logOut
}]
