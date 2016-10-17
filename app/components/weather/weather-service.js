function WeatherService() {
	var url = 'https://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl = url + encodeURIComponent(url2);


	this.getWeather = function (callWhenDone) {
		var w = localStorage.getItem('weather');
		if (w) {
			var weather  = JSON.parse(w)
			return callWhenDone(JSON.parse(weather))
		}

		$.get(apiUrl, function (res) {
			localStorage.setItem('weather', res)
			callWhenDone(JSON.parse(res));
		})
	}
}
