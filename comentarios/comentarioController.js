const mysqlConnection = require('../db/connect');


class comentarioController {
  constructor() {
  }

  async guardar(req, res) {
    try {
      let {descripcion} = req.body;

      await mysqlConnection.query('INSERT INTO comentarios SET ?', {descripcion});

      res.status(200).json({auth: true, message: 'Coemtario enviado exitosamente'});

    } catch (err) {
      console.log(err)
      res.status(500).json({message: "Error: " + err.toString()});
    }

  };

  async obtenerComentarios(req, res) {

    await mysqlConnection.query('SELECT * FROM comentarios', (err, rows, fields) =>{
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

  async obtenerComentario(req, res) {
    let {id} = req.params;

    await mysqlConnection.query('SELECT * FROM comentarios where comentario_id = ?', [id], (err, rows, fields) =>{
      if(!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
        res.status(500).json({message: "Error: " + err.toString()});
      }

    });

  };

}


module.exports = comentarioController;
