var home = require('../controllers/home.js').Home

var routes = {
  '/' : {
    get: home.index
  }
}

exports.routes = routes