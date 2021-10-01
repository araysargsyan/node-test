const Router = require( 'express' );
const router = new Router();
const userController = require('../controllers/user.controller')

// api/user prefix
router.get('/', userController.getAll)
router.get('/:id', userController.getById)

module.exports = router;