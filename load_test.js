var nl = require('nodeload')
  .setMonitorIntervalMs(500)
  .setAjaxRefreshIntervalMs(500);

var loadtest = nl.run({
  name: "First test",
  numUsers: 200,
  host: 'localhost',
  port: 8888,
  timeLimit: 30,
  targetRps: 500,
  stats: ['latency','result-codes', 'concurrency'],
  methods: 'GET',
  path: '/json/products'
});

loadtest.on('end', function() { console.log('tests done'); });
