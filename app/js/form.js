var form = (function () {
  var init = function () {
    console.log('Подключен Form');
  }

  return {init: init};
})();

$(document).ready(function () {
    // Запретить ввод букв
    $("#tel, #id-account, #sum").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
        return false;
      }
    });
  });