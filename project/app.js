var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end('Bienvenue sur notre page d\'accueil !</p>');

});
server.listen(8080, 'localhost', () => {
console.log("Server running at localhost")});
