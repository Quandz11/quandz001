var express = require('express');
var router = express.Router();
//hien thi form nhap
router.get('/', (req, res) =>{
    res.render('employees/add');
});

//show du lieu
router.post('/', (req, res) =>{
    res.render('employees/view', {employees : req.body});
});
module.exports = router;