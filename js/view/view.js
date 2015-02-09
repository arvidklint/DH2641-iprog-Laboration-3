$("#create-new-dinner").click(createNewDinner);
// $("body").css("background-image", "url('images/pigtram.jpg')");

function createNewDinner() {
	$('body').empty();
	$('body').css("background-image", "none");
	head();
}

function head() {
	$("body").append('<div class="container-fluid" id="header"><span class="title">Homelette</span><span class="subtitle">From the best chefs in the world directly into your kitchen</span></div>');
}