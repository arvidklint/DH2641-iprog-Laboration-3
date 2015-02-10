function header(container) {
	container.append('<div class="container-fluid" id="header">' + 
		'<span class="title">Homelette</span>' + 
		'<span class="subtitle">From the best chefs in the world directly into your kitchen</span>' + 
		'</div>');
}

var myDinner = function(container) {
	container.append('<div class="container-fluid">');
	container.append('<div class="row">');

	container.append('<div class="col-xs-3" id="myDinner">' + 
		'asdf' +
		'</div>');

	container.append('<div class="col-xs-9" id="main">' + 
		'asdf' +
		'</div>');

	container.append('</div>');
	container.append('</div>');
}