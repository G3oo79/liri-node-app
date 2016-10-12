//modules!
var Twitter = require('twitter');
//Grabs the export keys from keys.js
var key = require('./keys.js');
/*console.log(key);
*/
var twittKey = key.twitterKeys;

/*console.log(twittKey);*/

var client = new Twitter(twittKey);


/*var client = process.argv[2];*/

//
var params = {screen_name: 'client'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
