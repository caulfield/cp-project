var http = require('http');
var url = require('url');

function start(route){
  http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname,
        params = url.parse(request.url, true).query;

    request.addListener("end", function(){
      route(pathname, params, response);
    });

  }).listen(8888);
}

exports.start = start
