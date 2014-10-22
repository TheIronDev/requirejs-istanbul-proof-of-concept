var requirejs = require('requirejs');

requirejs.config({
	"baseUrl": "./scripts/",
	"useStrict": true
});


var dive = require('dive');

// Helper function to traverse all of the script files to get coverage
dive('scripts/', { all: true }, function(err, file) {
	if (!err){
		requirejs(file);
	}
});