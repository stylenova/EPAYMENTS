var activeMenu = (function () {
  var init = function () {
    console.log('Подключен Active-menu');
  }

  return {
    init: init
  };
})();

$(document).ready(function () {
  $('.menu__link').each(function () { // получаем все нужные нам ссылки
    var location = window.location.href; // получаем адрес страницы
    var link = this.href; // получаем адрес ссылки
    if (location == link) { // при совпадении адреса ссылки и адреса окна
      $(this).addClass('active'); //добавляем класс
    }
  });
});