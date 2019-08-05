$(function() {
   $('.foodGalleryTab > li').on('click', function() {
      $('.foodGalleryTab > li,.foodGalleryImgs > foodImg').removeClass('active');
      var tabClass = $(this).attr('class');
      $(this).addClass('active');

      $('.foodImg').each(function() {
         if($(this).attr('class').indexOf(tabClass) != -1) {
            $(this).addClass('active').fadeIn();
         } else {
            $(this).hide();
         }
      });
   });
});
