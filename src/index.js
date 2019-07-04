const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://jhonatan:Peugeot2@cluster0-vkdmn.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true,
})

app.use((req,res, next) => {
    req.io = io;

    next();
})

app.use(bodyParser.json());

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes'));

server.listen(3333);