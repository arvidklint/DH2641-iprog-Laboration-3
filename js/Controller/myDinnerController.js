var MyDinnerController = function(view, model) {
	view.confirmDinnerButton.click(function() {
		alert("hej");
		$('application').empty();
		header($('#application'));
		mainRow($('#application'));
		SecondBar($('#mainRow'), model);
		DinnerPreparation($('#mainRow'), model);
	});
}