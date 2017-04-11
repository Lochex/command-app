var https = require("https");

function forecast(longitude,latitude) {
	https.get("https://api.darksky.net/forecast/090f9c60a08082b3e782bbd0f91474d9/"+longitude+ ","+latitude, function(response) {
		// body...
		var info = "";

		response.on("data", function(chunk){
			info += chunk;
		});

		response.on("end", function() {
			if(response.statusCode === 200) {
					try {
						var data = JSON.parse(info);
						console.log("Weather is " +data.currently.summary+" in "+data.timezone);
					}catch(error) {
							console.log("Sorry");
					}
			}else {
					console.log("Not available");
			}
		});

	});
}

module.exports.forecast = forecast;