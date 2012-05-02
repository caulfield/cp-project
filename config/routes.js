var home = require('../controllers/home.js').Home

var routes = {
  '/': {
    get: home.index
   },
  '/json/:filename': {
    get: home.staticJSON
  },
  '/random/':{
    get: home.random
  }
}

exports.routes = routes
