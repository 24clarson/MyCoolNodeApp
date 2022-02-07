const http = require('http');
const port = process.env.PORT || 3000
const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const path = require('path');
const lessons = require("./lessons.js")

app.use(express.static( path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/header.html', (req, res) => {
    res.render('lessonTemplate.ejs', lessons.header)
})

app.get('/paragraph.html', (req, res) => {
    res.render('lessonTemplate.ejs', lessons.paragraph)
})

app.get('*', (req, res) => {
    res.render('sign_in.ejs')
})

app.listen(port,() => {
    console.log(`Server running at port `+port);
});

var gmail = "24me@cpsd.us"

var MongoClient = require('mongodb').MongoClient;
var url = "process.env.mongodb+srv://mango:MangoesAreGood@scores.nyroz.mongodb.net/scores?retryWrites=true&w=majority";


app.post('/score', (request, response) => {
    console.log(request.body);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("scores").find({email: gmail}).toArray(function(err, res) {
            var userExists = false
            if (res.length > 0) {
                userExists = true;
            }
            if (userExists) {
                var newValues = { $set: { score: request.body } };
                dbo.collection("scores").updateOne({email: gmail}, newValues, function(err, res) {
                    if (err) throw err;
                    db.close();
                });
            }
            if (!userExists) {
                var myobj = {email: gmail, score: request.body};
                dbo.collection("scores").insertOne(myobj, function(err, res) {
                    if (err) throw err;
                    db.close();
                });
            }
        });    
    });
    response.end();
});
