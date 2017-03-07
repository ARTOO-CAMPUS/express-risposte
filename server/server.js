var express = require('express');
var app = express();


//SERVIAMO SULLA ROOT UN HELLO WORLD
app.get('/', function (req, res) {
	res.send("CIAO A TUTTI");
});


app.get('/listautenti', function (req, res) {
	res.send("questa è la mia lista utenti");
});


app.listen(3000, function () {
	console.log("server partito su http://localhost:3000");
});