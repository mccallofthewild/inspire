(function(){
	// ImageController();
	function ImageController(){
		var imageService = new ImageService()
		$.get('/inspire/-image-tag.html', function(data){
			$('.main-container').append(data)
		})
		imageService.getImage(function(imageData){
			$('body').css('background-image', `url("${imageData.url}")`);
			console.log(imageData.large_url)
			$('.image-link').attr('href', imageData.large_url!==null? imageData.large_url : imageData.url)
		})
	}
	
}())
