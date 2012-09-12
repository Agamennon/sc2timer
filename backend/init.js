
var express = require('express')
    , request = require('request')
    , MemoryStore = express.session.MemoryStore
    , sessionStore = new MemoryStore();

var app = module.exports = express.createServer();

var couch = require(__dirname +'/database/couch.js').init(request);
var config = require(__dirname +'/configuration.js').configurations(app, express,sessionStore);
var tekna = require(__dirname +'/database/teknaDM.js').init(couch).use(config);
var pdf = require(__dirname +'/printing/pdf.js').init();

var io = require('socket.io').listen(app);

require(__dirname +'/routes/main.js').main(app, tekna, pdf);



require(__dirname +'/socket/authorization.js').init(io,sessionStore);
require(__dirname +'/socket/socketDMAdapter.js').init(io,tekna);



var port = process.env.PORT || 3000;
app.listen(port);
console.log("Servidor Tekna ouvindo porta %d modo %s .", app.address().port, app.settings.env);




