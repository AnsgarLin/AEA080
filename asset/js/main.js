$(document).ready(function() {
	$('.go_top').on('click', function() {
		$('body, html').animate({
			scrollTop: 0
		}, 600);
		// $(document).scrollTop(0);
	}); 
});