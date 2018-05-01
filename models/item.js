const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
  name: String,
  price: String,
  description: String,
  image: String,
  owner: String,
  location: String,
  email: String,
  phone: String
  
})

const Item = mongoose.model('Item',itemSchema)

module.exports = Item