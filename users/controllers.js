const jwt = require("jsonwebtoken");
const pool = require('../db/connect')

const { encryptPassword, decryptPassword } = require("../utils/bycript");


class usuarioController {
  constructor() {}

  async save (req, res, next) {
    try {
      let {usuario, contrasenia, nombre, apellido, correo} = req.body;
      contrasenia = await encryptPassword(contrasenia);
      //const newUsuario = {usuario, contrasenia, nombre, apellido, correo};

     await pool.query('INSERT INTO usuarios set ?', {usuario, contrasenia, nombre, apellido, correo});

      res.status(200).json({ auth: true });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error: " + err.toString() });
      }

    };




}

module.exports = usuarioController;
