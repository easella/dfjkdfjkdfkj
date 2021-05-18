var proxy = require('express-http-proxy');
var app = require('express')();
const PORT = process.env.PORT || 8080
app.use('/proxy', proxy('https://aquapark.io'));
app.listen(PORT)
