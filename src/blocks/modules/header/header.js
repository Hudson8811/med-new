$(document).ready(function (){
    $(".js-open-main-menu").on("click", function (){
		event.preventDefault();
		$(".menu-overlay").fadeIn(300,function (){
			$(this).addClass("_active");
		});
		$(".header-mob-menu").addClass("_active");
	});

    $(".js-close-main-menu").on("click", function (){
		event.preventDefault();
		$(".header-mob-menu").removeClass("_active");
		$(".menu-overlay").removeClass("_active").fadeOut(300);
	});

	$(".menu-overlay").on("click", function (){
		event.preventDefault();
		$(".header-mob-menu").removeClass("_active");
		$(".menu-overlay").removeClass("_active").fadeOut(300);
	});
});