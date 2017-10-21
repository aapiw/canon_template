
function footerCentering(){
	var SCREEN_WIDTH = $(window).width();
	if (SCREEN_WIDTH < 753) {
		$("footer .top ul:last-child li span").css('margin-right', SCREEN_WIDTH/3-50+"px");
	}else{
		$("footer .top ul:last-child li span").removeAttr("style");
	}
}

function showToTop(){
	var SCREEN_WIDTH = $(window).width();
	console.log(SCREEN_WIDTH)
	if (SCREEN_WIDTH < 753) {
		console.log($(window).scrollTop());
		if ($(window).scrollTop() > 5750) {
			$(".to-top").removeClass('hide')
			console.log("show");
		}else{
			$(".to-top").addClass('hide')
			console.log("hide");
		}
	}
}

$(window).resize(function() {
	footerCentering();
	showToTop();
});


$(window).scroll(function() {
	showToTop();
});

$(document).ready(function() {
	footerCentering();
	showToTop()
	$(".to-top a").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

});