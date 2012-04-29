var fs = require('fs'),
    jade = require('jade');

var Home = {
  index: function(){
    var con = this;
    jade.renderFile('views/home/index.jade', function(err, html){
      if (err) throw err;
      con.res.end(html);
    });
  },

  staticJSON: function(filename){
    var con = this;
    fs.readFile("./json/"+filename, function(err, file){
      if (err) {
        con.res.writeHead(404, {"Content-Type":"text/plain"});
        con.res.end("File not found, 404");
      } else {
        jade.renderFile('views/home/staticJSON.jade', {file: file}, function(err, html){
          if (err) throw err;
          con.res.end(html);
        });
      }
    });
  }
}

exports.Home = Home
