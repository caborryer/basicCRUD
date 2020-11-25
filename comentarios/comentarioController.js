const mysqlConnection = require('../db/connect');


class comentarioController {
  constructor() {
  }

  async guardar(req, res) {
    try {
      let {descripcion} = req.body;

      await mysqlConnection.query('INSERT INTO comentarios SET ?', {descripcion});

      res.status(200).json({auth: true, message: 'Coemtario enviado exitosamente'});

    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Error: " + error.toString()});
    }

  };

  async obtenerComentarios(req, res) {

    await mysqlConnection.query('SELECT * FROM comentarios', (err, rows, fields) =>{
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }

    });

  };

}


module.exports = comentarioController;
