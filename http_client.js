// Here's the reference solution:
// Run this script along http_server.js

var request = require('request');
var r = request.post('http://localhost:8080');
process.stdin.pipe(r).pipe(process.stdout);
