var server = require('./server.js');
var router = require('./router.js').router;

server.start(router);