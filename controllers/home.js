var fs = require('fs'),
    jade = require('jade');

function sleep(milliSeconds){
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
}

var Home = {
  index: function(){
    var con = this;
    jade.renderFile('views/home/index.jade', function(err, html){
      if (err) throw err;
      con.res.end(html);
    });
  },

  random: function(){
    // time for generating so big json!
    // sleep will block!
    sleep(70);
    var json = {a:Math.random(), b:Math.random()}
    var con = this;
    jade.renderFile('views/home/json-file.jade', {data: JSON.stringify(json, null, 2)}, function(err, html){
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
        jade.renderFile('views/home/json-file.jade', {data: file}, function(err, html){
          if (err) throw err;
          con.res.end(html);
        });
      }
    });
  }
}

exports.Home = Home
