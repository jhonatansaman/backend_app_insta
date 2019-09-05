const db = require('../db/connect');

module.exports = {
  
    async buscar(req, res) {
        var query = db.query('SELECT * FROM course', function (error, results, fields) {
            if (error) throw error;
            if(results.length > 0){
                console.log(results);
                res.json(results);
            }
            else{
                res.json(0);                
            }
            
        });
    },

    async buscarUser(req, res) {
        const { email, password } = req.body;

        console.log("req body: ", req.body);

        var query = db.query('SELECT * FROM user WHERE email = ? and password = ?',[email, password], function (error, results, fields) {
            if (error) throw error;
            // Neat!
            if(results.length > 0){
                console.log(results);
                res.json(results)
            }
            else{
                console.log(results);
                res.json(0);                
            }
            
        });
    },

    async buscarSemestres(req, res) {
        const { id_course } = req.body;

        var query = db.query('SELECT semestres FROM course WHERE id_course = ?',[id_course], function (error, results, fields) {
            if (error) throw error;
            if(results.length > 0){
                console.log(results);
                res.json(results)
            }
            else{
                console.log(results);
                res.json(0);                
            }
            
        });
    },

    async inserirTurma(req, res) {

        const { turma, horario, dia } = req.body;

        var post = {turma: `${turma}`, horario: `${horario}`,  dia: `${dia}`};

        var query = db.query('INSERT INTO turma_horario SET ?', post, function (error, results, fields) {
            if (error) throw error;

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
    }, 

    async buscarTurma(req, res) {

        const { course, semestre } = req.body;
       
        var query = db.query("SELECT id_turma, cod_turma, cod_disciplina, name_disciplina FROM turma WHERE course= ? AND semestre= ? limit 7", [course, semestre], function (error, results, fields) {
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


}