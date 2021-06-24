const EventManagerMixin = require("../event-manager-mixin");

function CancellationToken() {
    this._isCancelled = false;
}

CancellationToken.prototype.cancel = function () {
    this._isCancelled = true;
    this.fire(null, "cancel");
}

Object.defineProperty(CancellationToken.prototype, "isCancelled", {
    get: function() { return this._isCancelled; }
});

Object.assign( EventManagerMixin );
