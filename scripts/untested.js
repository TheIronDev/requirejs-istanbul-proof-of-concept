if (typeof define !== 'function') { var define = require('amdefine')(module) }

// Same thing as amdCache, but this one isn't being called
define([], function() {

	var BasicCache = function () {
		this.storage = {};
		return this;
	}
	BasicCache.prototype.set = function(key, value) {
		this.storage[key] = value;
		return this;
	}
	BasicCache.prototype.unset = function(key) {
		delete this.storage[key];
		return this;
	}

	BasicCache.prototype.dontTestMe = function() {
		return "Please don't test me, I'm afraid of Istanbul"
	}

	return BasicCache;
});