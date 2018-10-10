$(function() {
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function (e) {
		$hamburger.toggleClass("is-active");
	});
});

$(document).ready(function () {
	var stickyNavTop = $('.header-nav').offset().top;
	var stickyNav = function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= stickyNavTop) {
			$('.header-nav').addClass('sticky');
			$('.nav-logo').removeClass('visibility-hidden');
		} else {
			$('.header-nav').removeClass('sticky');
			$('.nav-logo').addClass('visibility-hidden');
		}
	};
	stickyNav();
	$(window).scroll(function () {
		stickyNav();
	});
});

new WOW().init();

// $("#slick1")
// 	.replaceWith($("<div id=\"#slick1\">" + $("#slick1")[0].innerHTML + "</div>"));

// $("#slick1 > li")
// 	.each(function () {
// 		$(this).replaceWith($("<div>" + this.innerHTML + "</div>"))
// 	});

$(".row-slider-list")
	.slick();
