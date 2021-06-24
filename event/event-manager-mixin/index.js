/*
 * For prototype.
 * 
 * function Foo() {
 * }
 * 
 * Object.assgin(Foo.prototype, EventManagerMixin);
 *
 *
 * For class.
 * 
 * class Foo {
 * }
 * 
 * Object.assgin(Foo.prototype, EventManagerMixin);
 *
 *
 * For instance.
 *
 * function Foo() {
 *     Object.assign(this, EventManagerMixin);
 * }
 */

const EventManagerMixin = {
    /**
     * Add event listener
     * @param {string} name event name
     * @param {Function} listener event listener
     */
    on: function (name, listener) {
        if (!listener) {
            return;
        }
        if (!this.EventManagerMixin) {
            this.EventManagerMixin = {
                map: new Map()
            };
        }
        const listenerList = this.EventManagerMixin.map.get(name);
        if (!listenerList) {
            listenerList = [];
            this.EventManagerMixin.map.set(listenerList);
        }
        listenerList.push(listener);
    },
    /**
     * Remove event listener
     * @param {string} name event name
     * @param {Function} listener event listener
     */
    off: function (name, listener) {
        if (!listener) {
            return;
        }
        const listenerList = this.EventManagerMixin && this.EventManagerMixin.map.get(name);
        if (!listenerList) {
            return;
        }
        for (let i = 0; i < listenerList.length; i++) {
            if (listenerList[i] === listener) {
                listenerList.splice(i, 1);
                i--;
            }
        }
    },
    /**
     * Fire event
     * @param {Object} thisArg this for listener
     * @param {string} name event name
     * @param {...*} args arguments for listener
     */
    fire: function(thisArg, name) {
        const listenerList = this.EventManagerMixin && this.EventManagerMixin.map.get(name);
        if (!listenerList) {
            return;
        }
        const args = Array.prototype.slice.call(arguments, 2);

        
        listenerList.forEach((listener) => {
            try {
                listener.apply(thisArg, args);
            }
            catch (e) {
                console.log(e.message);
                console.log(e.stack);
            }
        });
    }
}

if (typeof module !== "undefined") {
    module.exports = EventManagerMixin;
}
