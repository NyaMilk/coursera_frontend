module.exports = {
    subs: {},

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if(!this.subs.hasOwnProperty(event))
            this.subs[event] = [];
        this.subs[event].push({
            subscriber: subscriber,
            handler: handler.bind(subscriber)
        });
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (this.subs.hasOwnProperty(event))
            this.subs[event] = this.subs[event].filter(function (item) {
                return item.subscriber !== subscriber;
            })
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (this.subs.hasOwnProperty(event))
            for (var i = 0; i < this.subs[event].length; i++)
                this.subs[event][i].handler();
        return this;
    }
};
