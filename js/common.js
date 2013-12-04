$(document).ready(function() {

	// STICKY FOOTER
	$(function() {
		var footerHeight = $(".footer").height();
		$(".out").css("margin-bottom", -footerHeight);
		$(".push").css("height", footerHeight);
	});

	$(window).resize(function() {
		var footerHeight = $(".footer").height();
		$(".out").css("margin-bottom", -footerHeight);
		$(".push").css("height", footerHeight);
	});

});