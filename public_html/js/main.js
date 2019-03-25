"use strict";

// global variables
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var winW,winH;

function pageCalculations() {
    winW = $(window).width();
    winH = $(window).height();
}


function singlePageScroll(){

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

}
function isBodyScrolled(){
        var scroll = $(window).scrollTop();
        var headerHeight = $('.navbar').outerHeight();
        // console.log(headerHeight);
        // console.log(scroll);
        if ( scroll > headerHeight ) {
            console.log("Scrolled more than headerHeight");
            $('.navbar-expand-md').addClass('fixed-top');
            $('.top-intro').css({
              "margin-top":headerHeight,
              "transition":"all .3s linear"
            });
            // if($('.site-header').hasClass('scrolled')){
            //     $(this).css({
            //         'position':'fixed',
            //     });
            //     // $(".container-othermenu").css("cssText", "display: none !important;");
            //     // $('#menu-menu-1').css({
            //     //     'height':'300px',
            //     //     'overflow-y':'scroll'
            //     // });
            //     // $('#menu-menu-1 li').css({
            //     //     'display':'block',
            //     //     'height':'auto'
            //     // });
            // }else{
            //     $(this).css({
            //         'position':'relative',
            //     });
            // }
        } else {
            $('.navbar-expand-md').removeClass('fixed-top');
            $('.top-intro').css({"margin-top":"0px"});
                // $('#menu-menu-1').css({
                //     'height':'auto',
                //     'overflow-y':'hidden'
                // });
            // $('.header').css({
            //     'position':'relative',
            // });
            // $(".container-othermenu").css("cssText", "display: flex !important;");
        }

}


function owlInit(){
        var homeOwl = $("#owl-demo");
        var sliderCaptiontext = $(".slider-caption-text");
        if(homeOwl.length > 0){
          homeOwl.owlCarousel({
          slideSpeed : 3000,
          paginationSpeed : 400,
          singleItem : true,
          autoPlay: true,
          stopOnHover: false,
          navigation : true,
          transitionStyle: "fade",
          afterAction: function(el){
           //remove class active
           this
           .$owlItems
           .removeClass('owl-active');
           

           //add class active
           this
           .$owlItems //owl internal $ object containing items
           .eq(this.currentItem)
           .addClass('owl-active');    

            },
      navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

          });
        }

          // $('.owl-active').each(function(){
          //   $(this).find('h3.slider-caption-text').addClass("animated fadeInUp delay-2s");
          // });
          // $('.owl-item').find('h3.slider-caption-text').removeClass("animated fadeInUp delay-2s");
        


        sliderCaptiontext
        var partnersOwl = $("#owl-demo-02");
        if(partnersOwl.length > 0){
          partnersOwl.owlCarousel({
         
              autoPlay: 3000, //Set AutoPlay to 3 seconds
         
              items : 4,
              itemsDesktop : [1199,3],
              itemsDesktopSmall : [979,3],
 stopOnHover: false,
      navigation : true,
      navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
          });
      }
      var testimoniOwl = $("#owl-demo-03");
        if(testimoniOwl.length > 0){
          testimoniOwl.owlCarousel({
         
              autoPlay: 3000, //Set AutoPlay to 3 seconds
         
              items : 2,
              itemsDesktop : [1199,2],
              itemsDesktopSmall : [979,2],
				stopOnHover: false,
      			navigation : true,
      			navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
          });
      }


      var resourcesOwl = $("#owl-demo-04");
      if(resourcesOwl.length > 0){

          resourcesOwl.owlCarousel({
         
              autoPlay: 10000, //Set AutoPlay to 3 seconds
         
              items : 3,
              itemsDesktop : [1199,3],
              itemsDesktopSmall : [979,3],
 stopOnHover: false,
      navigation : true,
      navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
          });

      }

}

function HeaderHeightMarginTop(){

    var headerHeight = $('.navbar').outerHeight() + 'px';
    var headerInnerHeight = $('.navbar').innerHeight() + 'px';

    $('.site-content').css({
        // 'margin-top' : headerHeight
    });

}

function enquireInit(){

enquire.register("screen and (min-width: 576px) and (max-width: 767px) and (orientation: landscape)", {
    match : function() {
        console.log("mobile landscape");
        // All login page carousels disappear
            $('#menu-menu-1').css({
                'height':'300px',
                'overflow-y':'scroll',
                'padding-bottom':'50px'
            });
    },
    unmatch : function() {
        // example.unmatch();
    },
    destroy : function() {
        // example.destroy();
    }
});


}

// Menu active jquery script
function activeClassChange(){
    $('.navbar-nav li a').click(function(e) {

        $('.navbar-nav li a.active').removeClass('active');

        // var $parent = $(this).parent();
        $(this).addClass('active');
        e.preventDefault();
    });
}


function formvalidatorinit(){

  $.validate({
    modules : 'location, date, security, file, logic',
  });
  $('#contact_message').restrictLength( $('#max-length-element') );
}


// DOM ready function
jQuery(document).on('ready', function () {

    (function ($) {
        // enquireInit();
        owlInit();
        singlePageScroll();
        activeClassChange();
        formvalidatorinit();
    })(jQuery);

});

// Window load function
jQuery(window).on('load', function () {
    (function ($) {
        // owlCarouselHome();
        HeaderHeightMarginTop();
        formvalidatorinit();
   })(jQuery);
  });

// window scroll function
jQuery(window).on('scroll', function () {
    (function ($) {
        isBodyScrolled();
   })(jQuery);
  });
