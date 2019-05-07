window.onload = function () {
// Кнопка поиска
$('#myPopover').on('hidden.bs.popover', function () {
  // do something…
}) 

$('.smoothScroll').on('click',function (e) {
  e.preventDefault();
  var target = this.hash,
  $target = $(target);

 $('html, body').stop().animate({
   'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
   window.location.hash = target;
  });
});

$(document).ready(function () {
  $('.animated-icon1,.animated-icon3,.animated-icon4').click(function () {
    $(this).toggleClass('open');
  });
});

$(document).on('change', '.file-input-field', function () {
  var $value = $(this).parent().next();
  $value.addClass("added").text($(this).val().replace(/C:\\fakepath\\/i, ''));
});
$("#phone").mask("+8 (9999) 999 - 99 - 99", { completed: function () { alert("Да, этой мой номер"); } });
};