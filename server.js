const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./db');
// const router = require('./components/message/network')
const router = require('./network/routes');

// connect to database 
dbConnection();

let app = express();

// la respuesta se encuentra en el request (req)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// la respuesta se encuentra en el response (res)
// app.use(router)
router(app);




// servidor de artchivos estaticos (html, css, js...)
app.use('/app',express.static('public'));


app.listen(3000);
console.log("La aplicacion es escuchando en http://localhost:3000");