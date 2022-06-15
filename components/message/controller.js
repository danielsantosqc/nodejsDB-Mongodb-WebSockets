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
        data: new Date(),
      }
      console.log(fullMessage);
      resolve(fullMessage);
    }
  );
}

module.exports = {
  addMessage,
}