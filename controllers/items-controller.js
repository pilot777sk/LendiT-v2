const db = require ('../models')





module.exports = {
  allItems: function(req, res){
    db.Item.find({}).then(function (dbItem){
      res.json(dbItem)
    })
  },
  createItem: function(req, res){
    console.log(req.body)
    // const item = {
    //   name: req.body.name,
    //   price: req.body.price,
    //   description: req.body.description,
    //   image: req.body.image
    // }
    // db.Item.create(item).then(function(dbItem){
    //   res.json(dbItem)
    // })
  }
}