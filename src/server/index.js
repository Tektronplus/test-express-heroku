//Dependeces
const express = require("express");
const cors = require('cors');
const app = express();

const path = require('path');

app.use(cors());

console.log(path.join(__dirname, '../front-end'))

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../front-end')})
});

app.get('/second-page', function(req, res) {
    res.sendFile('second-page.html', { root: path.join(__dirname, '../front-end')})
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Web server started on port ${PORT}`));
