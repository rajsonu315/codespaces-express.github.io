const express = require('express')

const route = express.Router();

const usercontroller = require('../controller/usercontroller.js')

route.post('/',usercontroller.create);
route.get('/',usercontroller.alluser);

module.exports = route