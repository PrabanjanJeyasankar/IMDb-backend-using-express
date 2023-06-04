const imbdmovieModel = require('../modules/imdb');
const { response } = require('../routers/imdb');

const getAMovieDetail = async (request,response)=>{
    const movieDetails = await imbdmovieModel.find();
    try{
        response.status(200).json(movieDetails)
    }
    catch{
        response.status(500).json({message:errorMessage});
    }
}

const postAMovieDetail = async (request, response)=>{
    const newmovie = new imbdmovieModel({
        title:request.body.title,
        year:request.body.year,
        language:request.body.language
    })
    try{
        const movie = await newmovie.save();
        response.status(200).json(movie);
    }
    catch(errorMessage){
        response.status(500).json({message:errorMessage});
    }
} 

const getMovieById = async  (request, response)=>{
    response.status(200).json(response.movie)
}

async function findAMovie(request,response,next){
    let movie 
    try{
        movie = await imbdmovieModel.findById(request.params.id)
        if(movie === null){
            response.status(200).json({message : `Cannot find user with Id: ${request.params.id}`})
        }
    }
    catch(error){
        return response.status(500).json({message: error.message})
    }
    response.movie = movie;
    next()
}
module.exports = {getAMovieDetail,postAMovieDetail,findAMovie,getMovieById}