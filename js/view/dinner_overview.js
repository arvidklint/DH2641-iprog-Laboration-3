$(function() {
		var model = new DinnerModel();
		model.createMenuArray();
		var view = new DinnerOverview($('#application'), model);
	}
);

var DinnerOverview = function(container, model) {
	header(container);
	before(container);
	secondBar(model);
	dishList(model);
	after(container);
}

function dishList(model) {
	appString += '<div id="dinnerOverviewMain">';
		appString += '<div class="container" id="dinnerOverviewObjects">';
			appString += '<div class="row">';
				model.addDishToMenu(1);
				model.addDishToMenu(100);
				model.addDishToMenu(200);
				fullMenu = model.getFullMenu();
				totalPrice = 0;
				for (key in fullMenu) {
					appString += '<div class="col-sm-3 col-xs-4 col-centered dinnerOverviewObject">';
						appString += dishThumb(fullMenu[key]);
						appString += '<div class="priceFrame">';
							appString += '<span class="priceAtBottom">';
								price = sumIngredientPrices(fullMenu[key]);
								appString += price;
								totalPrice += price;
							appString += '</span>';
						appString += '</div>';
					appString += '</div>';
				}
				appString += '<div class="col-sm-3 col-xs-4 col-centered" id="total">';
					appString += '<div class="hiddenThumbnail">';
						appString += 'Total:';
					appString += '</div>';
					appString += '<div class="totalPriceFrame">';
						appString += '<span class="priceAtBottom">';
							appString += '1234';
						appString += '</span>';
					appString += '</div>';
				appString += '</div>';
			appString += '</div>';

			appString += '<div id="dinnerOverviewDivider"/>';

			appString += '<button class="btn">Print Full Recipe</button>';
		appString += '</div>';
	appString += '</div>';
}