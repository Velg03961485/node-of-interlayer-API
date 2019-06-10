
var headerTpl = require('../../views/index/index.html')

var data = {words:"this is pass"};

var header = headerTpl(data);

module.exports = header;