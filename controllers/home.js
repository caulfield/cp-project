var fs = require('fs')
// static controller
var Home = {
  notFound: function(request, response){
    response.writeHead(404, {"Content-Type": "text/html"});
    response.end("Not Found, 404");
  },

  index: function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end('Hello!');
  }
}

exports.Home = Home