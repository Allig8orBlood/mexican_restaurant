$(function() {

   var headerBarStatus = 'off';
   $(window).on('scroll', function() {
      if($(this).scrollTop() > 100) {
         if(headerBarStatus === 'off') {
            $('.headerBar').stop().animate({
               top: 0
            }, 300);
            headerBarStatus = 'on';
         }
      } else {
         if(headerBarStatus === 'on') {
            $('.headerBar').stop().animate({
               top: -70
            }, 300);
            headerBarStatus = 'off';
         }
      }
   });

   var drawerDis = 200;
   $('.toggleBtn').on('click', function() {
         $('.drawerMenu').animate({
            left: '+=' + drawerDis
         }, 200);
         drawerDis *= -1;

         $(this).toggleClass('open');
         if($(this).hasClass('open')) {
            $('i', this).addClass('fa-times');
            $('.drawerMenu').addClass('open');
         } else {
            $('i', this).removeClass('fa-times');
            $('.drawerMenu').removeClass('open');
         }
   });

   $('.foodGalleryTab > li').on('click', function() {
      $('.foodGalleryTab > li,.foodGalleryImgs > foodImg').removeClass('active');
      var tabClass = $(this).attr('class');
      $(this).addClass('active');

      $('.foodImg').each(function() {
         if($(this).attr('class').indexOf(tabClass) != -1) {
            $(this).addClass('active').fadeIn(700);
         } else {
            $(this).hide();
         }
      });
   });
   // モーダルウィンドウ
   $('.foodGalleryImgs > a').on('click', function() {

      $('body').append('<div id="modalBg">');
      $('body').append('<div id="modalPhoto">');

      $('#modalBg').hide();
      $('#modalPhoto').hide();

      $('#modalPhoto').html('<img>');

      $('#modalPhoto > img').attr('src', $(this).attr('href'));
      $('#modalPhoto > img').attr('alt', $('img', this).attr('alt'));

      $('#modalBg').fadeIn();
      $('#modalPhoto').fadeIn();

      $('#modalBg').on('click', function() {
         $(this).fadeOut(function() {
            $(this).remove();
         });
         $('#modalPhoto').fadeOut(function() {
            $(this).remove();
         });
      });
      modalCenter();
      $(window).resize(modalCenter);

      return false;

   });
   //モーダルウィンドウ中央寄せ
   function modalCenter() {
      var winWidth = $(window).width();
      var winHeight = $(window).height();
      var photoWidth = $('#modalPhoto').width();
      var photoHeight = $('#modalPhoto').height();

      var modalLeft = (winWidth - photoWidth) / 2;
      var modalTop = (winHeight - photoHeight) / 2;
      $('#modalPhoto').css({
         'left': modalLeft + 'px',
         'top': modalTop + 'px'
      });
   }
   //スムーススクロール
   
   $('.smoothNav > ul > li > a').on('click', function() {
      var target = $($(this).attr('href')).offset().top;
      $('html, body').animate({
         scrollTop: target
         }, 500);

      return false;
   });
   //ページトップへスムーススクロール
   var pageTop = $('#pageTop');
   pageTop.hide();
   $(window).scroll(function() {
      if($(this).scrollTop() > 100) {
         pageTop.fadeIn();
      } else {
         pageTop.fadeOut();
      }
   });
   pageTop.on('click', function() {
      $('html, body').animate({
         scrollTop: 0
      }, 500);
   });

   //what people say スライド
   var dir = -1;
   var duration = 500;
   //スライドliのwidth取得
   var slideWidth = $('#slide > ul > li').width();
   var slideNum = $('#slide > ul > li').length;
   var slideUlWidth = slideWidth * slideNum;
   var sliderWidth = $('#slide').width();
   $('#slide > ul > li').css('width', sliderWidth);
   $('#slide > ul').css('width', slideUlWidth);
   // console.log(sliderWidth);

   $('#slide > ul').prepend($('#slide li:last-child'));
   $('#slide > ul').css('left', -slideWidth);

   function slide() {
      if(dir == -1) {
         $('#slide > ul').stop().animate({
            left: '-=' + slideWidth
         }, duration, function() {
            $(this).append($('#slide li:first-child'));
            $(this).css('left', -slideWidth);
         });
      } else {
         $('#slide > ul').stop().animate({
            left: '+=' + slideWidth
         }, duration, function() {
            $(this).prepend($('#slide li:last-child'));
            $(this).css('left', -slideWidth);
         });
      }
   }

   $('#prevBtn').on('click', function() {
      dir = 1;
      slide();
   });

   $('#nextBtn').on('click', function() {
      dir = -1;
      slide();
   });

});
