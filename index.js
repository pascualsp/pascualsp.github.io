var windowObj = $(window);
var about = $("#about");
var aboutRender = false;
var exp = $("#experience");
var expRender = false;


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
	
  $(document).on("scroll", function () {
    if (inView(about, windowObj) && !aboutRender) {
        $("#about-content").animate({width:'toggle'}, 1000);
		aboutRender = true;
    };
	
	if (inView(exp, windowObj) && !expRender) {
        $("#experience-content").animate({width:'toggle'}, 1000);
		expRender = true;
    };
	
  });
  
});