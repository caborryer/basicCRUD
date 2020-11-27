const mysqlConnection = require('../db/connect');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const { encryptPassword, decryptPassword } = require("../utils/bycript");
const config = require('../utils/config');

class usuarioController {
  constructor() {
  }

   guardar(req, res) {
    try{
      let {usuario, contrasenia, nombre, apellido, correo, confirmarContrasenia} = req.body;

      mysqlConnection.query('SELECT correo FROM usuarios WHERE correo = ?', [correo], async (err, data) =>{
        if(err) {
          console.log(err);
          res.status(500).json({error: 'an error occurred'});
        }
        if(data.length > 0) {
          //res.status(200).json({message: 'Este correo ya esta en uso'});
          //return res.message('register', {
          //message: 'Este correo ya esta en uso'
          //})
          console.log('Este correo ya esta en uso')
        } else if( contrasenia !== confirmarContrasenia) {
          //return res.render('register', {
          // message: 'La contrasenia no coincide'
          //});
          console.log('La contrasenia no coincide')
        }
        let hashPassword = await encryptPassword(contrasenia);

        await mysqlConnection.query('INSERT INTO usuarios SET ?',
          {usuario:usuario, contrasenia:hashPassword, nombre:nombre, apellido:apellido, correo:correo}, (err, data) => {
            if(err) {
              console.log(err)
            } else {
              console.log(data)
              console.log('Usuario registrado')
            }

          });

      });

      res.status(200).json({ auth: true, message: 'Usuario registrado exitosamente' });

    } catch (err) {
      console.log(error)
      res.status(500).json({ message: "Error: " + err.toString() });

    }
  };

  async login(req, res) {
    try {
      const {correo, contrasenia} = req.body;

      if(!correo || !contrasenia ) {
        console.log('por favor escribe un correo o contrasenia validos')
        return res.status(400).json({message: 'por favor escribe un correo o contrasenia validos'})
      }

      mysqlConnection.query('SELECT * FROM usuarios WHERE correo = ?', [correo], async (err, data) =>{
        console.log(data)


        if(!data || !(await bcrypt.compare(contrasenia, data[0].contrasenia))){
            res.status(401).json({message: 'El correo o la contrasenia son incorrectos'})
        } else {
          const id = data[0].id;
          const token = jwt.sign({id}, config.secretAuthKey, {
            expiresIn: 60 * 60 * 365
          });
          console.log(token);
          const cookieOptions = {
            expires: new Date(
              Date.now() + 90 * 24 * 60 * 60 * 1000
            ),
            httpOnly:true
          }
          res.cookie('jwt', token, cookieOptions);
          res.status(200).json({message: 'todo es correcto'})
        }

      })

    } catch(error) {
      res.status(500).json({ message: "Error: " + err.toString() });

    }
  }

}

module.exports = usuarioController;
