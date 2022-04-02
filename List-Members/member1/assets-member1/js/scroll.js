$('a[href*="#"]')
  .not('[href="#"]')
  .click(function(e) {
    var data_id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(data_id).offset().top
    }, '1000');
  });