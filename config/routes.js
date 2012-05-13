var home = require('../controllers/home.js').Home,
    api = require('../controllers/api.js').Api

var routes = {
  '/': {
    get: home.index
   },
  '/json/:filename': {
    get: home.staticJSON
  },
  '/random/':{
    get: home.random
  },
  '/api/': {
    get: api.index
  },
  '/api/random': {
    get: api.random
  }
}

exports.routes = routes
