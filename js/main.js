$(function() {
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
   $('nav > ul > li > a').on('click', function() {
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
   var duration = 300;

   $('#slide ul').prepend($('#slide li:last-child'));
   $('#slide ul').css('left', -1000);

   function slide() {
      if(dir == -1) {
         $('#slide ul').animate({
            'left': '-=1000px'
         }, duration, function() {
            $(this).append($('#slide li:first-child'));
            $(this).css('left', -1000);
         });
      } else {
         $('#slide ul').animate({
            'left': '+=1000px'
         }, duration, function() {
            $(this).prepend($('#slide li:last-child'));
            $(this).css('left', -1000);

            dir = -1;
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
