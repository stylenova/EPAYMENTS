var resize = (function () {
  var init = function () {
    console.log('Подключен Resize window');
  }

  return {
    init: init
  };
})();

$(document).ready(function () {
  // Удалить добавить класс при определенном разрешении
  $(window).resize(function () {
    var windowWidth = $(window).width();
    var url = document.location.href;
    // Заменить значине index на url сайта
    var index = 'http://localhost:3000/';

    if (url !== index && windowWidth < 1170) {
      $(".main-block").removeClass("main-block_mod");
    } else if (url !== index && windowWidth >= 1171) {
      $(".main-block").addClass("main-block_mod");
    }
  });
});