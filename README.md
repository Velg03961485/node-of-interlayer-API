# node-of-interlayer-API
make interlayer API By node.js

## 依赖

请使用

```
npm install
```

## 依赖解析

1.express框架 -外部


2.request封装请求框架（调用第三方）-外部


3.async 处理异步请求的插件 -外部


3.body-parser POST请求依赖 -内部


4.conf/global_url  第三方API -内部


5.controllers/respone_format  返回结果封装函数 -内部



## POST调用-（Postman）


在Body中，选择 x-www-form-urlencoded

参数写在这一块的下面


## 启动


```
npm start
```


启动的文件是在bin/www

接口方式为 路由 

监听的接口 为 3000  可以在www文件中修改


```
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
```

## 编写新的接口


1.在routers文件夹下创建js文件（可以自己单独创建文件）


2.在app.js中引入创建的文件


```
var classRouter = require('./routes/class');
app.use('/class', classRouter);
```


备注   app.use一定要写在 var app = express();后面


3.在js文件中写接口逻辑


## 添加功能备注


1.respone_format 添加系统报错机制


2.在参数验证中，使用throw 抛出错误在catch中


3.参数校验封装，提炼出来共有校验类









