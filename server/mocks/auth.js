/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var loginRouter = express.Router();

  var bodyParser = require('body-parser');

  loginRouter.post('/login', bodyParser.json(), function(req, res) {
    console.log(req.body);
    res.send({
      'succes': true,
      'auth_token': 'this is token măi',
      'body': req.body
    });
  });

  loginRouter.post('/register', function (req, res) {
    res.send({
      'succes': true
    });
  });

  app.use('/cvsi-server/user', loginRouter);
};
