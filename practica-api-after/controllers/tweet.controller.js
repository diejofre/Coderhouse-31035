const tweetBank = require("../tweetBank");

class Tweet {
  static getAll() {
    const tweets = tweetBank.list();
    return tweets;
  }

  static create(name, content) {
    const tweet = tweetBank.add(name, content);
    return tweet;
  }
}

module.exports = Tweet;
