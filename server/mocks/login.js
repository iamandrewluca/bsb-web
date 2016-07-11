/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var loginRouter = express.Router();
  var bodyParser = require('body-parser');
  var jsonParser = bodyParser.json({ type: 'application/*+json' });

  loginRouter.post('/', jsonParser, function(req, res) {
    console.log(req.body);
    res.send({
      'succes': true,
      'auth_token': 'jora'
    });
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  // app.use('/api/login', require('body-parser').json());
  app.use('/api/login', jsonParser);
  app.use('/api/login', loginRouter);
};
