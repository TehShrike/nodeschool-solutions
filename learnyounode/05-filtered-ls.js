var fs = require('fs')
var escape = require('./escape-regex.js')

var path = process.argv[2]
var extension = process.argv[3]

var regex = new RegExp(".*\\." + escape(extension) + "$")

fs.readdir(path, function(err, filenames) {
	filenames.filter(function(file) {
		return regex.test(file)
	}).forEach(function(file) {
		console.log(file)
	})
})
