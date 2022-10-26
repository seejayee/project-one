var apiUrl = 
'https://streaming-availability.p.rapidapi.com/search/basic'
apikey = 'dcffafa5ebmsh1afad269880e603p159a0fjsn981c2d101bf7'

var apiUrl = 
'https://www.omdbapi.com/?i=tt3896198&apikey=9e4bbd2d'

var main = document.getElementById("content");
var search = document.getElementById("Search");

function getMovies(){
    var apiUrl = 'https://streaming-availability.p.rapidapi.com/search/basic'
    fetch (apiUrl)
    .then(function(resp){
        if (resp.ok){
            return resp.json();
        }
    }
}

