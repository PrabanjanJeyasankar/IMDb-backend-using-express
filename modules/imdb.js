const mongoose = require('mongoose')

const imbdmovieModel = new mongoose.Schema({
    title:{
        type : String,
        require: true,
        
        unique:true
    },
    year: {
        type: Number,
        required: true

    },
    language: {
        type: String,
        required: true
    }
    // genre: {
    //     type: [String], 
    //     required: true
    // },
    // director: {
    //     type: String,
    //     required: true
    //                 },
    // imdbId: {
    //     type: String,
    //     required: true
    // },

})

    module.exports = mongoose.model('IMDbMovieList',imbdmovieModel)