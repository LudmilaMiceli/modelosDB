const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Genre.findAll({
            order : [
                ['name', 'ASC']
            ]
        })
        .then(genres => {
            return res.render('genresList')
        })
        .catch(error =>
            console.log('Ups! Ha ocurrido un error', error)
        )
    },
    detail : (req,res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => res.render('genresDetail', {genre}))
            .catch(error =>
                console.log('Ups! Ha ocurrido un error', error)
            )
    }
}