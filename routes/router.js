const express = require('express')
const router = express.Router()

const {indexController, filmerController, aboutUsController, newsEventsController, newMovieController, deleteMovie, getAllMovies} = require('../controller/pages')


router.route('/filmer').get(filmerController).post(newMovieController).delete(deleteMovie)
router.route('/aboutus').get(aboutUsController)
router.route('/').get(indexController)
router.route('/newsevents').get(newsEventsController)
router.route('/filmer/:id').delete(deleteMovie)
router.route('/movies').get(getAllMovies)

module.exports = router