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
        var headerHeight = $('.header').outerHeight();
        if ( scroll > headerHeight) {
            $('body').addClass('scrolled');
            if($('body').hasClass('scrolled')){
                $('.header').css({
                    'position':'fixed',
                });
                $(".container-othermenu").css("cssText", "display: none !important;");
                // $('#menu-menu-1').css({
                //     'height':'300px',
                //     'overflow-y':'scroll'
                // });
                $('#menu-menu-1 li').css({
                    'display':'block',
                    'height':'auto'
                });
            }else{
                $('.header').css({
                    'position':'relative',
                });
            }
        } else {
            $('body').removeClass('scrolled');
                // $('#menu-menu-1').css({
                //     'height':'auto',
                //     'overflow-y':'hidden'
                // });
            $('.header').css({
                'position':'relative',
            });
            $(".container-othermenu").css("cssText", "display: flex !important;");
        }

}


function owlInit(){
        var homeOwl = $("#owl-demo");
        if(homeOwl.length > 0){
          homeOwl.owlCarousel({
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem : true,
          autoPlay: true,
          stopOnHover: false,
      navigation : true,
      navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

          });
        }
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
}

function HeaderHeightMarginTop(){

    var headerHeight = $('.navbar').outerHeight() + 'px';
    var headerInnerHeight = $('.navbar').innerHeight() + 'px';

    $('.site-content').css({
        'margin-top' : headerHeight
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
        // isBodyScrolled();
   })(jQuery);
  });
