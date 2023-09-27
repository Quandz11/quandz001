var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fpthn', (req,res) =>{
  //single array
  var bk = ["Ăn thùng", "Uống vại", "Lầm lì"];
  //multiarray
  var capital = [['vietnam', 'hanoi'], ['thailan', 'bangkok'], ['singapore', 'singapore'], ['malaysia', 'kualalumpure']];
  var images = 'kien.jpg';
  res.render('fpt', {fpt: "Bach Kien", year : "2003", bk : bk, images : images, capital : capital});
});

router.get('/', (req,res)=>{
  res.render('login')
})
router.post('/login', (req, res)=>{
  //save data to $data
  var data = req.body;
  //validate
  var username = data.username;
  var password = data.password;
  if(username == 'admin@gmail.com' && password =='123456'){
    res.redirect('/fpthn')
  }else{
    res.redirect('/')
  }

})
module.exports = router;
