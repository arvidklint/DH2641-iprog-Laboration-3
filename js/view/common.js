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

function before() {
	appString = '<div class="container-fluid">';
	appString += '<div class="row">';
}

function myDinner() {
	appString += '<div class="col-xs-3" id="myDinner">';
		appString += 'My Dinner';
		appString += '<div>';
			appString += '<input type="number" value="3"/>';
		appString += '</div>';
		appString += '<div class="row">';
			appString += '<div class="col-xs-6 sidebarTableTitle">';
				appString += 'Dish Name';
			appString += '</div>';
			appString += '<div class="col-xs-6 sidebarTableTitle">';
				appString += '<div class="pull-right">';
					appString += 'Cost';
				appString += '</div>';
			appString += '</div>';
		appString += '</div>';
		appString += '<table class="tableSidebar">';
			appString += '<tr class="border">';
				appString += '<td>4</td>';
				appString += '<td class="textAlignCenter">Lasagne</td>';
				appString += '<td class="textAlignRight">77.20</td>';
			appString += '</tr>';
			appString += '<tr>';
				appString += '<td></td>';
				appString += '<td class="textAlignCenter">Pending</td>';
				appString += '<td class="textAlignRight">0.00</td>';
			appString += '</tr>';
			appString += '<tr>';
				appString += '<td class="textAlignRight borderTop" colspan="3">SEK 77.20</td>';
			appString += '</tr>';
		appString += '</table>';
		appString += '<div class="center">';
			appString += '<button class="btn" id="confirmDinnerButton">Confirm Dinner</button>';
		appString += '</div>';
	appString += '</div>';
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

function after(container) {
	appString += '</div>';
	appString += '</div>';
	container.append(appString);
}