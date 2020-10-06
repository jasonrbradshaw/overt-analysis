/* https://codepen.io/nickcil/pen/sfutl */

$(window).scroll(function(){
    $(".fadeout").css("opacity", 1 - $(window).scrollTop() / 250);
  });