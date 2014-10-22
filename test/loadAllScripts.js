var dive = require('dive');

var fs = require('fs'),
	assert = require('assert'),
	amdefine = require('amdefine'),
	cache;

require.extensions['.js'] = function(localModule, filename) {
	var contents = fs.readFileSync(filename, 'utf8');
	contents = 'if (typeof define !== "function") { var define = require("amdefine")(module); } ' + contents;
	localModule._compile(contents, filename);
};

// Helper function to traverse all of the script files to get coverage
dive('scripts/', { all: true }, function(err, file) {
	if (!err){
		require(file);
	}
});