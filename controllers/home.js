var fs = require('fs');
// static controller
var Home = {
  index: function(route) {
    this.res.writeHead(200, {"Content-Type": "text/plain"});
    this.res.end('Hello!');
  }
}

exports.Home = Home