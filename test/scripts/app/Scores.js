var requirejs = require('requirejs');

requirejs.config({
	"baseUrl": "./scripts/",
	"useStrict": true
});


var Scores = requirejs("app/Scores"),
	assert = require('assert'),
	scores;

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