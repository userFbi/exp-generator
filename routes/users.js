var express = require('express');
var router = express.Router();
const USER = require('../models/user');

/* GET users listing. */
router.get('/', async (req, res) => {

  const data = await USER.find()
  
  res.render('user.ejs', { user : data });
});

module.exports = router;
