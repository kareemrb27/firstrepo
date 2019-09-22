var express = require('express');
var app = express();

var ig = require('instagram-node').instagram();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//set the access token
ig.use({
	access_token: '1586129534.1677ed0.7c1d0fc5ada94a9ca76a579e7c7f5ef6',
});

app.get('/', function(req, res) {
	
	//use instagram package to gain access to popular media
	ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
	
	res.render('pages/index', { grams: medias });

	});
			});

app.listen(8080);

console.log('App started! Look at http://localhost:8080');
