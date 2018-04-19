
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  phoneNumber: String,
  password: String,
  postItems: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
  },
  rentItems: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
  }
})

const User = mongoose.model('User',userSchema)

module.exports = User