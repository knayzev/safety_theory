// Кнопка поиска
window.onload = function() {

$(document).ready(function() { 

  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });

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
  // Обрез текста
  $('.box__news').each(function () {
    let size = 250;
    let newsText = $(this).text();
    if (newsText.length > size) {
      slicedText = newsText.slice(0, size);
      $(this).text(`${slicedText}...`);
    }
  })

  //owl-carousel initiazilation
  $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      320: {
        items: 1
      },
      600: {
        items: 1
      },
      880: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })

// Блокировка отправки


  // Выбрать несколько элементов

  $('.sort').click(function () {
    var mylist = $('.items');
    var listitems = mylist.children('li').get();
    listitems.sort(function (a, b) {
      var compA = $(a).data('selected');
      var compB = $(b).data('selected');
      return (compA < compB) ? 1 : (compA > compB) ? 1 : 0;
    });
    $.each(listitems, function (idx, itm) { mylist.append(itm); });
  })

  $('li', '.items').click(function () {
    var checks = $('[type="checkbox"]', '.checks');
    var item = $(this);

    if (item.data('selected') == '0') {
      item.data('selected', '1');
      item.addClass('selected');
    } else {
      item.data('selected', '0');
      item.removeClass('selected');
    }

    checks.filter('[data-guid="' + item.data('guid') + '"]').prop('checked', item.data('selected') == '1');
  });

  $(document).on('change', '.file-input-field', function () {
    var $value = $(this).parent().next();
    $value.addClass("added").text($(this).val().replace(/C:\\fakepath\\/i, ''));
  });
  $("#phone").mask("+7 (999) 999 - 99 - 99", { completed: function () { alert("Да, этой мой номер"); } });
 


  $("#test").on('click', function() {
  
    $.fancybox.open({
      src  : '#hidden-content',
      type : 'inline',
      opts : {
        afterShow : function( instance, current ) {
          console.info('done!');
        }
      }
    });
    
  });

});
};