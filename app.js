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
const http = require('http');
const port = process.env.PORT || 1234
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
client.connect(err => {
  const collection = client.db("mydb").collection("mycol");
  collection.insertOne({name: 'hello'})
  client.close();
});
