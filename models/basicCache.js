
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

module.exports = BasicCache;