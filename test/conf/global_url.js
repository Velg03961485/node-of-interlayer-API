// 此处是全局请求第三方地址

var global_url = function(){

}

// 全局请求变量
// 全局变量必须在请求事件里面输入，不能直接在js中输入
global_url.prototype.urlData = {
    storeList:'http://crm.ibetwo.com:8030/common/getStrore',
    dataInfo:'http://crm.ibetwo.com:8030/campaign/getById',
};



// 全局请求反参
global_url.prototype.output=function(){
	return {
		'success':{
			'status':1,
			'data':'',
			'message':'operate success',
		},
		'fail':{
			'status':0,
			'data':'',
			'message':'operate fail',
		},
	}
}


// 抛出
module.exports = new global_url();

