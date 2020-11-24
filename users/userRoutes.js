const router = require("express").Router();
const pool = require('../db/connect')


router.get('/add', (req,res) => {
  res.send('Hello')
})





module.exports = router;
