const bcrypt = require("bcryptjs");


encryptPassword = async password => {
  return bcrypt.hashSync(password, 10);
};

decryptPassword = async (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = { encryptPassword, decryptPassword };
