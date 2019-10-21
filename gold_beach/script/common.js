
$(document).ready(function(){
  $('.your-class').slick({
   infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        width: '100px'
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
	
	
	$('.selector').slick({
  nextArrow: '<i class="fa fa-arrow-right">1</i>',
  prevArrow: '<i class="fa fa-arrow-left">123</i>',
// add the rest of your options here
});



	
	
/* fixed menu */	
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 120) {
        $('.nav__menu').addClass('fixed');
		$('.menu').css({'margin': '0'});
	
    } else {
        $('.nav__menu').removeClass('fixed');
			$('.menu').css({'margin': '0 auto'});
		
    }
});

let mobile = 0;	
	
$('.burger__menu').on('click' , function(){
	if(mobile == 0){
		$('.nav__menu_mobile').fadeIn();
		mobile = 1;
	}
	else {
		$('.nav__menu_mobile').fadeOut();
		mobile = 0;
	}
	
	
})
	
});

