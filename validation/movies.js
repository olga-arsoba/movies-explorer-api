const { celebrate, Joi } = require('celebrate');

module.exports.createMovieSchema = celebrate({
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
    movieId: Joi.number().required(),
  }),
});

module.exports.deleteMovieSchema = celebrate({
  params: {
    movieId: Joi.string().hex().length(24).required(),
  },
});
