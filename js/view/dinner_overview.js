$(function() {
		var model = new DinnerModel();
		var view = new DinnerOverview($('#application'), model);
	}
);

var DinnerOverview = function(container, model) {
	header(container);
	before(container);
	secondBar(container, model);
	after(container);
}

function dishList(container, model) {
	//
}