var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.iconmenu').click(function() {
    $('.menu').animate({
      left: "0"
    }, 250);

    $('body').animate({
      left: "200px"
    }, 250);
  });

  /* Then push them back */

  $('.row').click(function() {
    $('.menu').animate({
      left: "-200px"
    }, 350);

    $('body').animate({
      left: "0px"
    }, 350);
  });
};
$(document).ready(main);
