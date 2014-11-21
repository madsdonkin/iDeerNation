//@codekit-prepend "libs/modernizr-2.5.3.min.js", "libs/slick.min.js", "libs/picture.js", "libs/retina.js";

/**
 * Add Modernizr test for box sizing
 */
Modernizr.addTest("boxsizing", function(){
	return Modernizr.testAllProps("boxSizing") && (document.documentMode === undefined || document.documentMode > 7);
});

/**
 * Change the width of all elements to account for border-box
 */
$(function(){
	if(!($('html').hasClass('boxsizing'))){
		$('*').each(function(){
			if($(this).css('display')=='block'){
				var f, a, n;
				f = $(this).outerWidth();
				a = $(this).width();
				n = a-(f-a);
				$(this).css('width', n);
			}
		});
	}
}); 

/**
 * Make images responsive using jQuery Picture
 */
$(function(){
	$('figure.responsive').picture({ container : $('#content') });
});

$('.projects').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});