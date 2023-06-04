require('dotenv').config()
const express = require("express")
const app = express()
const PORT =  3500                           
const imdbRouter = require('./routers/imdb')
const mongoose =  require('mongoose')

app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage)=>console.log(errorMessage))
db.once('open',()=>console.log("Connection Established"))

app.get('/', (request,response)=>{
    response.status(200).send("This is App.js")
})

app.use('/api/v1/imdbmovies', imdbRouter)

app.listen(PORT)
console.log(`IMDb Movie List http://localhost:${PORT}`)