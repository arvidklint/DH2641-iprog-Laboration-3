var SecondBarController = function(view, model) {
	view.backButton.click(function() {
		$('#application').empty();
		header($('#application'));
		mainRow($('#application'));
		MyDinner($('#mainRow'), model, 0);
		$('#mainRow').append('<div class="col-xs-9" id="meinFrame"></div>');
		SelectDish($('#meinFrame'), model);
	});
}