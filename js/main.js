'use strict';

(function($){
	$(document).ready(function() {
		// add styles async
		$('head').append(
			'<link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Poppins:400,500,600" rel="stylesheet">' +
			'<link rel="stylesheet" href="css/bootstrap-grid.min.css">' +
			'<link rel="stylesheet" href="css/styles.min.css">');

		// Link anchor
		$('a').click(function(){
		    $('html, body').animate({
		        scrollTop: $($.attr(this, 'href')).offset().top - 72
		    }, 600);
		    return false;
		});

		// Mobile menu
		$('.icon-menu').click(function(){
			$(this).toggleClass('active');
		});

		$('body').click(function(e){
			if($(e.target).closest('.icon-menu').length == 0) {
	           e.stopPropagation();
	           $('.icon-menu').removeClass('active');
			}
		});
	});
})(jQuery);
