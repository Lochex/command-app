var forecast = require("./forecast.js");

var data = process.argv.slice(2);
var args = [];

data.forEach(function(val) {
	args.push(val);
});

forecast.forecast(args[0],args[1]);


