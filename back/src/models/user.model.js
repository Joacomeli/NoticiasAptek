'use strict'
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const httpStatus = require('http-status')
const APIError = require('../utils/APIError')
const config = require('../config')
const Schema = mongoose.Schema
const uuidv1 = require('uuid/v1')
const mongoosePaginate = require('mongoose-paginate-v2')


const roles = ['user', 'admin']

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: false,
      unique: false,
      lowercase: true,
      sparse: false
    },
    password: {
      type: String,
      required: false,
      minlength: 4,
      maxlength: 128
    },
    name: {
      type: String
    },
    role: {
      type: String,
      default: 'user',
      enum: roles
    },
  },
  {
    timestamps: true
  }
)

userSchema.pre('save', async function save(next) {
  try {
    if (!this.isModified('password')) {
      return next()
    }

    this.password = bcrypt.hashSync(this.password)

    return next()
  } catch (error) {
    return next(error)
  }
})

userSchema.method({
  transform() {
    const transformed = {}
    const fields = [
      'id',
      'name',
      'role',
      'email',
    ]

    fields.forEach((field) => {
      transformed[field] = this[field]
    })

    return transformed
  },

  passwordMatches(password) {
    return bcrypt.compareSync(password, this.password)
  }
})

userSchema.statics = {

  async findAndGenerateTokenMail(payload) {
    const { email, password} = payload
    console.log(payload)
    if (!email || !password) {
      throw new APIError(
        'Email o contraseña no pueden estar vacios',
      )
    }
    var user
    if (email) {
      user = await this.findOne({ email }).exec()
      if (!user) {
        throw new APIError(
          `Usuario no ascociado a ${email}`,
          httpStatus.NOT_FOUND
        )
      }

      const passwordOK = await user.passwordMatches(password)

      if (!passwordOK) { throw new APIError(`Contraseña incorrecta`, httpStatus.UNAUTHORIZED) }

      return user
    } 
    if (!user) { throw new APIError(`Usuario no encontrado`, httpStatus.NOT_FOUND) }

    return user
  },
}
userSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', userSchema);