
// RequireJs File that requires in another amd file
define(['../scripts/amdCache'], function(Cache) {

	var CacheWrapper = function () {
		this.cache = new Cache();
		this.cachedList = [];
		return this;
	}
	CacheWrapper.prototype.set = function(key, value) {
		this.cache.set(key, value);
		this.cachedList.push(value);
		return this;
	}
	CacheWrapper.prototype.unset = function(key) {
		var oldVal = this.cache.storage[key],
			cacheList = this.cachedList,
			oldValueIndex = cacheList.indexOf(oldVal);

		cacheList.splice(oldValueIndex, 1);
		this.cache.unset(key);

		return this;
	}

	CacheWrapper.prototype.dontTestMe = function() {
		return "Please don't test me, I'm afraid of Istanbul"
	}

	return CacheWrapper;
});