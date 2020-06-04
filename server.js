const express = require('express'); // retorna uma função

const app = express(); // chamando a função

app.listen(3000 , function () {
   console.log("Servidor rodando na porta 3000");
    
});

app.get('/' , function (req , res ) {
    res.send(`
             <html>
                     <head>
                         <meta charset = "utf-8">
                     </head>
                     <body>
                         <h1>Casa do codigo</h1>
                     </body>
                </html>
    
    `);
}); // representa o metodo http

app.get('/livros' , function (req , res ) {
    res.send(`
             <html>
                     <head>
                         <meta charset = "utf-8">
                     </head>
                     <body>
                         <h1>Listagem de livros</h1>
                     </body>
                </html>
    
    `);
});

// const http = require('http');

// const servidor = http.createServer(function (req , res) {

//     //buscando a url que foi solicitada 

//     let html = ''
//     if (req.url == '/') {
//         html = `
//                 <html>
//                     <head>
//                         <meta charset = "utf-8">
//                     </head>
//                     <body>
//                         <h1>Casa do codigo</h1>
//                     </body>
//                 </html>

//         `
//     }else if (req.url == '/livros') {
//         html = `
//                 <html>
//                     <head>
//                         <meta charset = "utf-8">
//                     </head>
//                     <body>
//                         <h1>livros</h1>
//                     </body>
//                 </html>

//         `
//     } 

//     res.end(html);
// });

// // colocando a porta 
// servidor.listen(3000);

