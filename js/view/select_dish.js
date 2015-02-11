$(function() {
		var model = new DinnerModel();
		var view = new SelectDish($('#application'), model);
	}
);

var SelectDish = function(container, model) {
	header(container);
	before();

	myDinner();
	meinFrame();

	after(container);
}

// var DishChooser = function(container) {
// 	container.append('<div class="row">');
// 	container.append('<div class="col-xs-12">Rad</div>');


// 	container.append('</div>');
// }

function meinFrame() {
	appString += '<div class="col-xs-9" id="main">';
	dishChooser();
	dishList();
	appString += '</div>';
}

function dishChooser() {
	appString += '<div class="row" id="dishChooser">';
		appString += '<div class="row">';
			appString += '<div class="col-xs-12" id="dishChooserHeadline">';
				appString += '<p id="select_dish">Select dish</p>';
			appString += '</div>';
		appString += '</div>';
		appString += '<div class="row">'
			appString += '<div class="col-xs-12" id="dishChooserSearchFrame">';
				appString += '<input type="search" placeholder="Enter key words" name="search" id="searchBox"/>';
				appString += '<button class="btn" id="searchButton">Search</button>';
				appString += '<select id="types">';
					appString += 	'<option value="Starter">Starter</option>' + 
									'<option value="Main">Main</option>' + 
									'<option value="Dessert">Dessert</option>';
				appString += '</select>';
			appString += '</div>';
		appString += '</div>';
	appString += '</div>';
}

function dishList() {
	appString += '<div class="row" id="dishList">';
		appString += '<div class="col-xs-2">';
			appString += '<div class="dishThumbFrame">';
				appString += '<img src="images/toast.jpg" class="dishThumb"/>';
				appString += '<div class="dishTitle">Jag</div>';
			appString += '</div>';
		appString += '</div>';
	appString += '</div>';
}