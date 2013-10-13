var net = require('net')
var moment = require('moment')

var getCurrentDateString = function() {
	return moment().format('YYYY-MM-DD HH:mm')
}

net.createServer(function(socket) {
	socket.end(getCurrentDateString() + "\n")
}).listen(8000)
