const {Favorite} = require(`../models`)

class FavoriteController {

    static read(req, res, next) {
        let UserId = req.user.id 
        const error = {
            name: `otherError`,
            statusCode: 404,
            message: `Sorry can't find data.`
        }
        Favorite.findAll({where: {UserId}, include: [`Animal`, `User`]})
        .then((result) => {
            if (result) {
                res.status(200).json({favorites: result})
            } else {
                throw error
            }
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

    static delete(req, res, next) {
        let AnimalId = req.params.id
        let UserId = req.user.id
        const error = {
            name: `otherError`,
            statusCode: 404,
            message: `Sorry can't find data.`
        }

        Favorite.destroy({where: {UserId, AnimalId}})
        .then((result) => {
            if (result == 0) {
                throw error
            } else {
                res.status(200).json({message: `Successfully delete favorite animal!`})
            }
        })
        .catch((err) => {
            next(err)
        })
    }
}

module.exports = FavoriteController