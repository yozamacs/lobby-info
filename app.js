var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
app.use(express.static(__dirname));

app.get('/', function(request, response) {
  response.redirect('/app/views');
});

http.createServer(app).listen(process.env.PORT, function () {
  console.log("Express server listening on port " + app.get('port'));
});

server.listen(process.env.PORT || 3000);
