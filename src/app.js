const path = require('path')
const express = require('express')
const hbs = require('hbs')
const PORT = 3000
const app = express()
const lookUpMovie = require('./utils/movie.js')
const similarMovies = require('./utils/similarmovies.js')

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(path.join(__dirname, '../public')))

app.get('/',(req,res) => {
    res.render('index',{
        title: "Movies",
        name: "Jennifer Guzman"
    })
})

app.get("/movie", (req, res) => {
    if(!req.query.search) {
        return res.send({error: "You must provide a movie name"});
    }

    lookUpMovie(req.query.search, (error, data) => {
        if(error) {
            res.send({
                error: "Something went wrong"
            })
            return;
        }

        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})
