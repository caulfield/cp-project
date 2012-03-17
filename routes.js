var routes = {
  "/" : function(response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end('Hello!');
    },

  "not_found" : function(response){
    response.writeHead(404, {"Content-Type": "text/html"});
    response.end("404, Not Found");
  }
}



exports.routes = routes