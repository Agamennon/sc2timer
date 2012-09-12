exports.configurations = function(app, express,sessionStore){

    console.log('--- configurations ---');

    var self = this;

    app.configure(function() {

        app.set('views', __dirname + '/views');
        app.set('view engine', 'ejs');
        app.use(express.static(__dirname+'./../tekna'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser());
        app.use(express.session({store:sessionStore, cookie: {expires: false}, secret:'express.sid', cookieKey:'express.sid', key:'express.sid'}));
        app.use(app.router);

    });

    self.config = {};

    app.configure('development', function(){
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
        self.config =  {
            db:'tekna',
            uri:'http://admin:123@localhost:5984',
            path:'http://localhost:3000'

        };

    });

    app.configure('production', function(){
        app.use(express.errorHandler());
        self.config =  {
            db:'tekna',
            uri:process.env.CLOUDANT_URL,
            path:'http://tekna.herokuapp.com'

        };
    });


    return self.config;


};





