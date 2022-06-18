const db = require('mongoose');

const configDB = require('./config_db');
//db.connection.close();
// db.connection.close(function (){
//   console.log("desconectado con exito");  
// });
//db.disconnect();
db.Promise = global.Promise;

async function connect() {
	await db.connect(configDB.database, configDB.config);
	console.log('[db] Conectada con exito');
}

module.exports = connect;