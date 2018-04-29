const router = require ('express').Router() 
const itemsController = require('../../controllers/items-controller')

router.route('/allItems')
  .get(itemsController.allItems)

router.route('/createItem')
  .post(itemsController.createItem)

router.route('/:id')
  .get(itemsController.findById)
  
router.route('/search')
  .post(itemsController.search)  


module.exports = router