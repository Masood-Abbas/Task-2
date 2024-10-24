$(document).ready(function() {
  $(".btn").click(function() {
    const para = $(this).prev().find('.more-read');
    
    para.toggle();
    
    if (para.is(":visible")) {
      $(this).text("Read Less <");
    } else {
      $(this).text("Read More >");
    }
  });
});