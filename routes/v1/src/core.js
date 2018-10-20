const user = require('./modules/user')
const credit = require('./modules/credit')
const project = require('./modules/project')

// standalone core structure
class core {
    constructor(){
        this.user = new user()
        this.credit = new credit()
        this.project = new project()
    }
}

module.exports = {
    core: new core()
}