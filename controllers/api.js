var fs = require('fs');

var Api = {

  index : function(){
    this.res.writeHead(200, {"Content-Type": "text/html"});
    this.res.end(JSON.stringify({data:{success: 'ok'}}));
  },

  random: function(){
    var json = {data:{a:Math.random(), b:Math.random()}}
    this.res.writeHead(200, {"Content-Type": "text/html"});
    this.res.end(JSON.stringify(json, null, 2));  
  }

}

exports.Api = Api
