$(function() {
	var $hamburger = $('.hamburger');
	var $overlay = $('.main-overlay');
	var $menu = $('.header-nav-mobile');
	$hamburger.on("click", function (e) {
		$hamburger.toggleClass("is-active");
		$menu.toggleClass('visibility-hidden');
		$overlay.toggleClass('visibility-hidden');
	});
		$overlay.on("click", function (e) {
			$hamburger.toggleClass("is-active");
			$menu.toggleClass('visibility-hidden');
			$overlay.toggleClass('visibility-hidden');
		});
});


$(document).ready(function () {
	var stickyNavTop = $('.header-nav').offset().top;
	var stickyNav = function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > stickyNavTop) {
			$('.header-nav').addClass('sticky');
		} else {
			$('.header-nav').removeClass('sticky');
		}
	};
	stickyNav();
	$(window).scroll(function () {
		stickyNav();
		var scrollTop = $(window).scrollTop();
		console.log(scrollTop);
	});
});


// new WOW().init();

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
	init: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 1
		},
	}
});
