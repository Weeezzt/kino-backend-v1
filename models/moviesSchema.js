const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    director: {
        type:String,
        required:false
    },
    actors:  {
        type:[String],
        required:false
    },
    description: {
        type:String,
        required:false
    },
    genre:  {
        type:[String],
        required:false
    },
    poster:  {
        type:String,
        required:true
    },
    kid: {
        type:Boolean,
        required: false
    },
    new: {
        type: Boolean,
        required: false
    },
    release_year: {
        type: Number,
        required: false
    },
    rating: {
        type: Number,
        required: true,
        default: 3.5
    },
    premiere: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Movies', movieSchema)