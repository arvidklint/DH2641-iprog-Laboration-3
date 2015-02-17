var LasagneView = function(container, model, dishId) {
	model.setNumberOfGuests(4);
	model.addDishToMenu(100);

	header(container);
	before();
	myDinner(model, getPendingPrice(model));
	mainFrame(model);
	after(container);
}

var getPendingPrice = function(model) {
	dish = model.getSelectedDish("main dish");
	pendingPrice = model.getDishPrice(dish["id"]) * model.getNumberOfGuests();
	return pendingPrice;
}

function mainFrame(model) {
	appString += '<div class="col-xs-9" id="main">';
		appString += '<div class="row">';
			showDish(model);
			showIngredients(model);
		appString += '</div>';
	appString += '</div>';
}

function showDish(model) {
	var dinner = model.getDish(100);
	appString += '<div class="col-xs-6">';
		appString += '<h3>';
			appString += dinner["name"];
		appString += '</h3>';
		appString += '<img src="images/meatballs-big.jpg" class="img-responsive" alt="Meatballs">'
		appString += '<p>Lorem ipsum dolor sit amet, in fabulas luptatum definitionem duo, an qui natum tollit posidonium, mel vivendum adipiscing definitiones et. Ad vim sanctus maiestatis ullamcorper, labitur neglegentur qui eu, at est persius electram. His soleat iisque dolorem te. An sed minimum vivendum, sed at accumsan definitionem. Ferri epicurei vim id, melius hendrerit ius eu. Persecuti appellantur ne vis, eam ei viris tempor, ius possit pericula referrentur te.</p>';
		appString += '<button class="btn" id="backButton">';
			appString += '<span class="glyphicon glyphicon-chevron-left floatLeft"></span>';
			appString += 'back to Select Dish';
		appString += '</button>';
	appString += '</div>';
}

function showIngredients(model) {
	appString += '<div class="col-xs-6" id="ingredientsFrame">';
		appString += '<h4>';
			appString += 'Ingredients for 4 people';
		appString += '</h4>';
		appString += '<table id="ingredientsTable">';
		var dinner = model.getDish(100);
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
}