var express = require('express');
var router = express.Router();
const USER = require('../models/user');
let UC = require('../controller/user')

router.get('/', UC.viewPage)
router.get('/createData', UC.createData)
router.get('/deleteData/:deleteId', UC.deleteData)
router.get('/editData/:editId', UC.editData)

module.exports = router;