$(document).ready(function () {
  // Выпадающее меню бургер
  $(function () {
    $('.menu-icon').on('click', function (e) {
      $(this).closest('nav').toggleClass('menu-state-open');
    });
  });

  // Запретить ввод букв
  $("#tel, #id-account, #sum").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
      return false;
    }
  });

});