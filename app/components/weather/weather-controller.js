	function WeatherController(){
		var wc = this;
		var weatherService = new WeatherService();
		$.get(window.location.pathname + '-weather-widget.html', function(data){
			$('.main-container').append(data)
		})
		injectWeather();
		function injectWeather(){
			weatherService.getWeather(function(weather){
				console.log("in injectWeather")
				var description = weather.weather[0].description;
				var kelvin = weather.main.temp;
				var celsius = kelvin - 273.15;
				var fahrenheit = (celsius - 32)*5/9;
				var humanTemperature = description.includes('rain')? {adjective:"rainy", article:"an", item:"umbrella"} : fahrenheit<50? {adjective:"chilly", item:"jacket"} : fahrenheit<80? {adjective:"gorgeous", item:"picnic basket"} : fahrenheit<90? {adjective:"hot", item:"sunscreen"} : {adjective:"a pit of fiery lava", item:"a Mars exploration suit"};
				$('#weather-adjective').html(humanTemperature.adjective)
				$('#weather-object').html(humanTemperature.article? "your" + " " + humanTemperature.item : "your" + " " + humanTemperature.item)
				$('#weather-location').html(weather.name)
				// $('span#temperature').attr("kelvin", Math.round(kelvin) + "°K");
				// $('#temperature').attr("celsius", Math.round(celsius) + "°C");
				// $('#temperature').attr("fahrenheit", (Math.round(fahrenheit) + "°F"));
				// $('#temperature').html(Math.round(fahrenheit) + "°F");

			})
		}

		$('body').on('click', '#temperature', function(){
			if(this.innerHTML.includes("F")){
				$(this).html($(this).attr("celsius"))
			}else{
				$(this).html($(this).attr("fahrenheit"))

			}
		})
	}