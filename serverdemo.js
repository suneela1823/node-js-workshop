var http = require('http');

http.createServer(function(req,res){
req.writeHead(200,{'Content-Type':'text/html'});
res.end("welcometo </br>Node is JS");
}).listen(1800);

console.log('Server is listening on http://127.0.0.1:1800');