$(document).ready(function() {
  console.log('main.js linked!');

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      console.log('inside if');
        $(".clearHeader").addClass("darkHeader");
    } else {
      console.log('inside else');
        $(".clearHeader").removeClass("darkHeader");
    }
});

})