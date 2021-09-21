const router = require('express').Router();
const {
  listMovies, createMovie, deleteMovie,
} = require('../controllers/movies');
const { createMovieSchema, deleteMovieSchema } = require('../validation/movies');

router.get('/', listMovies);

router.post('/', createMovieSchema, createMovie);
router.delete('/:movieId', deleteMovieSchema, deleteMovie);

module.exports = router;
