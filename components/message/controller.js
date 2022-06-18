const store = require('./store');




function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}



function addMessage(user, message) {
  return new Promise(
    (resolve, reject) => {
      if (!user || !message) {
        console.error('[messageController] No hay usuarios o mensaje');
        return reject('Los datos son incorrectos');
      }
      const fullMessage = {
        user: user,
        message: message,
        date: new Date(),
      }
      // console.log(fullMessage);
      store.add(fullMessage)


      resolve(fullMessage);
    }
  );
}

//aqui hace la lectura de la url, la direccion thhp y el id a cambiar el mensaje
//y si todo correcto lo envia a store.js
function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    console.log(id);
    console.log(message);
    if (!id || !message) {
      reject('Invalid Data | Dato invalido');
      return false;
    }
    const result = await store.updateTextMessage(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    console.log('paso por la funcion deleteMessaje en el controller.js');
    if (!id) {
      reject('Id invalido');
      return false;
    }
    store.remove(id)
      .then(() => {
        resolve();
      }).catch(e => {
        reject(e)
      });
  });
  
}


module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
}
