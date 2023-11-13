const express = require('express'); 

const personsRouter = require('./person.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/persons', personsRouter);
}

module.exports = routerApi;
