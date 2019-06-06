
// post请求案例


"use strict"

var express = require('express');

var router = express.Router();

var async = require('async');

var res_format = require('../controllers/respone_format');

// 导入querystring模块，解析post的请求数据
var querystring = require('querystring');


router.post('/index',function(req,res){


    // post请求参数解析（分解请求流程）
    // （1）给req请求注册接收数据data事件（该方法会执行多次，需要我们手动累加二进制数据）
    // 如果表单数据量越多，则发送的次数越多，如果比较少，可能一次就发过来了
    // 所以接收表单数据的时候，需要通过监听 req 对象的 data 事件来取数据
    // 也就是说，每当收到一段表单提交过来的数据，req 的 data 事件就会被触发一次，同时通过回调函数可以拿到该 段 的数据
    // （2）给req请求注册完成接收数据end事件（所有数据接收完成会执行一次该方法）

    try{
  
        console.log(req.body);
        let _body = req.body;
        if (!_body.name) {
            let _result = res_format.response_without_request({
                cmd: "getData/index",
                msg: "name is null", 
            });

            res.json(_result);
            return;
        }
        if(!_body.id){
            let _result = res_format.response_without_request({
                cmd: "getData/index",
                msg: "id is null",
            });

            res.json(_result);
            return;
        }

        var re = /^[1-6]{1}$/;
        if(!re.test(_body.id)){
            throw "id err"; ;    //throw可以把报错信息抛到catch中
        }


        let _result = res_format.response_format({
            cmd: "getData/index",
            msg: "success",
            result:{
                name:_body.name,
                id:_body.id
            }
        });

        res.json(_result);

        
    }catch(e){
        console.log(e)
        let _result = res_format.response_error_system({
            cmd: "getData/index",
            msg: e,
            result:{

            }
        });

        res.json(_result);
    }
    

})

module.exports = router;