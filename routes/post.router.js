const Router = require( 'express' );
const router = new Router();

router.get('/', function (req, res) {
    res.json({a: 'hello post'})
})

router.post('/', function (req, res) {
    res.status(400).json(req.body)
})

module.exports = router;