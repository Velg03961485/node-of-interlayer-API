var express = require('express');

var router = express.Router();

// var Class = require('../controllers/post')

var async = require('async');

var request = require('request');



router.get('/getClassList',function(req, res, next){
    // var output=output();
    console.log(global.global_url.urlData.dataInfo)
    try{
        async.waterfall([function(callback){
            // 第一个请求函数
            request({
                url:global.global_url.urlData.storeList,
                method:'POST',
            },function(error, response, body){
                
                if (!error && response.statusCode == 200) {
                    var _data = JSON.parse(body)
                    //输出返回的内容
                    console.log(body);
                    
                    console.log(_data.data)
                    // res.json({
                    //     status:100,
                    //     msg:'请求成功',
                    //     data:_data.data,
                    // })
                    callback(null,_data.data) 
                }else{
                    // 如果返回错误，这回调应该返回一个空
                    callback(null,'') 
                    // res.json({
                    //     status:500,
                    //     msg:_data.message,
                    // })
                }
            })


        },function(data1,callback){
            console.log(data1);
            request({
                url:global.global_url.urlData.dataInfo,
                method:'POST',
                data:{
                    id:1
                },
            },function(error, response, body){
               //输出返回的内容
               console.log(body);
               
               var results={};
                if (!error && response.statusCode == 200) {
                    var _data = JSON.parse(body);
                    console.log(_data.data)
                    // res.json({
                    //     status:100,
                    //     msg:'请求成功',
                    //     data:_data.data,
                    // })
                    
                    results.storeData=data1;
                    results.next1=_data.data;

                    callback(null,results);

                }else{
                
                    results.storeData=data1;
                    results.next1='';

                    callback(null,results);
                    // res.json({
                    //     status:500,
                    //     msg:_data.message,
                    // })
                }
            })
        }],function(err,results){
            if (err) {  
                console.log(err);  
            } 
            console.log(results);
            // output.success.data=results;
            // res.json(output.success)
            res.json({
                status:200,
                msg:'',
                data:results
            })
        })

    }catch(e){
        console.log(e);
        res.json({
            status:400,
            msg:'系统错误',
        })
    }

    
    
})

module.exports = router;