const buddyList = require("spotify-buddylist");
var twit = require("twit");
require("dotenv/config");

const spDcCookie = process.env.SP_DC;
const username = process.env.USERNAME;
const tweetName = process.env.TWEET_NAME;

let previous = null;

const T = new twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})


async function main() {
  const { accessToken } = await buddyList.getWebAccessToken(spDcCookie);
  const friendActivity = await buddyList.getFriendActivity(accessToken);
  const friends = friendActivity.friends;
  const friendsOnline = friends.length - 1;


  let alishba = -1;

  let song = null;
  let art = null;
  let context = null;

  for (let i = friendsOnline; i >= 0; i--) {
    let user = friends[i].user.name;
    if (user == username) {
      alishba = i;
      break;
    }
  }

  
  if (alishba != -1) {
    let track = friends[alishba].track;

    if (JSON.stringify(previous) != JSON.stringify(track)) {
      song = track.name;
      artist = track.artist.name;
      context = track.context.name;

      previous = track;
      

      let tweet = tweetName + " is listening to " + song + " by " + artist + " from the playlist/album " + context;

      try {
        T.post("statuses/update", {status: tweet}, function(err, data, response) {
          console.log(data);
        });
      } catch (error) {
        console.log("COULD NOT TWEET!\n\n" + error);
      }
      
    }
  }
}

main();

setInterval(() => main(), 1000 * 60);