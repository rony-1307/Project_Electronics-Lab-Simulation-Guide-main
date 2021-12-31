const path = require('path');
const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('mongodb');
const cors = require('cors');
const mongoose = require('mongoose');


console.log(mongodb)

const frontRoute = require('./routes/front');
// const homeRoute = require('./routes/hom)e');
//const receipeRouter = require('./routes/receipies');

const db = require('./utils/db');
const mongoConnect = require('./utils/db');
console.log("DB: " + db);

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../')));

app.use(frontRoute);


app.use('/',(req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, '../', '404.html'));
})


const server = http.createServer(app);


mongoConnect(client => {
    console.log(client);
    server.listen(3000);
})

server.listen(3000);