var MyDinnerController = function(view, model) {
	removeButtonLinks = function(view, model) {
		$('.removeButton').each(function() {
			$(this).click(function() {
				id = $(this).attr("dishid");
				model.removeDishFromMenu(id);
			});
		});
	}

	view.confirmDinnerButton.click(function() {
		$('#application').empty();
		header($('#application'));
		mainRow($('#application'));
		SecondBar($('#mainRow'), model);
		DinnerOverview($('#mainRow'), model);
	});

	removeButtonLinks(view, model);
}