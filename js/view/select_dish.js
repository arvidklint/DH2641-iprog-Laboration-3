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
			appString += '<div class="col-xs-5" id="dishChooserSearchFrame">';
				appString += '<input type="search" placeholder="Enter key words" name="search" id="searchBox"/>';
				appString += '<button class="btn" id="searchButton">Search</button>';
			appString += '</div>';
			appString += '<div class="col-xs-7" id="dishChooserTypeFrame">';
				appString += 'MENYYYYYYYYYYYYYYY';
			appString += '</div>';
		appString += '</div>';
	appString += '</div>';
}

function dishList() {
	appString += '<div class="row"><div class="col-xs-12" id="dishList">b</div></div>';
}