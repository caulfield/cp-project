var home = require('../controllers/home.js').Home

var routes = {
  '/': {
    get: home.index
   },
  '/json/:filename': {
    get: home.staticJSON
  }
}

exports.routes = routes