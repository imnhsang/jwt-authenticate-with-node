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

export default UserSchema
