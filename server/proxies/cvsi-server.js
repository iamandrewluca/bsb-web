/*jshint node:true*/
var proxyPath = '/dev';

module.exports = function(app) {
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  var proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res, next){
    // include root path in proxied request
    req.url = proxyPath + req.url;
    proxy.web(req, res, { target: 'http://192.168.3.191:8000' });
  });
};
