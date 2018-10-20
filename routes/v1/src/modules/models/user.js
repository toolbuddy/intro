/**
 * User model of database
 */
let crypto = require('crypto')
const rs = require('randomstring')
const {db} = require('../db')

class user_model {
    constructor(){
    }

    register(username,passwd,cb){
        db.User.findOne({where: {username: username}}).then(user=>{
            if(user==null){
                // create for this user
                // TODO: need to pay for this key
                let salt = rs.generate(16);
    
                // Using crypto to implement hash and salt mechansim
                let hashsalt = crypto.pbkdf2Sync(passwd,salt,100000,64,'sha512').toString('hex')
                // insert it into database
                db.User.create({
                    invitecode: username,
                    title: "normal",
                    team: null,
                    username: username,
                    passwd: hashsalt,
                    key: salt
                })
                // return
                cb(0,{
                    msg: "success",
                    title: "normal",
                    key: hashsalt
                });
            }
            else{
                cb(1,{
                    msg: "duplicated"
                });
            }
        })
    }

    login(username,passwd,cb){
        db.User.findOne({where: {username:username}}).then(user=>{
            if(user==null){
                cb(0,{
                    msg: "not found"
                })
            } else {
                // using crypto to auth
                //console.log(crypto.pbkdf2Sync(passwd,user.key,100000,64,'sha512').toString('hex'))
                if(crypto.pbkdf2Sync(passwd,user.key,100000,64,'sha512').toString('hex') == user.passwd){
                    cb(0,{
                        msg: "success",
                        userinfo: user
                    });
                }
                else{
                    cb(1,{
                        msg: "wrong password"
                    });
                }

            }
        })
    }
}

module.exports = {
    user_model: new user_model()
}