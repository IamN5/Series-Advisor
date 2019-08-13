const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://seriesadv:seriesadv@sa-yleut.mongodb.net/SAdv?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);