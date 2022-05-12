import bcrypt from 'bcrypt'
import { Schema } from 'mongoose'

const definition = {
  fullName: {
    type   : String,
    require: true
  },
  email: {
    type   : String,
    require: true,
    unique : true
  },
  password: {
    type   : String,
    require: true
  }
}
const options = {
  timestamps: true,
  collection: 'users',
  toObject  : { virtuals: true },
  toJSON    : { virtuals: true }
}

const UserSchema = new Schema(definition, options)

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
  }

  return next()
})

UserSchema.methods.isValidPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

export default UserSchema
