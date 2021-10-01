const userService = require('../services/user.service')

class UserController {

    getAll(req, res) {
        const users = userService.getAll();

        res.status(200).json(users)
    }

    getById(req, res) {
        const id = +req.params.id;
        const users = userService.getById(id);

        res.status(200).json(users)
    }
}

module.exports = new UserController();