$(document).ready(function() {

	// STICKY FOOTER
	// $(function() {
	// 	var footerHeight = $(".footer").height();
	// 	$(".out").css("margin-bottom", -footerHeight);
	// 	$(".push").css("height", footerHeight);
	// });

	// $(window).resize(function() {
	// 	var footerHeight = $(".footer").height();
	// 	$(".out").css("margin-bottom", -footerHeight);
	// 	$(".push").css("height", footerHeight);
	// });

	//select
	function select() {
		var el = $('.js-select');
		var el_title = el.children("span");
		var item = el.find('li');
		var input = el.find(".js-select-input");
		var el_text = el.find(".js-select-text");
		var checkbox = el.find(".checkbox");
		var list = el.find('.js-select-drop');
		el_title.click(function(event){
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$(this).parent().addClass('is-open');
			};
			event.stopPropagation();
		});
		checkbox.click(function(event){
			event.stopPropagation();
		});
		item.bind("click",function(){
			$(this).toggleClass("is-selected");
			var text = $(this).text();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select").find(".js-select-text").text(text);
			$(this).parents(".js-select").find(".js-select-input").val(id);
	 });
	};
	select();

	$(document).click(function() {
		$('.js-select').removeClass('is-open');
	});

});