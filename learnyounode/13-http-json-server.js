var http = require('http')
var parse = require('url').parse
var moment = require('moment')

var dateStringToObject = function(dateString) {
	var date = new Date(dateString)
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
}

var dateStringToUnixtime = function(dateString) {
	return new Date(dateString).getTime()
}

var routes = {
	"/api/parsetime": function(query) {
		if (typeof query.iso !== undefined) {
			return dateStringToObject(query.iso)
		}
	},
	"/api/unixtime": function(query) {
		if (typeof query.iso !== undefined) {
			return {
				unixtime: dateStringToUnixtime(query.iso)
			}
		}
	}
}

http.createServer(function(req, res) {
	var thisURL = parse(req.url, true)

	var routeHandler = routes[thisURL.pathname]

	if (typeof routeHandler !== 'function') {
		res.writeHead(404)
	} else {
		var response = routeHandler(thisURL.query)
		if (typeof response === 'undefined') {
			res.writeHead(400) // it's always the client's fault
		} else {
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.write(JSON.stringify(response))
		}
	}
	res.end()
}).listen(8000)
