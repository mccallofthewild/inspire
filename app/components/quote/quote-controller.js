(function(){
	QuoteController();
	function QuoteController(){
		var quoteService = new QuoteService();
		$.get(window.location.pathname + '-quote.html', function(data){
			$('.main-container').append(data)
		})
	
		quoteService.getQuote(function(data){
			$('#quote-text').html(data.quote)
			$('#author').html(data.author)
		})

	}	
}())
