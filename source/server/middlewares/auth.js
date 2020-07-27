const {User, Animal, Favorite} = require(`../models`)
const {decode} = require(`../helpers/jwt`)

const authentication = (req, res, next) => {
    const access_token = req.headers.access_token
    req.user = decode(access_token)

    User.findByPk(req.user.id)
    .then((result) => {
        if(result) {
            next()
        }
    })
    .catch((err) => {
        next(err)
    })
}

module.exports = authentication