const {Favorite, Animal} = require(`../models`)

class FavoriteController {

    static read(req, res, next) {
        let UserId = req.user.id 
        Favorite.findAll({where: {UserId}, include: [`Animal`]})
        .then((result) => {
            res.status(200).json({favorites: result})
        })
        .catch((err) => {
            next(err)
        })
    }

    static add(req, res, next) {
        let newFavorite = {
            AnimalId: req.params.id,
            UserId: req.user.id
        }

        Favorite.create(newFavorite)
        .then((result) => {
            res.status(201).json({favorite: result})
        })
        .catch((err) => {
            next(err)
        })
    }
}

module.exports = FavoriteController