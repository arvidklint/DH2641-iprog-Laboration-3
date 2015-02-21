var SecondBar = function(container, model) {
	this.update = function(model) {
		appString += '<div class="myDinnerSummaryFrame">';
			appString += '<div class="row">'
				appString += '<div class="col-xs-6 col-sm-6" id="myDinnerSummary">';
					//model.setNumberOfGuests(4); // Tillfälligt hårdkodat antal gäster
					appString += 'My Dinner: ' + model.getNumberOfGuests() + ' people';
				appString += '</div>';
				appString += '<div class="col-xs-6 col-sm-6" id="myDinnerSummaryBackButtonFrame">';
					appString += '<button type="button" class="btn" id="goBack">';
					appString += '<span class="glyphicon glyphicon-chevron-left floatLeft"></span>';
					appString += ' Go back and edit dinner';
					appString += '</button>';
				appString += '</div>';
			appString += '</div>';	
		appString += '</div>';
	}
}