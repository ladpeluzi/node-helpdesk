const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('chamados.db');
module.exports = bd;