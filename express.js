

class ExpressServer {
    constructor(name) {
        this.name = name;
        this.serverConfig = {};
    }

    listen(port, callback) {
        this.port = port;
        if (this.serverConfig['view engine'] === 'ejs') {
            // use ejs as template engine
            console.log('this server is using ejs');
            var ejs = require('./ejs');
            ejs();
        } else if (this.serverConfig['view engine'] === 'ejs2') {
            console.log('this server is using ejs2');
            var ejs2 = require('./ejs2');
            ejs2();

        }
        callback();
    }

    set(key, value) {
        this.serverConfig[key] = value;
    }
}

var name = 0

function express() {
    var server = new ExpressServer(name);
    name++;
    return server;
}
 module.exports = express;