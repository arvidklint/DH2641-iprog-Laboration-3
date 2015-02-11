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
	appString += '<div>';
		appString += 
	appString += '</div>';
	appString += '</div>';
}

function after(container) {
	appString += '</div>';
	appString += '</div>';
	container.append(appString);
}