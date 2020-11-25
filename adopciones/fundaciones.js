const pool = require('../db/connect')


class fundacionController {
  constructor() {
  }

  async guardar(req, res) {
    try {
      let {nombre, direccion, telefono} = req.body;

      await pool.query('INSERT INTO fundaciones SET ?', {nombre, direccion, telefono});

      res.status(200).json({auth: true, message: 'Fundacion registrada exitosamente'});

    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Error: " + err.toString()});
    }

  };

  async mostrarFundaciones(req, res) {
    try {
      await pool.query('SELECT * FROM fundaciones', fundacion);

      console.log('regresaste', fundacion)

    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Error: " + err.toString()});
    }

  };



}

module.exports = fundacionController;
