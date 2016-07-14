/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var Chance = require('chance');
  var productRouter = express.Router();
  var chance = new Chance();

  productRouter.get('/', function(req, res) {

    var products = [];

    for (var i = 0; i < 20; ++i) {
      var product = {
        "borrow": chance.bool(),
        "categoryEnumList": chance.pickset(['BUY', 'BORROW', 'SELL'], chance.natural({min:1,max:3})),
        "createdDate": chance.timestamp(),
        "currency": chance.pickone(['USD', 'EUR', 'MDL']),
        "description": chance.paragraph(),
        "limitDate": chance.timestamp(),
        "price": chance.natural({min:1, max: 1000}),
        "title": chance.sentence(),
        "updatedDate": 0
      }

      products.push(product);
    }


    res.send({
      'products': products
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
