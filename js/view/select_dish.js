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

// var DishChooser = function(container) {
// 	container.append('<div class="row">');
// 	container.append('<div class="col-xs-12">Rad</div>');


// 	container.append('</div>');
// }

var MeinFrame = function(container) {
	container.append('<div class="col-xs-9" id="main">');
	container.append('<div class="row"><div class="col-xs-12">a</div></div>');
	container.append('</div>');
}

