import { User } from '@/database/models'

import AuthService from '@/services/auth'

import APIError from '@/utils/api-error'

import { HTTP_STATUS_CODES } from '@/utils/constants'

export const signUp = async (req, res, next) => {
  try {
    const { ...infos } = req.body

    const conditions = {
      email: infos?.email
    }

    const isExist = !!await User.findOne(conditions)
    if (isExist) {
      throw new APIError('The email is exist.', HTTP_STATUS_CODES.CONFLICT)
    }

    const user = new User(infos)

    await user.save()

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

    const conditions = {
      email
    }

    const user = await User.findOne(conditions)
    if (!user) {
      throw new APIError('The user is not exist.', HTTP_STATUS_CODES.BAD_REQUEST)
    }

    if (!user?.isValidPassword(password)) {
      throw new APIError('The password is not valid.')
    }

    const { header, payload, signature } = await AuthService.generateCredential(user?.id)

    res.cookie('access_token', signature, { httpOnly: true })

    return res.json(`${header}.${payload}`)
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
