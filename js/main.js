$(document).ready(function(){
new WOW().init();
	// alert("hello anik");
/*camera_wrap_4 js*/
 $('#camera_wrap').camera({
        loader: false,
        pagination: true ,
        minHeight: '250',
        thumbnails: true,
        height: '50.6%',
        caption: false,
        navigation: false,
        fx: 'mosaic'
    });
     
    $().UItoTop({ easingType: 'easeOutQuart' });

/*camera_wrap_4 js*/

$('.parallax-window').parallax({imageSrc: 'image/background-07-1920x900.jpg'});

 // var swiper = new Swiper('.swiper-container', {
 //        pagination: '.swiper-pagination',
 //        paginationClickable: true,
 //        nextButton: '.swiper-button-next',
 //        prevButton: '.swiper-button-prev',
 //        parallax: true,
 //        speed: 600,
 //    });
      

});

