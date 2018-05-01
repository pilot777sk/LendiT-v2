const router = require ('express').Router()
const usersRoutes = require ('./users')
const itemsRoutes = require ('./items')
const authRoutes = require ('./auth')

router.use('/users',usersRoutes)
router.use('/items',itemsRoutes)
router.use('/auth',authRoutes)

module.exports = router