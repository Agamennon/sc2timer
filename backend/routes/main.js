/**
 * Rotas do express
 */
exports.main = function(app, teknaDM, pdf) {

//*************************************
    app.get('/', function(req, res) {
        res.render('../views/corpo', {});
        //res.render('corpo', {locais:{usuario:';;;;'} })
    });

    /**
     * post em /sessions para fazer o login
     * o usuario retornado por authenticate e colocado no na session (req.session.usuairo)
     * isso é que diferencia um usuario nao logado de um logado
     */
    app.post('/sessions', function(req,res){

        teknaDM.authenticate(req.body.login,req.body.senha, function(erro,usuario){
            if (!erro){
                req.session.usuario = usuario;

                res.send(usuario); //res.end deve ser texto


            } else {
                res.status(404);
                res.end(erro)

            }

        });
    });


    var fs = require('fs');


    app.post('/printingp', function(req,res){

      //  res.header('Content-Type','application/pdf');
        console.log(req.body);
        res.header('Content-Type','application/octet-stream');

    //    res.set('Content-Type','application/pdf');


        var PDFDocument = require('pdfkit');

        console.log('hello');



        var doc = new PDFDocument;
        doc.text('hello pdf world');
        doc.text('does this work?');
        // doc.write('guitest.pdf');

        this.geraPdf = function(callback){
            doc.output(function(out){
                callback(out);
            });

        };

        this.geraPdf(function(data){
            res.end(data, 'binary');
            console.log(res.body);
        });



      /*  fs.readFile('guitest.pdf', function(err,data){

            if(err) {
                console.error("Could not open file: %s", err);
                process.exit(1);

            }


      //     res.sendfile('guitest.pdf');

      //      res.end(data,'binary');

       //     res.send(new Buffer(pdf.geraPdf()));
            //res.end(pdf.geraPdf() , 'binary');



          //  console.log(data);

        });*/

    });


    app.get('/printing', function(req,res){

       // res.header('Content-Type','application/pdf');
       res.header('Content-Type','application/octet-stream');

        //    res.set('Content-Type','application/pdf');

        fs.readFile('guitest.pdf', function(err,data){

            if(err) {

                console.error("Could not open file: %s", err);
                process.exit(1);

            }

            //res.sendfile('guitest.pdf');
                res.end(data, 'binary');

            /* res.writeHead(200, {
             'Content-Type': 'application/pdf'
             });
             res.end(out, 'binary');*/


          //  console.log(data);

        });

    });




    /**
     * logout do usuario
     */
    app.get('/sessions/delete', function(req, res) {
        delete req.session.usuario;
        console.log('sessao deletada');
        //  res.redirect('back');
        res.redirect('/');

    });



//ERROR HANDLING ********************************

    app.use(function(req, res, next){
// respond with html page
        if (req.accepts('html')) {
            res.status(404);
            res.render('../views/erro', { layout: true , url: req.url });
            return;
        }

// respond with json
        if (req.accepts('json')) {
            res.send({ error: 'Não encontrado' });
            return;
        }
// default to plain-text. send()
        res.send('Não encontrado');
    });

//************************************************





};

