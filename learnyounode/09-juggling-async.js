var http = require('http')
var concat = require('concat-stream')
var getCollector = require('./async-collector.js')


var urls = process.argv.slice(2, 5)

var collector = getCollector(urls.length, function(allResults) {
	allResults.forEach(function(result) {
		console.log(result)
	})
})

urls.forEach(function(url) {
	var doneWithThisOne = collector()
	http.get(url, function(res) {
		res.pipe(concat(function(data) {
			var str = data.toString()
			doneWithThisOne(str)
		}))
	})
})

