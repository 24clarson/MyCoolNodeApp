const http = require('http');
const port = process.env.PORT || 3000
const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const path = require('path');
const lessons = require("./lessons.js")
app.use(express.json());
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


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://mango:MangoesAreGood>@scores.nyroz.mongodb.net/mydb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async err => {
  const collection = await client.db("mydb").collection("mycol");
  console.log("connected!")
  // perform actions on the collection object
  const doc = { name: "Neapolitan pizza", shape: "round" };
  const result = await collection.insertOne(doc);
  

  console.log("document inserted")
  client.close();
});


// var url = "mongodb://localhost:27017/";
// var gmail = "24me@cpsd.us"
// app.post('/score', (request, response) => {
//     console.log(request.body.test);
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("mydb");
//         dbo.collection("scores").find({email: gmail}).toArray(function(err, res) {
//             var userExists = false
//             if (res.length > 0) {
//                 userExists = true;
//             }
//             if (userExists) {
//                 var newValues = { $set: { score: request.body.test } };
//                 dbo.collection("scores").updateOne({email: gmail}, newValues, function(err, res) {
//                     if (err) throw err;
//                     db.close();
//                 });
//             }
//             if (!userExists) {
//                 var myobj = {email: gmail, score: request.body.test};
//                 dbo.collection("scores").insertOne(myobj, function(err, res) {
//                     if (err) throw err;
//                     db.close();
//                 });
//             }
//         });    
//     });
//     response.end();
// });
