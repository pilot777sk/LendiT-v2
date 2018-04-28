const router = require ('express').Router() 
const itemsController = require('../../controllers/items-controller')

router.route('/allItems')
  .get(itemsController.allItems)

router.route('/createItem')
  .post(itemsController.createItem)


module.exports = router