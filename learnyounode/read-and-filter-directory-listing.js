var fs = require('fs')
var escape = require('./escape-regex.js')

module.exports = function(path, extension, cb) {
	var regex = new RegExp(".*\\." + escape(extension) + "$")

	fs.readdir(path, function(err, filenames) {
		if (err) {
			cb(err)
		} else {
			cb(false, filenames.filter(function(file) {
				return regex.test(file)
			}))
		}
	})	
}
