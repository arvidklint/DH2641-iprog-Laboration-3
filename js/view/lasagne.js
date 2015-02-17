var LasagneView = function(container, model, dishID) {
	this.dishID = dishID;
	
	var getPendingPrice = function(model) {
		dish = model.getSelectedDish("main dish");
		pendingPrice = model.getDishPrice(dish["id"]) * model.getNumberOfGuests();
		return pendingPrice;
	}

	var showDish = function(container, model) {
		var dinner = model.getDish(this.dishID);
		appString = '<div class="col-xs-6">';
			appString += '<h3>';
				appString += dinner["name"];
			appString += '</h3>';
			appString += '<img src="images/' + dinner["image"] + '" class="img-responsive" alt="Meatballs">'
			appString += '<p>';
				appString += dinner["description"];
			appString += '</p>';
			appString += '<button class="btn" id="backButton">';
				appString += '<span class="glyphicon glyphicon-chevron-left floatLeft"></span>';
				appString += 'Back to Select Dish';
			appString += '</button>';
		appString += '</div>';

		container.append(appString);
	}

	var showIngredients = function(container, model) {
		appString = '<div class="col-xs-6" id="ingredientsFrame">';
			appString += '<h4>';
				appString += 'Ingredients for 4 people';
			appString += '</h4>';
			appString += '<table id="ingredientsTable">';
			var dinner = model.getDish(this.dishID);
			var total = 0;
			for (i = 0; i < dinner["ingredients"].length; i++) {
				appString += '<tr>';
					appString += '<td width="20%">' + dinner["ingredients"][i]["quantity"] + " " + dinner["ingredients"][i]["unit"] + '</td>';
					appString += '<td width="60%">' + dinner["ingredients"][i]["name"] + '</td>';
					appString += '<td width="10%">SEK</td>';
					appString += '<td class="textAlignRight" width="10%">' + dinner["ingredients"][i]["price"].toFixed(2) + '</td>';
				appString += '</tr>';
				total += dinner["ingredients"][i]["price"];
			}
			appString += '</table>';

			appString += '<table width="100%">';
				appString += '<tr>';
					appString += '<td width="80%">';
						appString += '<button class="btn" id="confirmDishButton">Confirm Dish</button>';
					appString += '</td>';
					appString += '<td width="10%">SEK</td>';
					appString += '<td class="textAlignRight" width="10%">' + total.toFixed(2) + '</td>';
				appString += '</tr>';
			appString += '</table>';
		appString += '</div>';

		container.append(appString);
	}

	var declareWidgets = function(container) {
		this.container = container;
		this.meinFrame = $('#meinFrame');
		this.backButton = $('#backButton');
		this.confirmDishButton = $('#confirmDishButton');
	}

	// model.setNumberOfGuests(4);
	// model.addDishToMenu(100);
	// mainFrame($('#mainRow'), model);
	showDish($('#meinFrame'), model);
	showIngredients($('#meinFrame'), model);

	declareWidgets(container);

	LasagneController(this, model);

}