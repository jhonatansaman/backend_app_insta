const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

// routes.get('/posts', PostController.index);
routes.post('/posts/buscar', PostController.buscar);
routes.get('/posts/show', PostController.showAll);
routes.post('/posts/buscarUser', PostController.buscarUser);
routes.post('/posts/buscarItem', PostController.buscarItem);
routes.post('/posts/adicionarItem', PostController.addItem);
routes.post('/posts', upload.single('image'), PostController.store);

// routes.post('/posts/:id/like', LikeController.store)

module.exports = routes;