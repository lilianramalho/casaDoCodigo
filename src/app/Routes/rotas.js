const db = require('../../config/database');
const LivrosDAO = require('../infra/livro-dao');

module.exports = (app) => {

app.get('/' , function (req , res ) {
    res.send(`
             <html>
                     <head>
                         <meta charset = "utf-8">
                     </head>
                     <body>
                         <h1>Casa do código</h1>
                     </body>
                </html>
    
    `);
}); // representa o metodo http

app.get('/livros' , function (req , res ) {

const livrosDAO = new LivrosDAO(db);
    livrosDAO.lista()
        .then(livros =>  res.marko(
            require('../Views/Livros/Lista/lista.marko'),
                {
                    livros
                 }
            )).catch(error => console.log(error));


});

app.get('/livros/form/:id', function(req, resp) {
    const id = req.params.id;
    const livroDao = new LivroDao(db);

    livroDao.buscaPorId(id)
        .then(livro => 
            resp.marko(
                require('../views/livros/form/form.marko'),
                { livro: livro }
            )
        )
        .catch(erro => console.log(erro));

});

app.get('/livros/form' , function (req , res) {
    res.marko(require('../Views/Livros/Form/form.marko'))
});


app.post('/livros' , function (req , res) {
    const livrosDAO = new LivrosDAO(db);
    livrosDAO.adiciona(req.body)
        .then(res.redirect('/livros')).catch(error => console.log(error));
});

app.delete('/livros/:id' , function (req , res) {
    const id = req.params.id;
    const livrosDAO = new LivrosDAO(db);

    livrosDAO.deletar(id)
        .then(() => res.status(200).end())
            .catch(erro => console.log(erro));
});

}


