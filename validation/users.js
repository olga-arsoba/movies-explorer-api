const { celebrate, Joi } = require('celebrate');

module.exports.updateProfileSchema = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

module.exports.createUserSchema = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email().required(),
    password: Joi.string().required().min(8),
  }),
});

module.exports.loginSchema = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  }),
});
