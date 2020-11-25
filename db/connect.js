const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  connectionLimit: 10,
  host: 'baqobyesfgdnf1oled8c-mysql.services.clever-cloud.com',
  user: 'uq3b9r6nzeaxaahz',
  password: 'kFAuUPPeJAAcQSBkTRLE',
  database: 'baqobyesfgdnf1oled8c',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
