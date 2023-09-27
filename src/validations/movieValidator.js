const {check} = require('express-validator');



module.exports = [
    check('title')
        .notEmpty().withMessage('Nombre de la Pelicula Obligatotio')
        .bail()
        .isLength({
            min : 2,
            max : 30
        }).withMessage('Debe tener ente 2 y 30 caracteres'),
    check('rating')
        .notEmpty().withMessage('Rating de la Pelicula Obligatotio'),
    check('awards')
        .notEmpty().withMessage('Premios de la Pelicula Obligatotio'),
    check('release_date')
        .notEmpty().withMessage('Fecha de la Pelicula Obligatotio'),
    check('length')
        .notEmpty().withMessage('Duracion de la Pelicula Obligatotio')
]