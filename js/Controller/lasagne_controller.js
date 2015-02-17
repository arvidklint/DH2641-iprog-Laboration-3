var LasagneController = function(view, model) {
	view.backButton.click(function() {
		view.meinFrame.empty();
		dish = model.getDish(view.dishID);
		SelectDish(view.meinFrame, model);
	});

	view.confirmDishButton.click(function() {
		model.addDishToMenu(view.dishID);
	});
}