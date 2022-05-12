import Joi from 'joi'

export const signUp = {
  body: Joi.object({
    email   : Joi.string().email().required(),
    password: Joi.string().required(),
    fullName: Joi.string().required()
  })
}

export const logIn = {
  body: Joi.object({
    email   : Joi.string().email().required(),
    password: Joi.string().required()
  })
}

