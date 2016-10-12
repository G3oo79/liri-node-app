//----NPM modules! required! to be called---
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');
//------Console variables----
var userArg = process.argv[2];
var userArgv = process.argv[3];

//-----Grabs the export from keys.js----
var key = require('./keys.js');
//----Assigns keys to variable----
var twittKey = key.twitterKeys;
//----------
var client = new Twitter(twittKey);


//User -----inputs confirm!-------
if 
var params = {screen_name: 'client'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
