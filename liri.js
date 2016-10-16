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

	spotify.search({ type: 'track', query: userInput }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    //artist name
    for (var x = 0; x < 5; x++){
		console.log("Artist: " + data.tracks.items[x].artists[0].name);
		console.log("Album: " + data.tracks.items[x].album.name);
		console.log("Song title: " + data.tracks.items[x].name);
	   	console.log("Preview: " + data.tracks.items[x].preview_url);
			    } 

 
    console.log(JSON.stringify(data, null, 2));
	

});
}

function getOmdb(userArgv) {
    var queryUrl = "http://www.omdbapi.com/?t=json&t=" + userArgv + "&y=&plot=short&tomatoes=true&r=json"

    console.log(queryUrl);

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
            console.log(JSON.stringify(body, null, 2));

    });
}



/*getSpotify();*/
/*getTweet();*/
getOmdb();





////////////////////////////+++++++++++++++++++++++++++++++++++
/////////////////////++++++++++++++++++




/*================================================
var request = require('request');
var Twitter = require('twitter');
var spotify = require('spotify');
var inquirer = require('inquirer');
var fs = require('fs');
var keys = require('./keys');


var commands = ['my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says'];


var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret,

});

//Twitter function=======================================================
function tweeter(){
var params = {screen_name: 'rolemodel15'};
    client.get('statuses/user_timeline',params, function(error, tweets, response){
        if(!error){
            for(var i=0; i<20; i++){
                console.log(tweets[i].text);
                console.log('--------');
            }
        }

    });
}
//Spotify function=============================================================================

function playSpotify(song){

    spotify.search({type:'track', query: song}, function(err, data){
                if(err){
                    console.log('error occurred: '+err);
                    return;
                }
                console.log("start")
                console.log('Artist:',data.tracks.items[0].artists[0].name);
                console.log('Song:',data.tracks.items[0].name);
                console.log('Preview Link:',data.tracks.items[0].preview_url)
                console.log('Album:', data.tracks.items[1].album.name)

            })

}

//Moive function=======================================================================================

function movieLookUp(movieName){
 var queryUrl ='http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&tomatoes=true&r=json';

        console.log(queryUrl);

        request(queryUrl, function(error, response, body){
            if(!error && response.statusCode == 200){

                console.log('Title: ',JSON.parse(body)['Title']);
                console.log('Release Year-',JSON.parse(body)['Released']);
                console.log('IMDB Rating-', JSON.parse(body)['imdbRating']);
                console.log('Country of Production-', JSON.parse(body)["Country"]);
                console.log('Language-',JSON.parse(body)['Language']+'\n');
                console.log('Plot',JSON.parse(body)['Plot']+'\n');
                console.log('Actors',JSON.parse(body)['Actors']);
                console.log('Rotten Tomatoes Rating',JSON.parse(body)['tomatoMeter']);
                console.log('Rotten tomatoes URL', JSON.parse(body)['tomatoURL']);

            }
        });
}

//Production===================================================================================

var command= process.argv[2]

var input = process.argv[3];
for(var i =4, n= process.argv.length; i<


    ; i++){
    input = input + " "+  process.argv[i];
}
// console.log(input)

function runLiri(command, input){

    if(command== 'my-tweets'){
        tweeter();
    }

    else if(command=='movie-this'){
        if(input == null){
                movieLookUp('Mr. Nobody')
        }else{
                movieLookUp(input);
            }
    }

    else if(command=='spotify-this-song'){
        if(input == null){
            playSpotify('The Sign Ace of Base');
        }else{
            playSpotify(input);
        }
    }

    else if(command=='do-what-it-says'){

            fs.readFile('random.txt', 'utf8', function(error, data){

                if(error){
                    return console.log(error);
                }
                var array = data.split(',');
                var commands = array[0];
                var inputs = array[1];
                console.log(commands);
                runLiri(commands, inputs);
            })

    } 
    else{
        console.log('please re run with a valid command')
    }

    //log to log file
    fs.appendFile('./log.txt', command+" ", function(err)
    {
        if(err){
            console.log(err);
        }
    })
};

runLiri(command, input);
Contact GitHub */


