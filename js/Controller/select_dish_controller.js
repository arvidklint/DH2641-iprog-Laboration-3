var SelectDishController = function(view, model) {
	
	dishLinks = function(view) {
		$('.dishObjectFrame').each(function() {
			$(this).click(function() {
				id = $(this).attr("id");
				//alert(id);
				view.container.empty();
				LasagneView(view.container, model, id);
			});
		});
	}

	function searchDish(searchString, dishType) {
		alert(searchString + " " + dishType);
	}

	view.types.change(function() {
		// Val av typ av rätter att bläddra i
		view.searchResults.empty();
		view.dishList(view.dishListContainer, model, view.types.val());
		dishLinks(view);
	});

	view.searchButton.click(function() {
		if (filter = view.searchBox.val()) {
			dishType = view.types.val();
			results = model.getAllDishes(dishType, filter);
			view.searchResults.html("Found dishes: " + results.length);
			view.dishListContainer.empty();
			view.dishList(view.dishListContainer, model, dishType, filter);
		}
	});

	dishLinks(view);

}