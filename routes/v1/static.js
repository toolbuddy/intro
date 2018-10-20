/**
 * v1:
 * 
 * Routes for static pages (frontend entries)
 */
const express = require( 'express' );
const jsfs = require('jsonfile')
const path = require('path')
const router = new express.Router();

/**
 * Prefix: "/"
 * 
 * 
 * Static page list:
 * 
 * 
 */
/*router.use( '/' , (req,res)=>{
    // landing pages
    res.end("OK")
})*/

module.exports = router;