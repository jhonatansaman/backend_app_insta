const multer = require('multer');
const path = require('path'); //library que vem nativa do node

module.exports = {
    storage: new multer.diskStorage({ // salvar fotos dentro da pasta uploads
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb) { // função para salvar com o nome original do arquivo
            cb(null, file.originalname);
        }
    })
}

