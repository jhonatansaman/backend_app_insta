const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'nodemysql'
});

db.connect((err) => {
    if (err) {
        throw err;

    }
    console.log('Mysql Connected');

})


module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);
    },

    async store(req, res) {
        const { title, body } = req.body;

        console.log("title: ", title);

        var post = { title: `${title}`, body: `${body}` };
        var query = db.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
            if (error) throw error;
            // Neat!
        });
        console.log(query.sql);
        return res.json(post);
    },


    async buscar(req, res) {
        const { siape, senha } = req.body;

        console.log("req body: ", req.body);

        var query = db.query('SELECT * FROM usuario WHERE `siape` = ? AND `senha` = ?',[siape, senha], function (error, results, fields) {
            if (error) throw error;
            // Neat!
            if(results.length > 0){
                console.log(results);
                res.json(1);
            }
            else{
                res.json(0);                
            }
            
        });
    },

    async buscarUser(req, res) {
        const { siape } = req.body;
        
        var query = db.query('SELECT * FROM usuario WHERE `siape` = ?',[siape], function (error, results, fields) {
            if (error) throw error;
            // Neat!
            if(results.length > 0){
                console.log(results);
                res.json(results)
            }
            else{
                res.json(0);                
            }
            
        });
    },

    async addItem(req, res) {

        const { nome, quantidade } = req.body;

        var post = {nome: `${nome}`, quantidade: quantidade};

        var query = db.query('INSERT INTO estoque SET ?', post, function (error, results, fields) {
            if (error) throw error;
            // Neat!

            console.log("results: ", results);
            
            if(results.length > 0){
                console.log(results);
                res.json(1)
            }
            else{
                res.json(0);                
            }
            
        });
    },


    async showAll(req, res) {

        var query = db.query('SELECT * FROM estoque',function (error, results, fields) {
            if (error) throw error;
            // Neat!

            console.log("results: ", results);

            if(results.length > 0){
                console.log(results);
                res.json(results)
            }
            else{
                res.json(0);                
            }
            
        });
    },


    async buscarItem(req, res) {

        const { nome } = req.body;
       
        var query = db.query('SELECT * FROM estoque WHERE `nome` like ?', '%' + [nome] + '%', function (error, results, fields) {
            if (error) throw error;
            // Neat!

            console.log("results: ", results);

            if(results.length > 0){
                console.log(results);
                res.json(results)
            }
            else{
                res.json(0);                
            }
            
        });
    }

}