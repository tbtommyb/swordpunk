$(document).ready(function(){
  $('img.profile').on({
    click: function(event) {
        $('#popup').popup({
            tooltipanchor: event.target,
            autoopen: true,
            color: '#fff',
            type: 'tooltip',
            outline: 'true',
            vertical: 'bottom',
            offsettop: 10
        });
    },
  })
});