require('dotenv').config()

const connectDb = require('./db/connect')

const Movie = require('./models/moviesSchema')

const jsonMovie = require('./public/movies.json')

const start = async ( ) => {
    try {
        await connectDb(process.env.MONGO_URI)
        await Movie.deleteMany()
        await Movie.create(jsonMovie)
        console.log('Created movies succesfully')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()