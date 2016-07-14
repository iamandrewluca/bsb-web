/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var productRouter = express.Router();

  productRouter.get('/', function(req, res) {
    res.send({
      'product': ['jora']
    });
  });

  productRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  productRouter.get('/:id', function(req, res) {
    res.send({
      'product': {
        id: req.params.id
      }
    });
  });

  productRouter.put('/:id', function(req, res) {
    res.send({
      'product': {
        id: req.params.id
      }
    });
  });

  productRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/product', require('body-parser').json());
  app.use('/cvsi-server/product', productRouter);
};
