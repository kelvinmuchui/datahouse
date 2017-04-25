$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
        $('.navbar').css('background', 'rgba(2, 1, 1, 0.7)');
    }
    else {
        $('.navbar').css('background', 'transparent');
    }
});
