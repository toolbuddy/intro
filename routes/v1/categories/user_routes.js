/**
 * User-related apis
 */

const express = require( 'express' );
const router = new express.Router();

// core 
const {core} = require('../src/core')

/**
 * Prefix: "/api/v1/user"
 * 
 * Support API:
 * 
 * - "/register"
 * - "/login"
 */

router.post( '/register', (req, res)=>{
    core.user.register(req.body.username, req.body.passwd, (err,obj)=>{
        res.end(JSON.stringify(obj))
    })
})

router.post( '/login' , (req,res)=>{
    core.user.login(req.body.username, req.body.passwd, (err,obj)=>{
        res.end(JSON.stringify(obj))
    })
})

module.exports = router;