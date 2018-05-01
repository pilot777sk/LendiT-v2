const db = require ('../models')

module.exports = {
  allItems: function(req, res){
    db.Item
      .find(req.query)
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
  },
  createItem: function(req, res){
    console.log(req.body);
    const item = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image
    }
    db.Item.create(item).then(function(dbItem){
      res.json(dbItem)
    })
  },
  findById: function(req, res) {
    db.Item
      .findById(req.params.id)
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
    db.Item
      .find({name: req.body.name})
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
  }
}
