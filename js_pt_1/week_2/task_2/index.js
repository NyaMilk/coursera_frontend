/**
 * @param {String[]} hashtags
 * @returns {String}
 */

function hashNew(acc, item) {
	if (acc.indexOf(item.toLowerCase()) === -1)
		acc.push(item.toLowerCase());
	return acc;
}

module.exports = function (hashtags) {
	var uniqueHashtags = hashtags.reduce(hashNew, []);
    return uniqueHashtags.join(', ');
};
