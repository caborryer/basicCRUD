const bcrypt = require("bcryptjs");


encryptPassword = async contrasenia => {
  return bcrypt.hash(contrasenia, 10);
};

decryptPassword = async (contrasenia, hashPassword) => {
  return bcrypt.compareSync(contrasenia, hashPassword);
};

module.exports = { encryptPassword, decryptPassword };
