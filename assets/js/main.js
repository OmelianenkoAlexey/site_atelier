// !для информации значек $ это начит вызов библиотеки jquery

$(document).ready(function () {
	// !заменили ID на наш клас .header-navbar__btn
	$('.header-navbar__btn').click(function(){
		$(this).toggleClass('open');
		// способ 1
		// $('.header-navbar__list').toggleClass('header-navbar__list--active');
		// способ 2
		$('.header-navbar__list').stop(true,true).slideToggle(500);
	});
});