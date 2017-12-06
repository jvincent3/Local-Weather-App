
// API GET Location
function currentLocation() {

	var URL = "https://ipapi.co/json";

	$.get(URL, function(data) {

		var lat = data.latitude;
		var lon = data.longitude;

		localweather(lat, lon);
	});
}

// INTERACT WITH THE WEATHER API
function localweather(lat,lon) {
	var APIKEY = "f3e227a4fcd958200be8fe9d55f5ca88"
	var APIURL = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+APIKEY+"&units=metric";
	
	$.get(APIURL, function(data){

	$('#location').append(data.main.temp+" &#176;C");
	$('#temp').append(data.name+", "+data.sys.country);
	$('#sky').append(data.weather[0].main);
	$('#img').attr("src", "https://openweathermap.org/img/w/"+data.weather[0].icon +".png");
	//console.log(data.weather[0].main);
	});
}
currentLocation();



