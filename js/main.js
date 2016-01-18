$(document).ready(function() {
  console.log('main.js linked!');

  $(window).scroll(function() {

    if ($(this).scrollTop()>0) {
      console.log('inside if');
        $('.scroll-down').fadeOut();
     } else {
      console.log('inside else');
      $('.scroll-down').fadeIn();
     }
 });


})