$(function() {
		var model = new DinnerModel();
		var view = new DinnerOverview($('#application'), model);
	}
);

var DinnerOverview = function(container, model) {
	header(container);
	before(container);
	secondBar(container, model);
	dishList(model);
	after(container);
}

function dishList(model) {
	appString += '<div id="dinnerOverviewMain">';
		appString += '<div class="container" id="dinnerOverviewObjects">';
			appString += '<div class="row">';
				for (var i = 0; i < 3; i++) {
					appString += '<div class="col-sm-3 col-xs-4 col-centered dinnerOverviewObject">';
						appString += dishThumb(model.getDish(1));
						appString += '<div class="priceFrame">';
							appString += '<span class="priceAtBottom">234</span>';
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