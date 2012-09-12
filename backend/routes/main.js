
exports.main = function(app) {

    app.get('/', function(req, res) {
        res.render('../views/corpo', {});

    });


};

