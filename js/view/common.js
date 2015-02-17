var appString = "";

function header(container) {
	container.append('<div class="container-fluid" id="header">' + 
		'<span class="title">Homelette</span>' + 
		'<span class="subtitle">From the best chefs in the world directly into your kitchen</span>' + 
		'</div>');
}

// var sidebarAndMain = function(container) {
// 	myDinner(container);
// 	mainFrame(container);
// }

function mainRow(container) {
	appString = '<div class="container-fluid">';
		appString += '<div class="row" id="mainRow">';
		appString += '</div>';
	appString += '</div>';
	container.append(appString);
}

function secondBar(model) {
	appString += '<div class="myDinnerSummaryFrame">';
		appString += '<div class="row">'
			appString += '<div class="col-xs-6 col-sm-6" id="myDinnerSummary">';
				model.setNumberOfGuests(4); // Tillfälligt hårdkodat antal gäster
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

function dishThumb(dish) {
	// Tar emot en dish. Returnerar en standardutformad ram med thumbnail och titel. 
	dishThumbStr = '<div class="dishThumbFrame">';
		dishThumbStr += '<div>';
			dishThumbStr += '<img src="images/' + dish["image"] + '" class="dishThumb"/>';
		dishThumbStr += '</div>';
		dishThumbStr += '<div class="dishTitle">';
			dishThumbStr += dish["name"];
		dishThumbStr += '</div>';
	dishThumbStr += '</div>';

	return dishThumbStr;
}