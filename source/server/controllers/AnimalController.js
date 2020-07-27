const {Animal} = require(`../models`)

class AnimalController {
    
    static read(req, res, next) {
        Animal.findAll()
        .then((result) => {
            res.status(200).json({animals: result})
        })
        .catch((err) => {
            next(err)
        })
    }
}

module.exports = AnimalController