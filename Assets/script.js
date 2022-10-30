
var streamapiUrl =
    'https://streaming-availability.p.rapidapi.com/search/basic'
var streamapikey = 'dcffafa5ebmsh1afad269880e603p159a0fjsn981c2d101bf7'

var reviewsapiUrl =
    'https://www.omdbapi.com/?i=tt3896198&apikey=9e4bbd2d'
var imgapiURL = 'http://img.omdbapi.com/?apikey=9e4bbd2d'
var reviewapikey = '9e4bbd2d'


function submit() {
    console.log('click worked')
    var searchvalue = search.value
    console.log(searchvalue)
    var searchUrl = `https://www.omdbapi.com/?t=${searchvalue}&apikey=${reviewapikey}`
    fetch(searchUrl)
    .then(response => response.json())
    .then(response => response)
    .then(response =>{ 
    console.log(response)
    var garray = response.Genre.split(',')

    fetch(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${searchvalue}&country=us&type=movie&output_language=en`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
})
.catch(err => err)


    

}


var btnSearch = document.getElementById("btnSearch");
var results = document.getElementById("results");
var search  = document.getElementById("mediaSearch");
var reviews = document.getElementById("reviews");
var genre = ''

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dcffafa5ebmsh1afad269880e603p159a0fjsn981c2d101bf7',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
};
fetch('https://streaming-availability.p.rapidapi.com/search/pro?country=us&service=netflix&type=movie&order_by=original_title&year_min=2000&year_max=2020&genre=18&page=1&desc=true&language=en&output_language=en', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
// fetch (apiUrl)
// .then(function(resp){
//     if (resp.ok){
//         return resp.json();
//     }
// })
// .then(function(data) {
//     if (!data) {
//         return
//     }
//     var{ results} = data
//     for(var i= 0; i < results.length; i++){

//     }
// })

fetch('https://www.omdbapi.com/?i=tt3896198&apikey=9e4bbd2d')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
    btnSearch.addEventListener('click', submit)
=======
var apiUrl =
    'https://streaming-availability.p.rapidapi.com/search/basic'
apikey = 'dcffafa5ebmsh1afad269880e603p159a0fjsn981c2d101bf7'

var apiUrl =
    'https://www.omdbapi.com/?i=tt3896198&apikey=9e4bbd2d'

var main = document.getElementById("content");
var search = document.getElementById("Search");
var getMovies = document.getElementById("movie")

function getMovies() {
    var apiUrl = 'https://streaming-availability.p.rapidapi.com/search/basic'
    fetch(apiUrl)

        .then(function (resp) {
            if (resp.ok) {
                return resp.json();
            }

        }

            .then(function (data) {
                if (!data) {
                    return
                }

                var { results } = data

                for (var i = 0; i < results.length; i++) {
                    var searchButton = document.createElement
                        ('button')
                    searchButton.classList.add('nes-btn')
                    searchButton.setAttribute('data-type', results[i].name)
                    searchButton.textContent = results[i].name

                    types.appendChild(searchButton)
                }
            }
}

function typeSearch(e) {

    if (e.target.nodeName !== 'BUTTON') {
        return

    }

    var term = e.target.dataset.type
    var apiUrl = 'https://streaming-availability.p.rapidapi.com/search/basic' + term

    fetch(apiUrl)
        .then(function (resp) {
            if (resp.ok) (
                getMovies.innerHTML = ''
                return resp.json()
            )
}
        .then(function (data) {
    if (!data) {
        return
    }

    var { movie } = data

    for (var i = 0; i < movie.length; i++) {
        var movieItem = document.createElement('li')
        var movieLink = document.createElement('a')

        movieLink.setAttribute('href', 'movie.html?name=' + movie[i].movie.name)

        movieLink.textContent = movie[i].movie.name
        movieItem.appendChild(movieLink)
        movie.appendChild(movieItem)
    }
}

form.addEventListener('btn-search', searchHandler)

getMovies()

()

