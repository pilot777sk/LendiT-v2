const db = require ('../models')


module.exports = {
  allUsers: function(req, res){
    db.User.find({}).then(function (dbUser){
      res.json(dbUser)
    })
  },
  createUser: function (req, res){
    console.log(req.body)
  }
}