
import { METHODS } from '@/utils/constants'

import * as controller from './controller'
import * as validation from './validation'

export default [{
  method: METHODS.POST,
  path  : '/signup',

  controller: controller.signUp,
  validation: validation.signUp
}, {
  method: METHODS.POST,
  path  : '/login',

  controller: controller.logIn,
  validation: validation.logIn
},
{
  method: METHODS.POST,
  path  : '/logout',

  controller: controller.logOut
}]
