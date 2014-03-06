/**
* Contains some configs for express app
*/

//Incldue the handlebars templating libarary
var handlebars = require('express3-handlebars'),
	express = require('express');

//Requireing this module will return a func that the index.js file will use to conf the app
module.exports = function(app){
	//Register and configure the handlebars engine
	app.engine('html', handlebars({
		defaultLayout: 'main',
		extname: ".html",
		layoutsDir: __dirname + '/views/layouts'
	}));

	//Set .html as the def temp extens
	app.set('view engine', 'html');
	//Tell express where it can find the thempaltes
	app.set('views', __dirname + '/views');
	//Make the files in the pub folder avaible to the world
	app.use(express.static(__dirname+ '/public'));
	//Parse POST request data. It will be avaible in the req.body obj
	app.use(express.urlencoded());

	app.enable('trust proxy');
};
