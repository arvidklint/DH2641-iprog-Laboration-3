var HomeController = function(view, model) {
	view.createNewDinner.click(function() {
		view.container.empty();
		view.container.css('background-image', 'none');
		view.container.css('background-color', 'white');
		model.createMenuArray();
		
		header($('#application'));
		mainRow($('#application'));
		MyDinner($('#mainRow'), model, 0);
		SelectDish($('#mainRow'), model);
	});
}