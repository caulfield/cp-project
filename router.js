var routes = require('./routes.js').routes

function route(pathname, response){
  if (typeof routes[pathname] === 'function'){
    routes[pathname](response);
  } else {
    routes['not_found'](response);
  }  
}

exports.route = route