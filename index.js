var proxy = require('express-http-proxy');



var app = require('express')();

var PORT = process.env.PORT || 8080


app.use(proxy('https://cocky.io'));

/*
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});*/
app.listen(PORT)
