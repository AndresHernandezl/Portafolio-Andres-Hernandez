/**stiky Menu*/

var $navTop = 441;
var pegarStyky = function(){
	var $scrollTop = $(window).scrollTop();
	var widthW = $(window).width();
 	
	if($scrollTop >= $navTop)
		
	{
		if(widthW >= 980){
		$('.menu').css({left: '0'});
		}else{
			$('.menu').css({left: '-100%'});
		}
		
		$(".menu").addClass('stiky');
		$(".Logo").addClass('Logo2').removeClass('Logo');
		
		
	}
	else{
		$('.menu').css({left: '-100%'});
		$(".menu").removeClass('stiky');
		$(".Logo2").addClass('Logo').removeClass('Logo2');
		
	}

}




$(window).on('scroll',pegarStyky);



/*Crear ScrollSky*/

$(document).ready(function(){
    /*
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
    $(".navegador-Item a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });

    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and 
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $(".navegador li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("activate");
            } else {
                $("a[href='" + theID + "']").removeClass("activate");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("activate")) {
                var navActiveCurrent = $(".activate").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("activate");
                $("nav li:last-child a").addClass("activate");
            }
        }
    });
});
/**Menu Resposive*/
$(document).ready(main);
var contador = 1;

function main (){
	$('.bt-menu').click(function(){
	if(contador == 1){
		$('.menu').animate({
			left: '0'
		});
	contador =0;
	}else {
			contador = 1;
			$('.menu').animate({
			left: '-100%'
		});
	}
		
	});
	
	$('.navegador-Item a').click(function(){
		contador = 1;
		var widthW = $(window).width();
		if(widthW < 980){
			
			$('.menu').animate({
				left: '-100%'
			});
			 }else{
				$('.menu').animate({
				left: '0'
				});
			 }
	});
}

