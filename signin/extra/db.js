const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect('mongodb+srv://FinalProject:FinalProject@cluster0.263xq.mongodb.net/testFinalProject?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
}
module.exports = connectToDB
