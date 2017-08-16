// PopUp
var popup = (function () {
  var init = function () {
    console.log('Подключен PopUp');
  }

  return {
    init: init
  };
})();


$(document).ready(function () {
	$(".registration").on('click', function() {
		$(".cover").fadeIn('slow');
		$(".popup-content").fadeIn('slow');
	});

	$("#reg-form").on('click', function() {
		if($(event.target).is(".close")) {
			$(".cover").fadeOut('slow');
			$(".popup-content").fadeOut('slow');
		}
	});

	$('.cover').on('click', function(){
		$(".cover").fadeOut('slow');
		$(".popup-content").fadeOut('slow');
	});
});
