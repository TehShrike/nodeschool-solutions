var http = require('http')
var concat = require('concat-stream')

var url = process.argv[2]

http.get(url, function(res) {
	res.pipe(concat(function(data) {
		var str = data.toString()

		console.log(str.length)
		console.log(str)
	}))
})
