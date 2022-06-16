const express = require('express');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//rotess.............
router.get('/', function (req, res) {
  // console.log(req.headers);
  // res.header({
  //   "custom-header": "Nuestro valor personalizado",
  // });

  // response.success(req, res, 'Lista de mensajes',200)

  controller.getMessages()
    .then((messaList) => {
      response.success(req, res, messaList, 200);
    })
    .catch(e => {
      response.error(req, res, 'Error inesperado- Unexcepted error', 500, e);
    });


  console.log("message from GET");
})

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

router.delete('/', function (req, res) {
  console.log(req.body);
  console.log(req.query);
  // res.send("message delet");
  response.success(req, res, 'message DELETE ok doki...')

  console.log("delete........ rom DELETE");
})



module.exports = router;