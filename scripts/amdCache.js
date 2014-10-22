

// Same thing as basicCache, but this time wrapped behind a define()
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