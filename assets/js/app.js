'use strict';

$(function() {

	var header = $('#header'),
		introH = $('#intro').innerHeight(),
		scrollOffset = $(window).scrollTop();

	// Fixed Header
	function checkScroll(scrollOffset) {
		if ( scrollOffset >= introH ) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	}

	checkScroll(scrollOffset);

	$(window).on('scroll', function() {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);

	});

	// Smooth Scroll
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$('#nav a').removeClass('active');
		$this.addClass('active');

		$('html, body').animate({
			scrollTop: blockOffset
		}, 500);

		$('#nav').removeClass('active');
	});

	// Menu Nav Toggle
	$('#nav_toggle').on('click',function(event) {
		event.preventDefault();
		$('#nav').toggleClass('active');
		$('#nav_toggle').toggleClass('active');
	});

	// Collapse
	$('[data-collaps]').on('click', function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collaps');

			$this.toggleClass('active');
			$(blockId).slideToggle();
	});

	// Slider
	$('[data-slider]').slick({
		infinite: true,
		fade: true,
		slidesToShow: 1,
  		slidesToScroll: 1
	});

});