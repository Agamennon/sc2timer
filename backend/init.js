
var express = require('express');
var app = module.exports = express.createServer();
var config = require(__dirname +'/configuration.js').configurations(app, express);



require(__dirname +'/routes/main.js').main(app);


var port = process.env.PORT || 3000;
app.listen(port);
console.log("Servidor sc2 ouvindo porta %d modo %s .", app.address().port, app.settings.env);




