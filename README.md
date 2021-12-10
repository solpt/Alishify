# Alishify
Alsihify is a bot that gets what song a friend is listening to on spotify and then makes a tweet about it!

![An example of a tweet](https://i.imgur.com/tAAIJsM.png)

## Requirements
Alishify is built off of [Spotify-Buddylist](https://github.com/valeriangalliat/spotify-buddylist), [Twit](https://github.com/ttezel/twit), and [dotenv](https://github.com/motdotla/dotenv).

## installation
1. Clone the repo.
2. In the cloned repo, run these commands to install the dependencies
   ```bash 
   npm install spotify-buddylist
   npm install twit
   npm install dotenv
   ```
3. Create a [twitter developer account](https://developer.twitter.com/en/support/twitter-api/developer-account)
4. Create an app with read and write permissions
5. Copy the api key, secret key, access token, and secret token to the .env file
6. Get the ``sp_dc`` cookie
   1. Go to the [spotify web player](https://open.spotify.com/).
   2. Open the developer tools and click ```application```
   3. Copy the ``sp_dc`` cookies's value
   4. paste it into the field in the .env file
7. Fill in the spotify username in the .env file
8. Fill in the name you want displayled in the tweet
9. Run it with node alishify.js