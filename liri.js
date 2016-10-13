//----NPM modules! required! to be called---
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');
//------Console variables----
var userArg = process.argv[2];
var userArgv = process.argv[3];
var userInput;
//
for (var i = 2; i < process.argv.length; i++) {
    var array = []
    array.push(process.argv[i]);
    userInput = array.toString().replace(',',' ');
    
    /*console.log(userInput);*/
}

//-----Grabs the export from keys.js----
var key = require('./keys.js');
//----Assigns keys to variable----
var twittKey = key.twitterKeys;
//----------
var client = new Twitter(twittKey);

//User -----inputs confirm!-------

// ---------FUNCTIONS----------------------

// -------------twitter Func-----------------

function getTweet() {

var params = {screen_name: 'G30o0'};

client.get('statuses/user_timeline', params, function(error, tweets, response) {

  if (!error) {

    for (var i = 0; i < 20; i++) {

    	if (tweets[i] == null || tweets[i] == undefined) {
    		break;
    	}

    	console.log(tweets[i].text);

    }

    
  }
});

}
//-----------end twitter function-----------

//------------spotify function--------------
function getSpotify() {

	spotify.search({ type: 'track', query: userInput }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    //artist name
    for (var x = 0; x < 10; x++){
		console.log("Artist: " + data.tracks.items[x].artists[0].name);
		console.log("Album: " + data.tracks.items[x].album.name);
		console.log("Song title: " + data.tracks.items[x].name);
	   	console.log("Preview: " + data.tracks.items[x].preview_url);
			    } 

 
    console.log(JSON.stringify(data, null, 2));
	

});
}

function getOmdb() {
	request('http://www.omdbapi.com/?r=json&t=' + movieTitle, function(error, response, body)
}


/*getSpotify();*/
/*getTweet();*/


