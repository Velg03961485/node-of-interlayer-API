

var express = require('express');

var router = express.Router();

router.get('/indexData',function(req,res){
    console.log(global.global_url.urlData.dataInfo)
})

module.exports = router;