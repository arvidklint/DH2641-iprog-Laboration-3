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

function secondBar(container, model) {
	appString += '<div class="myDinnerSummaryFrame">';
		appString += '<div class="row">'
			appString += '<div class="col-xs-6 col-sm-6" id="myDinnerSummary">';
				model.setNumberOfGuests(4); // Tillfälligt hårdkodat antal gäster
				appString += 'My Dinner: ' + model.getNumberOfGuests() + ' people';
			appString += '</div>';
			appString += '<div class="col-xs-6 col-sm-6" id="myDinnerSummaryBackButtonFrame">';
				appString += '<button type="button" class="btn" id="goBack">Go back and edit dinner</button>';
			appString += '</div>';
		appString += '</div>';	
	appString += '</div>';
}

function dishList(container, model) {
	//
}