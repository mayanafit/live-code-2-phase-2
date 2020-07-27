const {User} = require(`../models`)
const {comparePass} = require(`../helpers/bcrypt`)
const {encode} = require(`../helpers/jwt`)

class UserController {
    
    static register(req, res, next) {
        let {name, email, password} = req.body

        User.create({name, email, password})
        .then((result) => {
            let {id, email} = result
            res.status(201).json({id, email})
        })
        .catch((err) => {
            next(err)
        })
    }

    static login(req, res, next) {
        let {email, password} = req.body
        const error = {
            name: `otherError`,
            statusCode: 400,
            message: `Invalid Email or Password!`
        }
        User.findOne({where: {email}})
        .then((result) => {
            if (result && comparePass(password, result.password)) {
                let access_token = encode({
                    id: result.id,
                    name: result.name,
                    email: result.email
                })
                res.status(200).json({access_token, email: result.email, id: result.id})
            } else {
                throw error
            }
        })
        .catch((err) => {
            next(err)
        })
    }
}

module.exports = UserController