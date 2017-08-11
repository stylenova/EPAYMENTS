$(document).ready(function () {
  $(function () {
    $('.menu-icon').on('click', function (e) {
      $(this).closest('nav').toggleClass('menu-state-open');
    });
  });
});