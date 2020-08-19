module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.item = Array();
}

// Методы коллекции
Collection.prototype.values = function () {
    return this.item;
};

Collection.prototype.count = function() {
    return this.item.length;
}

Collection.prototype.at = function (position) {
    if (position > 0 && position <= this.count())
        return this.item[position - 1];
    return null;
};

Collection.prototype.append = function (collection) {
    if (collection instanceof Collection)
        this.item = this.item.concat(collection.values());
    else
        this.item.push(collection);
};

Collection.prototype.removeAt = function (position) {
    if (position > 0 && position <= this.count())
    {
        this.item.splice(position - 1, 1);
        return true;
    }
    else
        return false;
};

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (arr) {
    return arr.reduce(function(collection, item) {
        collection.append(item);
        return collection;
      }, new Collection());
};
