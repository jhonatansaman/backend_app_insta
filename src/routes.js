const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const PostController = require('./controllers/PostController');
const GetController = require('./controllers/GetController');

const routes = new express.Router();
const upload = multer(uploadConfig);

// posts
routes.post('/posts/buscar', PostController.buscar);
routes.post('/posts/buscarUser', PostController.buscarUser);
routes.post('/posts/buscarSemestres', PostController.buscarSemestres);
routes.post('/posts/buscarTurma', PostController.buscarTurma);
routes.post('/posts/inserirTurma', PostController.inserirTurma);
// routes.post('/posts/buscarItem', PostController.buscarItem);
// routes.post('/posts/adicionarItem', PostController.addItem);


module.exports = routes;