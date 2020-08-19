/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var result = [];
    var tweets = tweet.split(' ');
    for (var i = 0; i < tweets.length; i++)
        if (tweets[i].indexOf('#') !== -1)
            result.push(tweets[i].slice(1));
    return result;
};