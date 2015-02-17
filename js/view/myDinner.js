var MyDinner = function(container, model, pendingPrice) {
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(200);

	menu = model.getFullMenu();

	model.setNumberOfGuests(4);

	appString = '<div class="col-xs-3" id="myDinner">';
		appString += 'My Dinner';
		appString += '<div>';
			appString += '<input type="number" value="3"/>';
		appString += '</div>';
		appString += '<div class="row">';
			appString += '<div class="col-xs-12 sidebarTableTitle"">';
				appString += '<table class="tableSidebar">';
					appString += '<tr>';
						appString += '<td></td>';
						appString += '<td class="textAlignCenter">Dish Name</td>';
						appString += '<td class="textAlignRight">Cost</td>';
						appString += '<td></td>';
					appString += '</tr>';
				appString += '</table>';
			appString += '</div>';
		appString += '</div>';

		appString += '<table class="tableSidebar">';
			for (key in menu) {
				appString += '<tr class="border">';
					appString += '<td>' + model.getNumberOfGuests() + '</td>';
					appString += '<td class="textAlignCenter">' + menu[key]["name"] + '</td>';
					appString += '<td class="textAlignRight">' + (model.getDishPrice(menu[key]["id"]) * model.getNumberOfGuests()).toFixed(2) + '</td>';
					appString += '<td>';
						appString += '<button class="removeButton" id="remove_' + menu[key] + '">Ⓧ</button>';
					appString += '</td>';
				appString += '</tr>';
			}
			appString += '<tr>';
				appString += '<td colspan="2">Pending</td>';
				appString += '<td class="textAlignRight">' + pendingPrice.toFixed(2)  + '</td>';
			appString += '</tr>';
			appString += '<tr>';
				appString += '<td class="textAlignRight borderTop" colspan="3">SEK ' + (model.getTotalMenuPrice() * model.getNumberOfGuests() + pendingPrice).toFixed(2) + '</td>';
			appString += '</tr>';
		appString += '</table>';
		appString += '<div class="center">';
			appString += '<button class="btn" id="confirmDinnerButton">Confirm Dinner</button>';
		appString += '</div>';
	appString += '</div>';

	container.append(appString);
}