'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService.js');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middlewares/jwtAuth.js'); // Adjust path as needed


module.exports.calculate = function calculate (req, res, next, body, authorization) {
  // console.log("User ID from token:", authorization.id);
  const operation = req.headers['operation'];
  // const token = req.headers.authorization?.split(' ')[1]; // "Bearer TOKEN"

  // console.log('calculate', req, res, body, authorization)
  Default.calculate(body,operation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
