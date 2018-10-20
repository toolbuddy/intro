const express = require( 'express' );
const router = new express.Router();
const apis = require('./v1/apis');
const static = require('./v1/static')

// static pages:
// - landing, about ...
router.use('/', static)

// RESTful api calls:
router.use('/api/v1',apis);

module.exports = router;