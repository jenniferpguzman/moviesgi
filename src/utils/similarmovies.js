// const { response } = require('express')
// const request = require('request')

// const similarMovies = (movieId ,callback) => {
//     const url = `https://api.themoviedb.org/3/movie/${encodeURIComponent(movieId)}/similar?a82e00f040aac70ac013c269d87afcae&include_adult=false&language=en-US&page=1&api_key=a82e00f040aac70ac013c269d87afcae`

//     request({ url, json: true}, (error ,{ body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.status_message){
//             callback('unable to find location',undefined)
//         } else {
//             let movies = [];
//             for(let i = 0; i < 3; i++){
//                 movies.push({title:body.results[i].title})

//             }

//             callback(undefined, movies)
//         }
//     })
// }

// similarMovies(808, (error, titles) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(titles)
//         titles.forEach((title, index) => { // Corrected to forEach
//             console.log(`${index + 1}: ${title.title}`);
//         });
//     }
// });

// module.exports = similarMovies