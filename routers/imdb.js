const express = require('express')
const router = express('router')

const {getAMovieDetail,postAMovieDetail,findAMovie, getMovieById,PatchAMovieDetail,deleteAMovie} = require('../controllers/imdb')

router.route('/').get(getAMovieDetail).post(postAMovieDetail)
router.route('/:id').get(findAMovie,getMovieById).patch(findAMovie,PatchAMovieDetail).delete(findAMovie,deleteAMovie)

module.exports = router