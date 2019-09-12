//IMPORTS
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const session = require("express-session")
const flash = require("express-flash")

//CONFIGS
app.use(flash());
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.use(session({
    secret: "bwe9uerejfnoqubfq9urhf0qhrh",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

//DATABASE
mongoose.connect("mongodb://localhost/dashboard");
require("./server/configs/mongoose");

//ROUTES
require('./server/configs/routes')(app)

//LISTENING PORT    
app.listen(1337, function(){
    console.log("Listening on port: 1337");
})