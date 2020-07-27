
const error = (err, req, res, next) => {
    let statusCode = 500
    let message = err
    if (err.name === `SequelizeValidationError`) {
        message = err.errors.map(e => e.message)
        statusCode = 400
    } else if (err.name === `otherError`) {
        message = err.message
        statusCode = err.statusCode
    } else if (err.name === `JsonWebTokenError`) {
        message = `Plese login first!`
        statusCode = 401
    }
    return res.status(statusCode).json({message})
}

module.exports = error