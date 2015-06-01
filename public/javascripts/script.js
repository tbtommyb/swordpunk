$(document).ready(function(){
  $('.profile').click(function() {
    $(this).parent().siblings('.text-box').show('slow');
  });
  $(document).mouseup(function (e) {
    var container = $('.text-box');

    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.hide();
    }
});
});