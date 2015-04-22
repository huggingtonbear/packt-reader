$(function() {
	$("img.lazy").lazyload({
	threshold : 400,
	effect : "fadeIn",
	placeholder : "images/blank.gif",
	});
});