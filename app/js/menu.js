var menu = (function () {
  var init = function () {
    console.log('Подключен Меню');
  };

  return {
    init: init
  };
})();

$(document).ready(function () {
  // Выпадающее меню бургер
  $(function () {
    $('.menu-icon').on('click', function (e) {
      $(this).closest('nav').toggleClass('menu-state-open');
    });
  });
});