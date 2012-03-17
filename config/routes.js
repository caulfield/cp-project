var routes = {
  "/" : function(pathname, params, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end('Hello!');
    },
  "not_found" : notFound
}

function notFound(pathname, params, response){
  response.writeHead(404, {"Content-Type": "text/html"});
  response.end("Not Found, 404");
}

exports.routes = routes