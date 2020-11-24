const router = require("express").Router();
const pool = require('../db/connect')


router.get('/', (req,res) => {
  res.send('Hello')
})





module.exports = router;
