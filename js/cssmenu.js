( function( $ ) {
$( document ).ready(function() { // Если загрузился весь HTML и картинки
if (window.console) console.log('cssmenu.js загрузилось!'); // Если активна консоль отладки браузера
$('#cssmenu > ul > li > a').click(function() { // Создать анонимную функцию, суть которой в наличие детей (child selectors) ul > li > a у div с названием cssmenu (он же класс). Смотри: https://css-tricks.com/child-and-sibling-selectors/
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});
});
} )( jQuery );
