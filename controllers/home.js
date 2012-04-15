var fs = require('fs');

var Home = {
  index: function() {
    this.res.writeHead(200, {"Content-Type": "text/plain"});
    this.res.end('Hello!');
  },

  staticJSON: function(filename){
    var con = this;
    fs.readFile("./json/"+filename, function(err, file){
      if (err) {
        con.res.writeHead(404, {"Content-Type":"text/plain"});
        con.res.end("File not found, 404");
      } else {
        con.res.writeHead(200, {"Content-Type":"application/json"});
        con.res.end(file);
      }
    });
  }
}

exports.Home = Home
