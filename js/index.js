// navbar
$('.navbar .dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideDown();
  }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideUp()
  });
// navbar-end
$(function() {
  $('.pop').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#imagemodal').modal('show');   
  });		
});


// scroll
$('#s-right-btn').click(function() {
  event.preventDefault();
  $('#s-move').animate({
    scrollLeft: "+=600px"
  }, "slow");
});

 $('#s-left-btn').click(function() {
  event.preventDefault();
  $('#s-move').animate({
    scrollLeft: "-=600px"
  }, "slow");
});
