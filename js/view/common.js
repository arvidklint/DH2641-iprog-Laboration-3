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

var before = function(container) {
	container.append('<div class="container-fluid">');
	container.append('<div class="row">');
}

var myDinner = function(container) {
	container.append('<div class="col-xs-3" id="myDinner">' +
	'myDinner' +
	'</div>');
}

var after = function(container) {
	container.append('</div>');
	container.append('</div>');
}