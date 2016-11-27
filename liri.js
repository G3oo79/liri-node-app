//-----Grabs the export from keys.js----
var key = require('./keys.js');

//----NPM modules! required! to be called---
var Twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');

var fs = require('fs');

//+++++++++++++Tweets Function+++++++++++++++
//////////////////////////////////////////////
/////////////////////////////////////////////

var getTweets = function(){

    var client = new Twitter(key.twitterKeys);

       var params = {screen_name: 'G30o0'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
       /* console.log(tweets);*/
       for (var i = 0; i < tweets.length; i++) {
          console.log(tweets[i].created_at);
          console.log(' ');
          console.log(tweets[i].text);
       }
      }
    });
}/////////////////////////End Tweets////////////////////////

//+++++++++++++++++++++++++Spotify Function+++++++++++++++++
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

var getArtistNames = function(artist) {
    return artist.name;
}

var getSpotify = function(songName){

    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
     
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log[i];
            console.log('Artist: ' + songs[i].artists.map(getArtistNames));
            console.log('Song Name: ' + songs[i].name);
            console.log('Preview Song: ' + songs[i].preview_url);
            console.log('Album: ' + songs[i].album.name);
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++')
        }
    });

}////////////////////////////End Spotify//////////////////////////

//+++++++++++++++++++++++++++++OMDB Function+++++++++++++++++++++++++++++
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
var getMovie = function(movieName) {

    request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        
        var jsonData = JSON.parse(body);

        console.log('Title: ' + jsonData.Title);
        console.log('Year: ' + jsonData.Year);
        console.log('Rated: ' + jsonData.Rated);
        console.log('IMDB Rating: ' + jsonData.imdbRating);
        console.log('Country: ' + jsonData.Country);
        console.log('Language: ' + jsonData.Language);
        console.log('Plot: ' + jsonData.Plot);
        console.log('Actors: ' + jsonData.Actors);
        /*console.log('Rotten Tomatoes: ' + jsonData.tomatoRating);
        console.log('Tomatoes URL: ' + jsonData.tomatoURL);*/
      }
    });

}///////////////////////////End OMDB///////////////////////////////

//++++++++++++++++++++++++++++++++Get User Inputs+++++++++++++++++++++++
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var doWhatItSays = function(){

    fs.readFile('random.txt', 'utf8', function (err, data) {
      if (err) throw err;
      
      var dataArr = data.split(',');

      if (dataArr.lenght == 2) {
        pick(dataArr[0], dataArr[1])
      }else if (dataArr.lenght ==1) {
        pick(dataArr[0]);
      }

    });
}

var pick = function(caseData, functionData){
    switch(caseData){
        case 'my-tweets' :
            getTweets();
            break;
        case 'spotify-this-song' :
            getSpotify(functionData);
            break;
        case 'movie-this' :
            getMovie(functionData);
        case 'do it' :
            doWhatItSays();
            break;
    default:
    console.log('Check your self Before you wreck your self!!')
    }
}
 var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
 };

 runThis(process.argv[2], process.argv[3]);



    