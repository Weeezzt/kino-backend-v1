const fs = require('fs/promises')
const Movies = require('../models/moviesSchema')

const readHtmlFile = async (fileName) => {
    try {
        const buf = await fs.readFile(fileName)
        return buf.toString()
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


const indexController = async (req, res) => {
    try {
        const html = await readHtmlFile('index.html')
        res.status(200).send(html)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movies.find({})
        res.status(200).json({movies})
    }catch (error) {
        res.status(500).json({msg:error.message})
    }
   
}

const filmerController = async (req, res) => {
    try{
        const html = await readHtmlFile('filmer.html')
        res.status(200).send(html)
    }catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const aboutUsController = async (req, res) => {
    try {
        const html = await readHtmlFile('aboutUs.html')
        res.status(200).send(html)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const newsEventsController = async (req, res) => {
    try {
        const html = await readHtmlFile('newsEvents.html')
        res.status(200).send(html)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const newMovieController = async (req, res) => {
    try {
        console.log(req.body)
        const movie = await Movies.create(req.body)
        res.status(200).json({movie})
    }catch(error) {
        res.status(500).json({msg:error.message})
    }
}

const deleteMovie = async (req, res, next) => {
    try {
        const {id: movieID} = req.params
        const movie = await Movies.findOneAndDelete({_id: movieID})
        if(!movie) {
            return res.status(404).json({msg:"Cant find any movie with that id"})
        }
        res.status(200).json({deleted:movie})

    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


module.exports = {
    indexController,
    newsEventsController,
    filmerController,
    aboutUsController,
    newMovieController,
    deleteMovie,
    getAllMovies
}