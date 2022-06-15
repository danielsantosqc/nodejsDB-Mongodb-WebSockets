exports.success = function (req, res, message, status) {
  // res.send('Primera respuesta');
  res.status(status || 200).send({
    error: '',
    body: message,
  });
}

exports.error = function (req, res, message, status, detailsError) {
  console.error("[REsponse error of details error ]" + detailsError);
  res.status(status || 500).send({
    error: message,
    body: ''
  });
}