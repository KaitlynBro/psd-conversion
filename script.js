var mojo ={};


mojo.init = function() {
	mojo.mojoSmooth();
}

mojo.mojoSmooth = function() {
	$('.sliderButton').on('click', function() {
	$('html,body').animate({
		scrollTop: $('.about').offset().top},
		'slow');
	});
}
 
$(document).ready(function() {
	mojo.init();
});
