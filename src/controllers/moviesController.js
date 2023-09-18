const db = require('../database/models')

module.exports = {
    list: (req, res) => {
        return res.render('moviesList', {
            movies: []
        })
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        })
            .then(movies => {
                return res.render('newestMovies', {
                    movies
                })
            })
            .catch(error =>
                console.log('Ups! Ha ocurrido un error', error)
            )
        return res.send('Películas de estreno')
    },
    recommended: (req, res) => {
        db.Movie.findAll({
            limit: 5,
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                return res.render('recommendedMovies'), {
                    movies
                }
            })
            .catch(error =>
                console.log('Ups! Ha ocurrido un error', error)
            )
    },

    detail: (req, res) => {
        const { id } = req.params;
        db.Movie.findByPk(id)
            .then(movie => {
                return res.render('moviesDetail', {
                    movie
                })
                    .catch(error =>
                        console.log('Ups! Ha ocurrido un error', error)
                    )
            })
    }
}