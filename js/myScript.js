$.fn.exists = function () {
  return this.length !== 0;
}
$(document).ready(function(){
  /* *** parallax *** */
  $('.main-photo .background, .main-photo-landing .background').parallax("50%", .15);
  // $('.background-section4').parallax("50%", .15);
  $('.background-section10').parallax("50%", .8);
  /* *** End parallax *** */

  $('[data-toggle="tooltip"]').tooltip();
  $('.dropdown-language').dropdown();

  /* *** waypoint *** */
  $('.section4-parallax .background').waypoint(function(){
    $(this).toggleClass('background-section4').parallax("50%", .15);
    $(this).toggleClass('no-parallax');
  });
  $('.section10 .background').waypoint(function(){
    $(this).toggleClass('background-section10').parallax("50%", .15);
    $(this).toggleClass('no-parallax');
  });
  /* *** End waypoint *** */
  /*** enter popup ***/
  var $form_wrapper = $('#form_wrapper'),
      $currentForm = $form_wrapper.children('.modal-content.active'),
      $linkform = $form_wrapper.find('.linkform');
  $form_wrapper.children('.modal-content').each(function(i){
    var $theForm = $(this);
    if(!$theForm.hasClass('active'))
      $theForm.hide();
    $theForm.data({
      width : $theForm.width(),
      height : $theForm.height()
    });
  });
  setWrapperWidth();
  $linkform.bind('click',function(e){
    var $link = $(this);
    var target = $link.attr('rel');
    $currentForm.fadeOut(100,function(){
      $currentForm.removeClass('active');
      $currentForm= $form_wrapper.children('.modal-content.'+target);
      $form_wrapper.stop()
      .animate({
        width : $currentForm.data('width') + 'px',
        height : $currentForm.data('height') + 'px'
      },200,function(){
        $currentForm.addClass('active');
        $currentForm.fadeIn(100);
      });
    });
    e.preventDefault();
  });
  function setWrapperWidth(){
    $form_wrapper.css({
      width : $currentForm.data('width') + 'px',
      height : $currentForm.data('height') + 'px'
    });
  }
  /*** End 'enter popup' ***/
  /* *** go to the anchor *** */
  $('.reg-anchor').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
  /* *** End 'go to the anchor' *** */
  /* *** animations *** */
  $('.section6 .table, .big-logo-nav')
    .waypoint(function(){
      $(this).addClass('fadeInLeft');
    }, {
      offset: '90%'
    });
  $('.section6 .table, .big-logo-nav').addClass('animated boxHidded');

  $(".four-block .block").mouseover(function(){
    $(".four-block .link").addClass('fadeInDown animated');
  });
  /* *** End animations *** */
  /* *** fixed bar *** */
  var h_hght = $('body').attr('data-menu-height');
  var h_mrg = 0;
  $(function(){
    $(window).scroll(function(){
      var top = $(this).scrollTop();
      var elem = $('body');
      var mainMenu = $('.navigation-landing');
      if (top+h_mrg < h_hght) {
       elem.css('top', (h_hght-top));
       mainMenu.removeClass('fix');
      } else {
       elem.css('top', h_mrg);
       mainMenu.addClass('fix');
      }
    });
  });
  
  /* *** End fixed bar *** */
  /* *** scrollto *** */
  $(".to_about").click(function(evn){
    if ($('body').hasClass("view-page")) {
      return true;
    } else {
      evn.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash);
      return false;
    }
  });
  var aChildren = $(".sections-menu li").children();
  var aArray = [];
  aChildren.each(function() {
    aArray.push(this.hash);
  });
  $(window).scroll(function(){
    var windowPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var docHeight = $(document).height();
    for (var i=0; i < aArray.length; i++) {
      var theID = aArray[i];
      if ($(theID).exists()) {
        var divPos = $(theID).offset().top;
        var divHeight = $(theID).height();
        var mItem = $(".sections-menu a[href*='"+theID+ "']");
        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
          mItem.addClass("active");
        } else {
          mItem.removeClass("active");
        }
      }
    }
  });
  /* *** End 'scrollto' *** */
  /* *** Draggables *** */
});