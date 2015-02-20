var LasagneController = function(view, model) {
	view.backButton.click(function() {
		view.container.empty();
		dish = model.getDish(view.dishID);
		SelectDish(view.container, model);
	});

	view.confirmDishButton.click(function() {
		model.addDishToMenu(view.dishID);
	});
}