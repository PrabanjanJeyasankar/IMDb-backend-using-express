const express = require('express')
const router = express('router')

const {getAMovieDetail,postAMovieDetail,findAMovie, getMovieById} = require('../controllers/imdb')

router.route('/').get(getAMovieDetail).post(postAMovieDetail)
router.route('/:id').get(findAMovie,getMovieById)

module.exports = router