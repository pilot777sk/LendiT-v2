const router = require ('express').Router() 
const usersController = require('../../controllers/users-controller')

router.route('/allUsers')
  .get(usersController.allUsers)

router.route('/createUser')
  .post(usersController.createUser)


module.exports = router