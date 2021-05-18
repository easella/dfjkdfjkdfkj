var proxy = require('express-http-proxy');
var app = require('express')();

app.use('/proxy', proxy('https://aquapark.io'));
app.listen(8080)
