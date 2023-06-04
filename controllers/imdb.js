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
const PatchAMovieDetail = async(request, response)=>{
    if(request.body.title != null)
    {
        response.movie.title = request.body.title;
    }
    if(request.body.year != null)
    {
        response.movie.title = request.body.year;
    }
    if(request.body.language != null)
    {
        response.movie.title = request.body.language;
    }
    try{
        const updatedAMovie = await response.movie.save();
        response.status(200).json(updatedAMovie);
    }
    catch(error){
        return response.status(400).json({message: error.message})
    }
}
const getMovieById = async  (request, response)=>{
    response.status(200).json(response.movie)
}

const deleteAMovie = async (request,response)=>{
    try{
        await response.movie.deleteOne();
        response.json({message: `Deleted the user ${response.movie.id}`})
    }
    catch(error){
        return response.status(500).json({message: error.message})
    }
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
module.exports = {getAMovieDetail,postAMovieDetail,findAMovie,getMovieById,PatchAMovieDetail,deleteAMovie}