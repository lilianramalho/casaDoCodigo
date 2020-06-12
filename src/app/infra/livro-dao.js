class LivroDAO{
    constructor(db) {
        this._db = db;
    }

    adiciona(livro){
        return new Promise((resolve , reject) => {
            this._db.run(
                `INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                ) values (? , ? , ?)`,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                (err) => {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível cadastrar o livro');   
                    }
                }
            )
        });
    }

    buscaPorId(id){
        return new Promise((resolve , reject)  => {
            this._db.all(
                'SELECT * FROM livros WHERE id = ' +id, 
                (erro , resultados) => {
                    if (erro) return reject('Não foi possível buscar livro');

                    return resolve(resultados);
                }
            )
        });
    }

    atualiza(livro){
        return new Promise((resolve , reject) => {
            this._db.run(
                'UPDATE FROM livros SET titulo = ? , preco = ? , descricao = ? WHERE id = ? ',
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao,
                    livro.id
                ],
                (err) => {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível atualizar livros');
                    }
                }
            )
        });
    }

    deletar(id){
        return new Promise((resolve , reject) => {
            this._db.run(
                'DELETE FROM livros WHERE id = '+id,
                (err) => {
                     if (err) {
                        console.log(err);
                        return reject('Não foi possível deletar livros');   
                    }
                }
            )
        });
    }

    lista(){
        return new Promise((resolve , reject ) => {
             this._db.all(
                'SELECT * FROM livros',
                (erro , resultados) => {
                    if (erro) return reject('Não foi possível listar os livros');

                    return resolve(resultados);
                }
            )
        })
           
    }
}

module.exports = LivroDAO;