/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    var promises = Array();

    function readOperation(operation) {
        return new Promise(function(resolve, reject) {
            operation(function next(err, data) {
                err ? reject(err) : resolve(data);
            });
        });
    }

    operations.forEach(item => promises.push(readOperation(item)));

    Promise
        .all(promises)
        .then(function(data) {
            callback(null, data);
        }, function(err) {
            callback(err);
        }); 
};