const http = require('http');
const port = process.env.PORT || 3000
const express = require('express');
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
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// app.get('/', (req, res) => {
//     res.render('sign_in.ejs')
// })

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });

app.listen(port,() => {
    console.log(`Server running at port `+port);
  });