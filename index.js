var http = require('http');
const { URLSearchParams } = require('url');

http.createServer(function(req, res) {

    if (req.url == '/favicon.ico') {
        res.write('favicon.ico');
        return res.end();

    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        res.end(`> Hello World!`);
    }




}).listen(3001);