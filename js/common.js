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

	$('.b-img').click(function() {
		$(this).parents(".new-note__article").find(".new-note__popup").toggle();
		return false;
	});

	$('.tag li a .i-cross').click(function() {
		$(this).parent().parent().hide();
		return false;
	});

	$(".delivery__create").click(function() {
			$(this).parent().find(".delivery-form").show();
			return false;
	});

	$(".member .i-del").click(function() {
		$(this).parent().parent().hide();
		return false;
	});

	$(".cover-calengar .js-calendar").click(function() {
		$(".calendar").removeClass("is-active");
		$(this).parent().addClass("is-active");
		return false;
	});

	function tab() {
	  $(".js-tab").each(function(){
      var tab_link = $(this).find("a");
      var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
      tab_cont.hide();
      $(this).parents(".js-tab-group").find(".js-tab4").show();

      tab_link.bind("click", function() {
          var index = $(this).attr("href");
          tab_link.removeClass("is-active");
          tab_link.parent().removeClass("is-active");
          $(this).addClass("is-active");
          $(this).parent().addClass("is-active");
          tab_cont.hide();
          $(this).parents(".js-tab-group").find("."+index).slideDown("fast");
          return false;
      });
	  });
	}
	tab();
});