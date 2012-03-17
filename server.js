var http = require('http');
var url = require('url');

function start(route){
  http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    route(pathname, response);
  }).listen(8888);
}

exports.start = start
