$(function() {
    $('.care__triangle-color').hover(function() {
      $(this).prev().prev().hide();
      $(this).prev().prev().prev().hide();
      $(this).text('-');
    }, function() {
        $(this).prev().prev().show();
        $(this).prev().prev().prev().show();
        $(this).text('+');
    });
});