var server = require('./server.js'),
    router = require('./router.js').router;

server.start(router);