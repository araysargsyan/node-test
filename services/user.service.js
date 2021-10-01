class UserService {
    db = [
        {
            id: 1,
            name: 'gago',
            age: 11
        },
        {
            id: 2,
            name: 'hrach',
            age: 22
        }
    ]
    constructor() {
        this.getAll = this.getAll.bind(this)
        this.getById = this.getById.bind(this)
    }

    getAll() {
        const users = this.db;

        return users
    }

    getById(id) {
        const user = this.db.filter((user) => id === user.id);

        return user;
    }
}

module.exports = new UserService();