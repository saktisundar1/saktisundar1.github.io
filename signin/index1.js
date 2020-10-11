var express = require('express')
var app = express()
var connectToDB = require("./db");
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false })) //middleware
// parse application/json
app.use(bodyParser.json())
connectToDB()

app.get('/connect', function(req, res) {
    res.send("OMG My route is also working")
})

 //it connects to our db

app.listen(5000, function () {
    console.log("OMG!! My Server is Running !!!")
})