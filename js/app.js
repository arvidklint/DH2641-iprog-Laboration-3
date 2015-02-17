$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var homeView = new HomeView($("#application"), model);

	var homeController = new HomeController(homeView, model);

});