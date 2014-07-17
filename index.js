var spawn = require('child_process').spawn;

// Spawns the command
module.exports = function(package, options) {
	return spawn('dpkg-query', ['-W', package], options);
};
