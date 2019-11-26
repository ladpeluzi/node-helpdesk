class ChamadoDao {

    constructor(db) {
        this._db = db;
    }
    
    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM chamados',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os livros!');
                    return resolve(resultados);
                }
            )
        });
    }
}

module.exports = ChamadoDao; 
