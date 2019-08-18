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
   // 拡大画像表示
   $('.foodGalleryImgs > a').on('click', function() {

      $('body').append('<div id="modalBg">');
      $('body').append('<div id="modalPhoto">');
      //クリックした画像のalt属性を取得
      // $('.foodGalleryImgs > a > img').on('click', function() {
      //    $('#modalPhoto > img').attr('alt', $(this).attr('alt'));
      // });
      $('#modalBg').hide();
      $('#modalPhoto').hide();
      // $('main, .sectionBox2').hide();
      $('#modalPhoto').html('<img>');

      $('#modalPhoto > img').attr('src', $(this).attr('href'));
      $('#modalPhoto > img').attr('alt', $('img', this).attr('alt'));

      $('#modalBg').fadeIn();
      $('#modalPhoto').fadeIn();

      $('#modalBg').on('click', function() {
         $(this).fadeOut(function() {
            $(this).remove();
            // $('main, .sectionBox2').fadeIn();
         });
         $('#modalPhoto').fadeOut(function() {
            $(this).remove();
            // $('main, .sectionBox2').fadeIn();
         });
      });
      modalCenter();
      $(window).resize(modalCenter);

      return false;

   });

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

   $('nav > ul > li > a').on('click', function() {
      var target = $($(this).attr('href')).offset().top;
      $('html, body').animate({
         scrollTop: target
         }, 500);

      return false;
   });

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
      $('html, body').animate( {
         scrollTop: 0
      }, 500);
   });

});
