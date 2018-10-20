'use strict';

const {user_model} = require('./models/user')

// Operations of user
module.exports = class user {
    constructor(){}

    register(username, passwd, cb){
        user_model.register(username,passwd,cb)
    }

    login(username, passwd, cb){
        user_model.login(username,passwd,cb)
    }
}