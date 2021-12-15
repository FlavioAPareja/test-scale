// To write your routes in a more fancy way use express-router-group: https://www.npmjs.com/package/express-router-group
// However, if you consider that your application is going to grow a lot, it is advisable to create a routes folder and store the routes by file.

require('express-router-group');
const express = require('express');
const router = express.Router();
const crypto = require('crypto')
// Middlewares
const exampleMiddlewareMock = require('./middlewares/example.middleware')

// Controllers
const { welcomeRouteHandler } = require('./controllers/status.controller');

router.get('/', welcomeRouteHandler)
router.get('/scaled', (req,res)=>{
    const end = Date.now() + 10_000;
    while (Date.now() < end) {
      // do something here ...
    }
    res.send({message: 'everything was ok'})
})

module.exports = router