const mongoose = require('mongoose');

const newuser = mongoose.Schema({

    name:{type:String, required: true},
    email:{type:String, required: true},
})

const newusers = mongoose.model("user",newuser);
module.exports = newusers