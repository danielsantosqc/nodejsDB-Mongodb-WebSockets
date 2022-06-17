// const list = [];
const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.connect(`mongodb+srv://usuario_tester:usuariotester12345@clusterdeprueva.gpw9e.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'db_telegrom'
});
console.log('[db] Conectada con exito');

// get method
async function getMessages(filterUser) {
  let filter = {};
  if (filterUser.user !== undefined ) {
    filter = filterUser;
  }
    const getMessages = await Model.find(filter);

  // return list;
  return getMessages;
}


// post method
function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}


//patch method, hace un cambio o upadte solo en el mensaje 
async function updateTextMessages(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}



module.exports = {
  add: addMessage,
  list: getMessages,
  updateTextMessage: updateTextMessages
  //get
  //pudate
  //delete
}