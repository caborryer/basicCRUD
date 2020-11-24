const bcrypt = require("bcryptjs");


encryptPassword = async contrasenia => {
  return bcrypt.hash(contrasenia, 10);
};

decryptPassword = async (contrasenia, hashContrasenia) => {
  return bcrypt.compareSync(contrasenia, hashContrasenia);
};

module.exports = { encryptPassword, decryptPassword };
