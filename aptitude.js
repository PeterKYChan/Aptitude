$(document).ready(function($) {
	var w=$(window).width();
	var h=$(window).height();
	$("#main").css("height", w);
	$("#main").css("background-size", w);
	$("#move").css("height", h);
	var controller = new ScrollMagic();

	var move = new ScrollScene({duration: 200})
		.setTween(TweenMax.to(".top", 1, {alpha:0.8, ease: Linear.easeNone}))
		.addTo(controller);

	var move2 = new ScrollScene({duration: 200})
		.setTween(TweenMax.to(".down", 1, {alpha:1, ease: Linear.easeNone}))
		.addTo(controller);

	var move3 = new ScrollScene({duration: 400})
		.setTween(TweenMax.to("#main", 0.5, {top:100 , ease: Linear.easeNone}))
		.addTo(controller);
});