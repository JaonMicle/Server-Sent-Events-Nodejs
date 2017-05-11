var sse = require('../');

var express = require('express');

var app = express();

app.get('/', function (req,res) {
   res.sendFile(__dirname+ '/index.html')
});

app.get('/time', function (req,res) {
    var app = sse(res);

    app.sendEvent('time', function () {
        return new Date
    },1000);

    //app.removeEvent('time',2000);

});

app.listen(3333);