const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  listMovies, createMovie, deleteMovie,
} = require('../controllers/movies');

router.get('/', listMovies);

router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
    trailer: Joi.string().uri().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().uri().required(),
    movieId: Joi.string().required(),
  }),
}), createMovie);

router.delete('/:movieId', celebrate({
  params: {
    movieId: Joi.string().hex().length(24).required(),
  },
}), deleteMovie);

module.exports = router;
