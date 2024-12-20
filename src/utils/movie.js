const request = require('request');


 function lookUpMovie(movieName,callback){
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}&a82e00f040aac70ac013c269d87afcae&include_adult=false&language=en-US&page=1&api_key=a82e00f040aac70ac013c269d87afcae`;
    const options = {
        url,
        json: true,
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODJlMDBmMDQwYWFjNzBhYzAxM2MyNjlkODdhZmNhZSIsIm5iZiI6MTczNDYyMDI2OC4wNDgsInN1YiI6IjY3NjQzNDZjOTQxOTZhYWVkMjAwMGIyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dGWgauV8IYsm_p9xw4x14D4rjC9NW0iiVukZEn1ZlD8'
    }
    };

    request({url, json:true }, (error, response) => {
        if (error) {
            callback('unable to connect to location services!',undefined)
        } else if (response.statusCode !== 200){
            callback('unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                id: response.body.results
            })
        }
    })
};

lookUpMovie('shrek', (error, data) => {
    if(error) {
        return console.log(error)
    }

    console.log(data)
})

module.exports = lookUpMovie;