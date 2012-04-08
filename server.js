var http = require('http'),
    router = require('./router.js').router;

module.exports = http.Server(function(request, response){
  request.addListener("end", function(){
    router.dispatch(request, response, function(err){
      response.writeHead(404);
      response.end("Not Found, 404");
    });
  });
});
