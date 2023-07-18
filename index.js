const express = require('express')
const app = express()

var bodyParser = require('body-parser')
const mongoose = require('mongoose')


const route = require('./route/routes.js');
const port = 3000
const uri = 'mongodb+srv://sonumonu:sonumonu@cluster0.ve68i.mongodb.net/mytestone';
mongoose.connect(uri, {
  serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err.reason));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
