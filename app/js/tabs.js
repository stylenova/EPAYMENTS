var tabs = (function () {
  var init = function () {
    console.log('Подключен Tabs');
  }

  return {
    init: init
  };
})();

$(document).ready(function () {
  $(".tab__item").not(":first").hide();
  $(".payment-rule .tab").click(function () {
    $(".payment-rule .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab__item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
});