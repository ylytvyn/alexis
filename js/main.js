'use strict';

(function($){
	$(document).ready(function() {
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
