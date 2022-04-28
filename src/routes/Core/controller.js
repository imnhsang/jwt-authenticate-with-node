import bcrypt from 'bcrypt'

import { User } from '@/database/models'

import APIError from '@/utils/api-error'

import { HTTP_STATUS_CODES } from '@/constants'

export const signUp = async (req, res, next) => {
  try {
    const { ...info } = req.body

    const conditions = {
      email: info?.email
    }

    const isExist = !!await User.findOne(conditions)
    if (isExist) {
      throw new APIError('The email is exist.', HTTP_STATUS_CODES.CONFLICT)
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(info?.password, salt)

    const user = new User({
      ...info,
      password: hashedPassword
    })

    user.save()

    return res.json({
      code   : 200,
      type   : 'OK',
      message: 'Signup successfully!'
    })
  } catch (error) {
    return next(error)
  }
}

export const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body
    console.log('🚀 ~ file: controller.js ~ line 4 ~ login ~ email, password', email, password)

    const jwtToken = 'jwtToken'

    return res.json(jwtToken)
  } catch (error) {
    return next(error)
  }
}

export const logOut = async (req, res, next) => {
  try {
    return res.json({
      code   : 200,
      type   : 'OK',
      message: 'Logout successfully.'
    })
  } catch (error) {
    return next(error)
  }
}
