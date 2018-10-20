// config 
const config = require('./models/config')

// primitive
const Sequelize = require('sequelize')
const path = require('path')
const fs = require('fs')

// database 
class db {
    constructor(){
        // database connection
        /**
         * Notice: 
         * 
         * here use heroku config - JAWSDB 
         * 
         * (using config file)
         * 
         */
        const sequelize = new Sequelize(config.name,config.account,config.passwd,{
            host: config.host,
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            operatorsAliases: false
        });

        // Schema define
        // ================================================== User Schema ==================================================
        /** 
         * User
         * 
         * @param {string} invitecode:  邀請碼，之後用來做成邀請連結
         * @param {string} title:       使用者角色 (admin,normal,manager...)
         * @param {string} username:    使用者帳號
         * @param {string} passwd:      使用者密碼（已經過 hash & salt 處理）
         * @param {string} key:         使用者 hash & salt 的 salt
         * 
         */
        this.User = sequelize.define('user',{
            invitecode: Sequelize.STRING,
            title: Sequelize.STRING,
            team: Sequelize.STRING,
            username: Sequelize.STRING,
            passwd: Sequelize.STRING,
            key: Sequelize.STRING
        });

        // test connection
        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });

        // sync with database
        sequelize.sync();
    }
}

module.exports = {
    db: new db()
}