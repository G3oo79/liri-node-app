//-----Grabs the export from keys.js----
var key = require('./keys.js');

//----NPM modules! required! to be called---
var Twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');

var fs = require('fs');
//+++++++++++++++++++++++++++++
var userArg = process.argv[2];

var userArgv = process.argv[3];

var userInput =[]; 

////////////Capture User/////////////////////////
/////////////////////////////////////////////////////
for (var i = 2; i < process.argv.length; i++) {
    var array = []
    userInput.push(process.argv[i]);
    /*userInput = array.toString().replace(',',' ');*/
    
    /*console.log(userInput);*/
}

//-----Grabs the export from keys.js----
var key = require('./keys.js');
//----Assigns keys to variable----
var twittKey = key.twitterKeys;

var client = new Twitter(twittKey);


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

	spotify.search({ type:'track', query:userArgv }, function(err, data) {
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
        break;
			    } 

 
    /*console.log(JSON.stringify(data, null, 2));*/
	

});
}
///////********************End Spotify************************
////////+++++++++++++++++++++++++++++++Omdb functions-------------------------///

function getOmdb(userInput) {

    /*console.log(userInput)*/

    userInput = userInput.toString().replace(',','');

    /*console.log(userInput);*/

    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&r=json"

   /* console.log(queryUrl);*/

	request(queryUrl, function(error, response, body){

        if (!error && response.statusCode == 200) {
            

            console.log('Title: ',JSON.parse(body)['Title']);
            console.log('Year: ',JSON.parse(body)['Released']);
            console.log('Rating: ',JSON.parse(body)['imbdRating']);
            console.log('Country: ',JSON.parse(body)['Country']);
            console.log('Language: ',JSON.parse(body)['Language']);
            console.log('Plot: ',JSON.parse(body)['Plot']);
            console.log('Actors: ',JSON.parse(body)['Actors']);
            console.log('Tomatoes Rating: ',JSON.parse(body)['tomatoMeter']);
            console.log('Tomato URL: ',JSON.parse(body)['tomatoURL']);
        }
            /*console.log(JSON.stringify(response, null, 2));*/

    });
}

/////////////////////////Function to activate user search/////////////////
//************************************************************************


getSpotify();
getTweet();
getOmdb(userInput);









    