var PrepView = function(container, model) {
	header(container);
	before();
	secondBar(model);
	mainFrame(model);
	after(container);
}

function mainFrame(model){
	//Add dishes to menu
	model.addDishToMenu(1); //french toast
	model.addDishToMenu(100); //Meat balls
	model.addDishToMenu(200); //Chocolat Ice cream

	menu = model.getFullMenu();

	appString += '<div class="container-fluid" id="prepFrame">';
	for (var key in menu) {
		appString += '<div class="row">';
			showDinnerPrep(menu[key]);
		appString += '</div>';
	}
	appString += '</div>';
}

function showDinnerPrep(dish) {
	appString += '<div class="col-xs-4 col-md-3">';
		appString += '<img src="images/' + dish["image"] + '" class="img-responsive dinnerPrepThumbnail" alt="Meatballs">';
	appString += '</div>';

	appString += '<div class="col-xs-8 col-md-4">';
		appString += '<h3>';
			appString += dish["name"];
		appString += '</h3>';

		appString += '<p>';
			appString += 'Lorem ipsum dolor sit amet, in fabulas luptatum definitionem duo, an qui natum tollit posidonium, mel vivendum adipiscing definitiones et. Ad vim sanctus maiestatis ullamcorper, labitur neglegentur qui eu, at est persius electram. His soleat iisque dolorem te. An sed minimum vivendum, sed at accumsan definitionem. Ferri epicurei vim id, melius hendrerit ius eu. Persecuti appellantur ne vis, eam ei viris tempor, ius possit pericula referrentur te.';
		appString += '</p>';
	appString += '</div>';

	appString += '<div class="col-xs-12 col-md-5">';
		appString += '<h4>';
			appString += 'PREPARATION';
		appString += '</h4>';

		appString += '<p>';
			appString += dish["description"];
		appString += '</p>';
	appString += '</div>';
}