var home = require('../controllers/home.js').Home

var routes = {
  "/" : home.index,
  "404" : home.notFound
}

exports.routes = routes