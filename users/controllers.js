const mysqlConnection = require('../db/connect')

const { encryptPassword, decryptPassword } = require("../utils/bycript");


class usuarioController {
  constructor() {}

  async guardar (req, res) {
    try {
      let {usuario, contrasenia, nombre, apellido, correo} = req.body;
      contrasenia = await encryptPassword(contrasenia);

     await mysqlConnection.query('INSERT INTO usuarios SET ?', {usuario, contrasenia, nombre, apellido, correo});

      res.status(200).json({ auth: true, message: 'Usuario registrado exitosamente' });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error: " + err.toString() });
      }

    };
  async login(req, res, done) {

    const usuario = await mysqlConnection.query('SELECT * FROM usuarios WHERE usuario = ?', {correo: correo});

    if (!usuario) {
      return res.status(404).send("El correo no existe")
    }
    console.log(contrasenia)
    await decryptPassword(contrasenia);



    res.json('logueado')

   //if (comparar) {
      //done(null, usuario, req.flash('success', 'Welcome ' + usuario.usuario));

   // } else {
     //return res.status(404).send({ auth: false, message: 'El usuario o contrasenia no coinsiden'});
    //}

  }








}

module.exports = usuarioController;
