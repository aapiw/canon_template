
function footerCentering(){
	var SCREEN_WIDTH = $(window).width();
	if (SCREEN_WIDTH < 753) {
		$('footer .top ul:last-child li span').css('margin-right', SCREEN_WIDTH/3-50+'px');
	}else{
		$('footer .top ul:last-child li span').removeAttr('style');
	}
}

function showToTop(){
	var SCREEN_WIDTH = $(window).width();
	console.log(SCREEN_WIDTH)
	function action(scroll_top){
		// console.log($(window).scrollTop());
		if ($(window).scrollTop() < scroll_top) {
			$('.to-top').addClass('hide')
			// console.log("hide");
		}else{
			$('.to-top').removeClass('hide')
			// console.log("show");
		}
	}
	if (SCREEN_WIDTH > 100 && SCREEN_WIDTH <= 305) {
		action(6140);
	}else if(SCREEN_WIDTH >= 306 && SCREEN_WIDTH <= 360){
		action(5920);
	}else if(SCREEN_WIDTH >= 361 && SCREEN_WIDTH <= 410){
		action(5836);
	}else{
		action(6194);
	}
}

$(window).resize(function() {
	footerCentering();
	showToTop();
	$('.card').matchHeight();
});


$(window).scroll(function() {
	showToTop();
});

$(document).ready(function() {
	footerCentering();
	showToTop()
	$('.card').matchHeight();
	$('.to-top a').click(function() {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});

});