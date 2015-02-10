$(function() {
		var model = new DinnerModel();
		var view = new SelectDish($('#application'), model);
	}
);

var SelectDish = function(container, model) {
	header(container);
	before();

	myDinner();
	meinFrame();

	after(container);
}

// var DishChooser = function(container) {
// 	container.append('<div class="row">');
// 	container.append('<div class="col-xs-12">Rad</div>');


// 	container.append('</div>');
// }

function meinFrame() {
	appString += '<div class="col-xs-9" id="main">';
	appString += '<div class="row">';
	appString += '<div class="col-xs-12">a</div>';
	appString += '<div class="col-xs-12">b</div>';
	appString += '</div>';
	appString += '</div>';
}

