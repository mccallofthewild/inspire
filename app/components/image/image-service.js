function ImageService() {
	var url = 'https://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	// url2 = 'https://source.unsplash.com/category/nature/800x600'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (callWhenDone) {
		return $.get(apiUrl, function (res) {
			console.log(res)
			callWhenDone(JSON.parse(res))
		})
	}
}
