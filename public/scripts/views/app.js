'use strict';

// navigation
var app = app || {};

(function(module) {

  const pageView = {};

  pageView.handleNav = function() {
    if($(window).width() <= 640){
      $('#nav-list').on('click', 'i.fa-bars', function() {
        let $navList = $('.nav-ul');
        $navList.slideToggle();
        });
      }
    if($(window).width() > 640){
      let $hideOther = $('.sub-nav-li').hide();
        $('#nav-list').on('click', '.nav-li', function() {
      let $color = $(this).css('color', '');
      let $hideOther = $('.sub-nav-li').hide('slow');
      let $listEl = $(this).attr('id');

        $('#' + $listEl + '-li').children().show('slow');
        })

      }
};

pageView.handleSubNav = function() {
  $('.sub-nav-li').on('click', function(evn){
      evn.preventDefault();
      let $href = $(this).children().attr('href');

      $("body, html").animate({
       scrollTop: $( $href ).offset().top
   }, 1000);
      console.log($href);
  });

  let $sections = $('.section-container');


  $(window).scroll(function(){



    //
    //
    // let $currentSection;
    //
    //
    // $sections.each(function(){
    //
    //   var divPosition = $(this).offset().top;
    //
    //   if( divPosition - 1 < currentScroll ){
    //
    //     $currentSection = $(this);
    //
    //   }
    //
    //
    //   var id = $currentSection.attr('id');
        console.log($sections.outerHeight());
   // 	 $('a').removeClass('active');
   // 	 $("[href=#"+id+"]").addClass('active');

    })

  };


//image carousel

pageView.handleCarousel = function() {
  var index = 0;
  var imgList = [$('#1'), $('#2'), $('#3')];
  $('.carousel-img').hide();
  imgList[index].show();

  $('#carousel').on('click', 'i#right', function() {
    index++;
    $('.carousel-img').hide();
    if (index === 3) {
      index = 0;
    }
    imgList[index].fadeIn('fast');
    });

  $('#carousel').on('click', 'i#left', function() {
    index--;
    $('.carousel-img').hide();
    if (index < 0) {
      index = 2;
    }
    imgList[index].show();
  });
}

// project images and description

pageView.handleProjectDescription = function() {
  $('#projects').on('mouseenter', '.project-article', function() {
    var $description = $($(this).children('p'));
    var $img = $($(this).children('img'));
    var $imgHeight = $($(this).siblings().children('img').height());
    var $newHeight = $imgHeight[0] + 'px';
    $img.hide();
    $description.fadeIn().css('height', $newHeight);
  })
  $('#projects').on('mouseleave', '.project-article', function() {
    var $description = $($(this).children('p'));
    var $img = $($(this).children('img'));
    $img.fadeIn();
    $description.hide();
  })
}

pageView.handleNav();
pageView.handleCarousel();
pageView.handleProjectDescription();

module.pageView = pageView;
})(app);
