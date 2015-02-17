var SelectDishController = function(view, model) {
	view.types.change(function() {
		// Val av typ av rätter att bläddra i
		view.dishListContainer.empty();
		view.dishList(view.dishListContainer, model, view.types.val());
		this.dishLinks(view);
	});

	this.dishLinks = function(view) {
		this.foundDishes = view.foundDishes;

		for (var i = 0; i < this.foundDishes.length; i++) {
			var id = view.foundDishes[i]["id"];
			view.dishListContainer.find("#" + this.foundDishes[i]["id"]).click(function() {
				alert(id);
				view.meinFrame.empty();
				LasagneView($('application'), model, id);
			});
		}
	}

	this.dishLinks(view);
}