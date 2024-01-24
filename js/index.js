// navbar
$('.navbar .dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideDown();
  }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideUp()
  });
// navbar-end

$(function() {
  $('.item').on('click', function() {
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

$( ".item" ).hover(
   function() {
    // $( this ).addClass( "active " );
    
    $(".item").addClass('dark-img');
    $( this ).removeClass( "dark-img " );
    $( this ).addClass( "dark-active" );
    
  },
  function() {

   $( this ).removeClass( "dark-active " );
   $(".item").removeClass('dark-img');

  }
);

// ---------------gallery-slider---------------------------
const images = ['./images/img1.jpg', './images/img2.jpg', './images/img3.jpg','./images/img4.jpg','./images/img5.jpg','./images/img6.jpg','./images/img7.jpg','./images/img8.jpg','./images/img9.jpg','./images/img10.jpg','./images/img11.jpg','./images/img12.jpg',];
let currentIndex = 0;

const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const image = document.getElementById('m-img');

previousBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  image.src = images[currentIndex];
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
});

$(document).keydown(function(e){
  if (e.keyCode == '39'){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    image.src = images[currentIndex];
  }
});

$(document).keydown(function(e){
  if (e.keyCode == '37'){
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
  }
});

// ---------------gallery-slider-end---------------------------



