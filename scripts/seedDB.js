const mongoose = require ('mongoose')
const db = require ('../models')
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lendit");

const itemSeed = [
  {
    name: 'Ladder',
    price: '$10',
    description: '10 foot fiberglass like new',
    image: 'image'
  },

  {
    name: 'Saw',
    price: '$10',
    description: '8 inch blade',
    image: 'image'
  }
]

db.Item 
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(function(data){
    process.exit(0)
  })