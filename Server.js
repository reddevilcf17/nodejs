var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var a = getString();
    res.end(a);
}).listen(process.env.PORT, process.env.IP);

function getString()
{
    return 'Hello Debug\n';
}