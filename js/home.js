$("#live-zone").on('touchmove mousemove', function(e) {
  var offset = $(this).offset();
  var width = (e.pageX - offset.left);
  $("#div-one").css("width", width);
  var liveWidth = $('#live-zone').width();
  if (liveWidth <= 450) {
    if ( width >= 185 && width <= 220 ) {
      $(".designer-text").fadeIn();
      $(".coder-text").fadeIn();
   } else if (width <= 184 ) {
     $(".coder-text").fadeIn();
     $(".designer-text").fadeOut();
  } else if ( width >= 221 ) {
     $(".designer-text").fadeIn();
     $(".coder-text").fadeOut();
   }
 } else {
   if ( width >= 465 && width <= 495 ) {
     $(".designer-text").fadeIn();
     $(".coder-text").fadeIn();
  } else if (width <= 464 ) {
    $(".coder-text").fadeIn();
    $(".designer-text").fadeOut();
} else if ( width >= 496 ) {
    $(".designer-text").fadeIn();
    $(".coder-text").fadeOut();
  }
 }
});
