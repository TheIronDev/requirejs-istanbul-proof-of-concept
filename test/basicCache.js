var fs = require('fs'),
	assert = require('assert'),
	amdefine = require('amdefine'),
	cache;

require.extensions['.js'] = function(localModule, filename) {
	var contents = fs.readFileSync(filename, 'utf8');
	contents = 'if (typeof define !== "function") { var define = require("amdefine")(module); } ' + contents;
	localModule._compile(contents, filename);
};

var BasicCache = require('../models/basicCache');

describe ('Basic Cache (non-amd) ', function() {
	beforeEach(function() {
		cache = new BasicCache();
	});

	it('should set a value', function() {
		cache.set('dog', 'yorkie');
		assert.equal(cache.storage.dog, 'yorkie');
		assert.notEqual(cache.storage.dog, 'poodle');
	});

	it('should unset a value', function() {
		cache.set('dog', 'yorkie');
		assert.equal(cache.storage.dog, 'yorkie');
		cache.unset('dog');
		assert.equal(cache.storage.dog, undefined);
	});

	it('should be chainable', function() {
		cache.set('dog', 'yorkie').set('soda', 'pepsi');
		assert.equal(cache.storage.dog, 'yorkie');
		assert.equal(cache.storage.soda, 'pepsi');
	});
});