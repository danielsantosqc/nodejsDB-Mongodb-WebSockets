// const list = [];
const db = require ('mongoose');
const Model = require('./model');
db.Promise = global.Promise;

db.connect(`mongodb+srv://db_user_telegrom:facilito12345@cluster0.gpw9e.mongodb.net/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'telegrom'
});
console.log('[db] Conectada con exito');


function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  // return list;
  const getMessages = await Model.find();
  return getMessages;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  //get
  //pudate
  //delete
}