const router = require ('express').Router()
const usersRoutes = require ('./users')
const itemsRoutes = require ('./items')

router.use('/users',usersRoutes)
router.use('/items',itemsRoutes)

module.exports = router