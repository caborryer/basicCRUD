const bcrypt = require("bcryptjs");


encryptPassword = async contrasenia => {
  return bcrypt.hash(contrasenia, 10);
};

decryptPassword = async (contrasenia, hashContrasenia) => {
  try {
    return await bcrypt.compareSync(contrasenia, hashContrasenia);
  } catch (e){
    console.log(e)
  }

};

module.exports = { encryptPassword, decryptPassword };
