var windowObj = $(window);
var about = $("#about");
var aboutRender = false;
var proj = $("#projects");
var projRender = false;


function inView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;

    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}


function autoScroll(target) {
	document.getElementById(target).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}


$(document).ready(function() {
	
	if (inView(about, windowObj) && !aboutRender) {
			$("#about-header").animate({width:'toggle'}, 1000);
			aboutRender = true;
	};
	
	if (inView(proj, windowObj) && !projRender) {
			$("#projects-header").animate({width:'toggle'}, 1000);
			projRender = true;
	};
	
	$(document).scroll(function () {
		if (inView(about, windowObj) && !aboutRender) {
			$("#about-header").animate({width:'toggle'}, 1000);
			aboutRender = true;
		};
	
		if (inView(proj, windowObj) && !projRender) {
			$("#projects-header").animate({width:'toggle'}, 1000);
			projRender = true;
		};
	});
  
});