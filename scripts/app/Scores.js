if (typeof define !== 'function') { var define = require('amdefine')(module) }

// AMD File that is 2 levels deep
define([], function() {

	var Scores = function () {
		this.scores = [];
		return this;
	}
	Scores.prototype.add = function(name, score) {
		var score = {
			name: name,
			score: score
		}
		this.scores.push(score);
		return this;
	}
	Scores.prototype.clear = function(key) {
		this.scores = [];
		return this;
	}

	Scores.prototype.getHighScore = function() {
		var highScore;
		this.scores.forEach(function(score) {
			if (!highScore || (score.score > highScore.score)) {
				highScore = score;
			}
		});

		return highScore.name;
	}

	Scores.prototype.dontTestMe = function() {
		return "Please don't test me, I'm afraid of Istanbul"
	}

	return Scores;
});