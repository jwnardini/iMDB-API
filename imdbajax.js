
// $("#movie").on("click", function()  {
  var url = 'http://www.omdbapi.com/?t=' + prompt("Movie?") + '&y=&plot=short&r=json';
  $.getJSON(
  url,
  function(data){
      $(".movie-list").append('<img src="' + data.Poster + '"><br>');
      $(".movie-list").append('Movie: ' + data.Title + '<br>');
      $(".movie-list").append('Year: ' + data.Year + '<br>');
      $(".movie-list").append('Rated: ' + data.Rated + '<br>');
      $(".movie-list").append('Starring: ' + data.Actors + '<br>');
      $(".movie-list").append('Directed by: ' + data.Director + '<br>');
      $(".movie-list").append('Released: ' + data.Released + '<br>');
      $(".movie-list").append('Runtime: ' + data.Runtime + '<br>');
      $(".movie-list").append('Awards: ' + data.Awards + '<br>');
      $(".movie-list").append('Country: ' + data.Country + '<br>');
      $(".movie-list").append('Genre: ' + data.Genre + '<br>');
      $(".movie-list").append('Language: ' + data.Language + '<br>');

      if (data.Metascore >= 60) {
      $(".movie-list").append('<span class="high-metascore">Metascore: ' + data.Metascore + '</span><br>');
    }else if(40 < data.Metascore < 60){
      $(".movie-list").append('<span class="middle-metascore">Metascore: ' + data.Metascore + '</span><br>');
    }else {
      $(".movie-list").append('<span class="low-metascore">Metascore: ' + data.Metascore + '</span><br>');
    }


      $(".movie-list").append('Plot: ' + data.Plot + '<br>');
      $(".movie-list").append('Writer: ' + data.Writer + '<br>');
      
      if (data.imdbRating >= 5) {
      $(".movie-list").append('iMDB Rating: <span style="color:green">' + data.imdbRating + '/10</span><br>');
    }else{
      $(".movie-list").append('iMDB Rating: <span style="color:red">' + data.imdbRating + '/10</span><br>');
    }
      $(".movie-list").append('Votes: ' + data.imdbVotes + '<br>');

      console.log(data);
      console.log(url);
});
// });
