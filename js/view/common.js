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
		appString += 'myDinner';
	appString += '<div>';
		appString += '<input type="number" value="3"/>';
	appString += '</div>';
	appString += '<hr class="horizontalLine"/>';
	appString += '<div class="row">';
		appString += '<div class="col-xs-6">';
			appString += 'Dish Name';
		appString += '</div>';
		appString += '<div class="col-xs-6">'
			appString += '<div class="pull-right">';
				appString += 'Cost'
			appString += '</div>';
		appString += '</div>';
	appString += '</div>';
	appString += '<hr class="horizontalLine"/>';
	appString += '<div>';
		appString += '<table class="tableSidebar">';
			appString += '<tr>';
				appString += '<td>4</td>';
				appString += '<td class="textAlignCenter">Lasagne</td>';
				appString += '<td class="textAlignRight">77.20</td>';
			appString += '</tr>';
		appString += '</table>';
	appString += '</div>';
	appString += '</div>';
}

function after(container) {
	appString += '</div>';
	appString += '</div>';
	container.append(appString);
}