$(document).ready(function() {

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

	// JS Sticky footer without fixed height
	$(function() {
		var footerHeight = $(".footer").height();
		$(".js-out").css("margin-bottom", -footerHeight);
		$(".js-push").css("height", footerHeight);
	});

	$(window).resize(function() {
		var footerHeight = $(".footer").height();
		$(".js-out").css("margin-bottom", -footerHeight);
		$(".js-push").css("height", footerHeight);
	});

	// Text opacity on page scroll
	var target = $('.js-header-content');
	 var targetHeight = target.outerHeight();

	 $(document).scroll(function(e){
	  var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
	  if(scrollPercent >= 0){
	   target.css('opacity', scrollPercent);
	  }
	 });

	// JS ScrollTo
	$(".menu a").click(function (){
	var page = $(this).attr("href");
	 $('html, body').animate({
	  scrollTop: $(page).offset().top
	 }, 500);
	return false;
	});
});