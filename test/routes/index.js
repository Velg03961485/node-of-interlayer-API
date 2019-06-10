var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 使用hbs模板进行页面跳转
router.get('/index',function(req,res,next){
  res.render('index/index')
})

module.exports = router;
