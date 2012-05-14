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
  '/fast/': {
    get: api.index
  },
  '/fast/random': {
    get: api.random
  }
}

exports.routes = routes
