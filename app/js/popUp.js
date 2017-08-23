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
	$(".registration, .entrance").on('click', function (e) {
		e.preventDefault();
		var thisClickPopup = $(this.classList);
		console.log(thisClickPopup);
		for (var i = 0; i < thisClickPopup.length; i++) {
			var thisClassMenu = thisClickPopup[i];
		}

		var reg = 'registration';
		var regBtn = 'btn registration';
		var entrance = 'entrance';
		if (thisClassMenu === reg || thisClassMenu === regBtn) {
			$(".cover").fadeIn('slow');
			$(".popup-content").fadeIn('slow');
		} else {
			$(".cover").fadeIn('slow');
			$(".popup-content-2").fadeIn('slow');
		}
	});

	$("#reg-form, #reg-form-2").on('click', function () {
		if ($(event.target).is(".close")) {
			$(".cover").fadeOut('slow');
			$(".popup-content, .popup-content-2").fadeOut('slow');
		}
	});

	$('.cover').on('click', function () {
		$(".cover").fadeOut('slow');
		$(".popup-content, .popup-content-2").fadeOut('slow');
	});
});