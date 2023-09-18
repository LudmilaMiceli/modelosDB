const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        return res.render('moviesList', {
            movies : []
        })
    },
    new : (req,res) => {
        return  res.send('Películas de estreno')
    },
    recomended : (req, res) => {
        return res.send('Películas recomendadas')
    },
    detail : (req,res) => {
        return res.send ('Detalle de la película')
    }
}