const express = require("express")
const router = express.Router()
var users = require('./db')
var User = require("./index.html")

router.post('/', function (req, res) {
    var data = req.body;

    var newUser = new User()
    newUser.Name = data.Name
    newUser.Password = data.Password

    newUser.save()
    .then(function(sucres){
        res.status(200).send(newUser)
    })
    .catch(function(err){
        const e = { message : 'User cannot be saved' , error : err}
        res.status(400).send(e)
    })
})
//GET POST PUT PATCH DELETE
router.get('/', function (req, res) {
    User.find()
    .then(function(users){
        res.status(200).send(users)
    })
    .catch(function(err){
        res.status(400).send('No user with the given name')
    })  
})

router.get('/:id', function (req, res) {
    var id = req.params.id
    User.findById(id)
    .then(function(user){
        res.status(200).send(user)
    })
    .catch(function(err){
        res.status(400).send('Not able to fetch the user')
    })
})

module.exports = router