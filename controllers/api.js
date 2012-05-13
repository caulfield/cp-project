var fs = require('fs');

var Api = {

  index : function(){
    this.res.writeHead(200, {"Content-Type": "application/json"});
    this.res.end(JSON.stringify({success: 'ok'}));
  },

  random: function(){
    var json = {a:Math.random(), b:Math.random()}
    this.res.writeHead(200, {"Content-Type": "application/json"});
    this.res.end(JSON.stringify(json, null, 2));  
  }

}

exports.Api = Api
