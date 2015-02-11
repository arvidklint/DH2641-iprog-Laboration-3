$(function() {
		var model = new DinnerModel();
		var view = new LasagneView($('#application'), model);
	}
);

var LasagneView = function(container, model) {
	header(container);
	before();
	myDinner();
	mainFrame(model);
	after(container);
}

function mainFrame(model) {
	appString += '<div class="col-xs-9" id="main">';
		appString += '<div class="row">';
			showDish();
			showIngredients(model);
		appString += '</div>';
	appString += '</div>';
}

function showDish() {
	appString += '<div class="col-xs-6">';
		appString += '<h3>';
			appString += 'Lasagne';
		appString += '</h3>';
		appString += '<img src="images/lasagne.jpg" class="img-responsive" alt="Lasagne">'
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

		
			appString += '<tr class="border-top">';
				appString += '<td>2 tbsp</td>';
				appString += '<td width="50%">olive oil</td>';
				appString += '<td>SEK</td>';
				appString += '<td class="textAlignRight">0.20</td>';
			appString += '</tr>';
		appString += '</table>';
		appString += '<div class="center">';
			appString += '<button class="btn" id="confirmDinnerButton">Confirm Dinner</button>';
		appString += '</div>';


	appString += '</div>';
}