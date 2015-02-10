$(function() {
		var model = new DinnerModel();
		var view = new SelectDish($('#application'), model);
	}
);

var SelectDish = function(container, model) {
	header(container);
	before(container);

	myDinner(container);
	MeinFrame(container);

	after(container);
}


var MeinFrame = function(container) {
	container.append('<div class="col-xs-9" id="main"> asdf');

	SelectDish(container);
	DishList(container);

	container.append('</div>');
}

var SelectDish = function(container) {
	
}