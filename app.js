var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.listen(process.env.PORT || 3000);
app.get('/', function(request, response) {
  response.redirect('/app/views');
});

app.get('/constants.js', function(request,response) {
  response.send("angular.module('PoliticiansLibrary').constant('plConfig', {apiKey: '"+process.env.apiKey+"'});")
})
