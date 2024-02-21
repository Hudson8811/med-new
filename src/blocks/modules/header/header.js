$(document).ready(function (){
    $(".js-open-main-menu").on("click", function (){
		event.preventDefault();
		$(".menu-overlay").fadeIn(300,function (){
			$(this).addClass("_active");
		});
		$(".header-mob-menu").addClass("_active");
	});

	$(".menu-overlay").on("click", function (){
		$(".header-mob-menu").removeClass("_active");
		$(".menu-overlay").removeClass("_active").fadeOut(300);
	});
});