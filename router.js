var routes = require('./config/routes.js').routes

function route(pathname, params, response){
  if (typeof routes[pathname] === 'function'){
    routes[pathname](pathname, params, response);
  } else {
    routes['not_found'](pathname, params, response);
  }  
}

exports.route = route