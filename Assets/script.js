var streamapiUrl = "https://streaming-availability.p.rapidapi.com/search/basic";
var streamapikey = "dcffafa5ebmsh1afad269880e603p159a0fjsn981c2d101bf7";

var reviewsapiUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=9e4bbd2d";
var reviewapikey = "9e4bbd2d";
var searchRatings = document.getElementById("Ratings");

function submit() {
  searchRatings.innerHTML = "";
  console.log("click worked");
  var searchvalue = search.value;
  console.log(searchvalue);

  var searchUrl = `https://www.omdbapi.com/?t=${searchvalue}&apikey=${reviewapikey}`;
  fetch(searchUrl)
    .then((response) => response.json())
    .then((response) => response)
    .then((response) => {
      var searchTitle = document.getElementById("results");
      searchTitle.textContent = response.Title + " (" + response.Year + ")";
      var results = response.Ratings;
      for (var i = 0; i < results.length; i++) {
        var ratingList = document.createElement("li");
        ratingList.textContent = results[i].Source + " : " + results[i].Value;
        searchRatings.appendChild(ratingList);
      }

      console.log(response);
      console.log(response.Title);
      console.log(response.Ratings);

      fetch(
        `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${searchvalue}&country=us&type=movie&output_language=en`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          console.log(response.result[0].streamingInfo.us);
          var Streaming = response.result[0].streamingInfo.us;
          for (var i = 0; i < Streaming.length; i++) {
            var streamingList = document.createElement("li");
            streamingList.textContent = Streaming[i];
          }
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => err);
}

var btnSearch = document.getElementById("btnSearch");
// var results = document.getElementById("results");
var search = document.getElementById("mediaSearch");
// var reviews = document.getElementById("reviews");
// var genre = ''

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dcffafa5ebmsh1afad269880e603p159a0fjsn981c2d101bf7",
    "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  },
};

btnSearch.addEventListener("click", submit);
