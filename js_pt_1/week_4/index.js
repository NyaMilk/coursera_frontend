/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
	var fields = [].slice.call(arguments).sort();
	var result = arguments[0];

    for (var i = 1; i < fields.length; i++)
        result = fields[i](result);
	return result;
}

/**
 * @params {String[]}
 */
function select() {
	var fields = [].slice.call(arguments);

	return function select(collection) {
		return collection.reduce(function(arr, item) {
			var result = {};

			for (var key in item)
				if (fields.indexOf(key) !== -1)
					result[key] = item[key];
			arr.push(result);
	    return arr;
	  }, [])
	}
}


/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
	return function filter(collection) {
		return collection.reduce(function(arr, item) {
			if (values.indexOf(item[property]) !== -1)
				arr.push(item);
			return arr;
		}, [])
	}
}

module.exports = {
	query: query,
	select: select,
	filterIn: filterIn
};