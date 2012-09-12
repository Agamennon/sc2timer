exports.configurations = function(app, express,sessionStore){

    console.log('--- configurations ---');

    var self = this;

    app.configure(function() {

        app.set('views', __dirname + '/views');
        app.set('view engine', 'ejs');
        app.use(express.static(__dirname+'./../sc2timer'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);

    });


    app.configure('development', function(){
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

    });

    app.configure('production', function(){
        app.use(express.errorHandler());

    });


};





