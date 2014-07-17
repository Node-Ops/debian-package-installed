# Is that package installed?

```
$ npm install debian-package-installed
```

Checks to see if a package is installed on a Debian system by running `dpkg-query -w <package>`.  Returns the child process that was spawned.  Example:

```javascript
var installed = require('debina-package-installed');
installed('nginx', {
	// spawn options
	stdio: 'inherit' // See the full output
}).on('close', function(code) {
	if (code !== 0) return console.log('Package not installed');
	console.log('Package installed');
});
``
