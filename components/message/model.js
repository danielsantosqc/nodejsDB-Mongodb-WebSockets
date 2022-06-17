const mongoose = require('mongoose');

const Schemaa = mongoose.Schema;

const mySchema = new Schemaa({
  user: String,
  message: {
    type: String,
    required: true
  },
  date: Date,
});

const model = mongoose.model('mensajitos', mySchema);

module.exports = model;