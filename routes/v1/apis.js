/**
 * v1: 
 * 
 * RESTful api call
 */
const express = require( 'express' );
const jsfs = require('jsonfile')
const path = require('path')
const router = new express.Router();

// routes - categories
// const user_routes = require('./categories/user_routes')
// const credit_routes = require('./categories/credit_routes')

/**
 * Prefix: "/api/v1"
 * 
 * API categories:
 * - "user":        user login/register, ... or other related operations
 * - "credit":      credit manipulations
 * 
 */
//router.use( '/user', user_routes );
//router.use( '/credit', credit_routes );

module.exports = router;