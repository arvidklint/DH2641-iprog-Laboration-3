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

	function searchDish(searchString, dishType) {
		alert(searchString + " " + dishType);
	}

	view.types.change(function() {
		// Val av typ av rätter att bläddra i
		view.dishListContainer.empty();
		view.dishList(view.dishListContainer, model, view.types.val());
		dishLinks(view);
	});

	view.searchButton.click(function() {
		results = model.getAllDishes(view.types.val(), view.searchBox.val());
		alert(results[0]["id"]);
		view.dishListContainer.empty();
	});

	dishLinks(view);
}