var fs = require('fs')
var countLines = require('./count-lines.js')

var fileContents = fs.readFileSync(process.argv[2], 'utf8')

console.log(countLines(fileContents))
