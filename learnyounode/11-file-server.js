var http = require('http')
var fs = require('fs')

var fileToServe = process.argv[2]

http.createServer(function(req, res) {
	fs.createReadStream(fileToServe).pipe(res)
}).listen(8000)
