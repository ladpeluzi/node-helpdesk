const ChamadoDao = require('../infra/chamado-dao');
const db = require('../../config/database');



module.exports = (app) => {

    app.get('/', function(req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> chamados </h1>
                    </body>
                </html>
            `
        );
    });
    
    app.get('/chamados', function(req, resp) {

        const chamadoDao = new ChamadoDao(db);
        chamadoDao.lista()
                .then(chamados => resp.marko(
                    require('../views/chamados/lista/lista.marko'),
                    {
                        chamados: chamados
                    }
                ))
                .catch(erro => console.log(erro));

    });

    // app.get('/livros/form',function (req, resp) {
    //     resp.marko(require('../views/livros/form/form.marko'));
    // });

    // app.post('/livros', function (req,resp) {
    //    console.log(req.body); 

    //    const livroDao = new LivroDao(db);
    //    livroDao.adiciona(req.body)
    //            .then(resp.redirect('/livros'))
    //            .catch(erro => console.log(erro));

    // });

};