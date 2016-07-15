/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var loginRouter = express.Router();

  loginRouter.post('/login', function(req, res) {
    console.log(req);
    res.send({
      'succes': true,
      'auth_token': 'this is token măi'
    });
  });

  loginRouter.post('/register', function (req, res) {
    res.send({
      'succes': true
    });
  });

  var bodyParser = require('body-parser');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use('/cvsi-server/user', loginRouter);
};
