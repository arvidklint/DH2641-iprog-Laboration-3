var MyDinnerController = function(view, model) {
	view.confirmDinnerButton.click(function() {
		$('#application').empty();
		header($('#application'));
		mainRow($('#application'));
		SecondBar($('#mainRow'), model);
		DinnerOverview($('#mainRow'), model);
	});
}