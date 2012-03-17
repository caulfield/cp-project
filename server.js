var http = require('http');

function start(route){
  http.createServer(function(request, response){
    request.addListener("end", function(){
      route(request, response);
    });
  }).listen(8888);
}

exports.start = start
