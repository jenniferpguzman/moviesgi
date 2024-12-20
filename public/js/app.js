const movieForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const movieElement = document.querySelector('#movies')
const result = document.querySelector(".result")

movieForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const movieSearch = search.value;
    // const movies = moviesElement.value;

    messageOne.textContent = "Loading...";
    messageTwo.innerHTML = '';

    fetch(`/movie?search=${movieSearch}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            result.innerHTML = ""
            data.id.forEach(movie => {
                result.innerHTML += `
                <p>${movie.title}</p>
                `
            })
        })



    // fetch('/movie?search=' + movieSearch).then((response) => {
    //     response.json().then((data) => {
    //         if(data.error){
    //             messageOne.textContent = data.error
    //         } else{
    //             messageOne.textContent = "Movies found:";
    //             messageTwo.innerHTML = '';
    //             if(data.length === 0){
    //                 messageTwo.textContent = "No movies found.";
    //             } else{
    //             data.forEach(movie => {
    //                 const movieItem = document.createElement('p');
    //                 movieItem.textContent = movie.title;
    //                 messageTwo.appendChild(movieItem);
    //             });
    //         }
    //         }
    //     });
    // });
});