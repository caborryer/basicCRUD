const router = require("express").Router();
const pool = require('../db/connect')

const userControllers = require("./controllers");


const user = new userControllers();

router.route('/registro').post(user.save);


router.get('/add', (req,res) => {
  res.send('Hello')
})





module.exports = router;
