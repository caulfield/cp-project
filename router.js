var url = require('url'),
  routes = require('./config/routes.js').routes

function route(request, response){
  var pathname = url.parse(request.url).pathname
  if (typeof routes[pathname] === 'function'){
    routes[pathname](request, response);
  } else {
    routes["404"](request, response);
  }  
}

exports.route = route