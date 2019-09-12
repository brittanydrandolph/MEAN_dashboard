const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/dashboard', {useNewUrlParser: true});
var WolfSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Wolf must have a name!"], minlength:3},
    age: {type: Number, required: [true, "Wolf must have an age!"], min:1},
    color: {type: String, required: [true, "Wolf must have a color!"], minlength: 3}}, {timestamps:true});
    const Wolf = mongoose.model("Wolf", WolfSchema);