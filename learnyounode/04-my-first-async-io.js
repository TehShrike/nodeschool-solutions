var fs = require('fs')
var countLines = require('./count-lines.js')

fs.readFile(process.argv[2], 'utf8', function(err, fileContents) {
	if (!err) {
		console.log(countLines(fileContents))		
	}
})
