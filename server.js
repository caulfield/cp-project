var http = require('http');

function start(router){
  http.createServer(function(request, response){
     request.addListener("end", function(){
      router.dispatch(request, response, function(err){
        response.writeHead(404);
        response.end("Not Found, 404");
      });
     });
  }).listen(8888);
}

exports.start = start
