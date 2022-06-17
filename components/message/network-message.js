const express = require('express');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//rotess.............

// method get to http
router.get('/', function (req, res) {

  // aqui hace el control de que es lo que traera el get, dando lectura a la URL(http://localhost/messages)
  const filterMessages = {
    user: req.query.user,
    // message: req.query.message,
  } || null;

  console.log(filterMessages);
  controller.getMessages(filterMessages)
    .then((messaList) => {
      response.success(req, res, messaList, 200);
    })
    .catch(e => {
      response.error(req, res, 'Error inesperado- Unexcepted error', 500, e);
    });


  console.log("message from GET");
})

// method post to http 
router.post('/', function (req, res) {

  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, 'Informacion Invalida', 400, ' Error en el controller');
    });
  console.log("message from POST");
});


//methos patch to http (para realizar cambios parciales)
router.patch('/:id', function (req, res){
  console.log(req.params.id)

  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, 'Error interno', 500, e)
    });


  // res.send('Ok');
} )




router.delete('/', function (req, res) {
  console.log(req.body);
  console.log(req.query);
  // res.send("message delet");
  response.success(req, res, 'message DELETE ok doki...')

  console.log("delete........ rom DELETE");
})



module.exports = router;