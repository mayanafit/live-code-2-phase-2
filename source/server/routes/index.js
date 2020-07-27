const router = require(`express`).Router()
const UserController = require(`../controllers/UserController`)
const AnimalController = require(`../controllers/AnimalController`)
const FavoriteController = require(`../controllers/FavoriteController`)
const authentication = require(`../middlewares/auth`)

router.post(`/register`, UserController.register)
router.post(`/login`, UserController.login)
router.use(authentication)
router.get(`/animals`, AnimalController.read)
router.get(`/favorites`, FavoriteController.read)
router.post(`/favorites/:id`, FavoriteController.add)

module.exports = router