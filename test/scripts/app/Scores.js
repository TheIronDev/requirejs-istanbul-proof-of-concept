var fs = require('fs'),
	assert = require('assert'),
	amdefine = require('amdefine'),
	cache;

require.extensions['.js'] = function(localModule, filename) {
	var contents = fs.readFileSync(filename, 'utf8');
	contents = 'if (typeof define !== "function") { var define = require("amdefine")(module); } ' + contents;
	localModule._compile(contents, filename);
};

var Scores = require("../../../scripts/app/Scores");

describe ('Scores (testing 3 directory levels deep)', function() {
	beforeEach(function() {
		scores = new Scores();
	});

	it('should set add new scores', function() {
		scores.add('John', 5);
		scores.add('Steven', 3);
		assert.equal(scores.scores.length, 2);
	});

	it('should clear the list of scores', function() {
		scores.add('John', 5);
		scores.add('Steven', 3);
		assert.equal(scores.scores.length, 2);
		scores.clear();
		assert.equal(scores.scores.length, 0);
	});

	it('should return a high score', function() {
		scores.add('John', 5);
		scores.add('Pikachu', 50);
		scores.add('Steven', 3);
		assert.equal(scores.getHighScore(), 'Pikachu');
	});

});