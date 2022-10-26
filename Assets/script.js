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