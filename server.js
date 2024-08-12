const http = require('http');

const server = http.createServer((req, res) => {
    res.end('<h1>Bonjour Node !!!!</h1>\n');
});

server.listen(process.env.PORT || 3000);