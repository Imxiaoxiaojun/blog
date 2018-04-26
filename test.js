'use strict';
const co = require('co');
const Client = require('aliyun-api-gateway').Client;
const client = new Client('24862651','9af3137de308bf5e4991e40e49cda97a');

co(function* () {
    var url = 'http://blog.strawman.xin/article/detail/100';

    var result = yield client.get(url);

    console.log(JSON.stringify(result));
});