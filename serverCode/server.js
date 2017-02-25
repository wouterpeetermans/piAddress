var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(express.static('client'));
app.use(bodyparser.json());
app.use(function(req, res ,next){
	res.header("Acces-Control-Allow-Origin", "*");
	res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var addresses =  [];

app.get('/api/addresses',function(req,res){
	res.status(200).json(addresses);
});

app.post('/api/addresses' ,function(req,res){
	for(var i=0; i<addresses.length ; i++){
		if(req.body.name == addresses[i].name){
			addresses.splice(i,1);
		}
	}
	var date = new Date();
	addresses.push({'name':req.body.name , 'address':req.body.address , 'date':date});
	res.status(201).json(addresses);
});

app.listen(80);

