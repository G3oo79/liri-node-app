var Twitter = require('twitter');
//Grabs the export keys from keys.js
var twitter = require('./keys.js');
/*console.log(twitter);
*/
var twittKey = twitter.twitterKeys;
/*console.log(twittKey);
*/
var client = process.argv[2];
//
var params = {screen_name: 'nodejs'};
twittKey.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
