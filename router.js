var routes = require('./config/routes').routes,
    director = require('director');

var router = new director.http.Router(routes);

exports.router = router