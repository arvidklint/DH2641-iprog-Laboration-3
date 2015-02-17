var SelectDishController = function(view, model) {
	
	dishLinks = function(view) {
		$('.dishObjectFrame').each(function() {
			$(this).click(function() {
				id = $(this).attr("id");
				//alert(id);
				view.meinFrame.empty();
				LasagneView($('application'), model, id);
			});
		});
	}

	view.types.change(function() {
		// Val av typ av rätter att bläddra i
		view.dishListContainer.empty();
		view.dishList(view.dishListContainer, model, view.types.val());
		dishLinks(view);
	});

	dishLinks(view);
}