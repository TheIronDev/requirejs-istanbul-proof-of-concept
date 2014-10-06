var CacheWrapper = require("../scripts/cacheWrapper"),
	assert = require('assert'),
	cacheWrapper;

describe ('Cache Wrapper (amd, requiring another amd) ', function() {
	beforeEach(function() {
		cacheWrapper = new CacheWrapper();
	});

	it('should set a value', function() {
		cacheWrapper.set('dog', 'yorkie');
		assert.equal(cacheWrapper.cache.storage.dog, 'yorkie');
		assert.notEqual(cacheWrapper.cache.storage.dog, 'poodle');

		assert.notEqual(cacheWrapper.cachedList.indexOf('yorkie'), -1);
	});

	it('should unset a value', function() {
		cacheWrapper.set('dog', 'yorkie');
		assert.equal(cacheWrapper.cache.storage.dog, 'yorkie');
		cacheWrapper.unset('dog');
		assert.equal(cacheWrapper.cache.storage.dog, undefined);

		assert.equal(cacheWrapper.cachedList.indexOf('yorkie'), -1);
	});

	it('should update the cacheList', function() {
		assert.equal(cacheWrapper.cachedList.length, 0);

		cacheWrapper.set('dog', 'yorkie');
		assert.notEqual(cacheWrapper.cachedList.indexOf('yorkie'), -1);
	});

	it('should remove the correct value from the cacheList', function() {
		cacheWrapper.set('dog', 'yorkie').set('soda', 'pepsi').set('time', 'night');
		cacheWrapper.unset('soda');

		assert.equal(cacheWrapper.cachedList.indexOf('pepsi'), -1);
	});
});