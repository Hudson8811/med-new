jQuery(function ($) {
	function sel2WithIconsTheme(state) {
		if (!state.id) {
			return state.text;
		}
		var imgSrc = $(state.element).attr("data-img-src");
		if (typeof imgSrc !== "undefined" && imgSrc.length>0) {
			var $state = $(
				'<span><img src="' +
					$(state.element).attr("data-img-src") +
					'" class="select-item-img-icon" />' +
					state.text +
					"</span>"
			);
		} else {
			var $state = $("<span>" + state.text + "</span>");
		}

		return $state;
	}

	$(".js-simple-select2").each(function (index) {
		var placeholder = $(this).attr("data-placeholder");
		if (typeof placeholder !== "undefined" && placeholder.length > 0) {
			$(this).addClass("simple-select2--placeholder-selected");
		}
		var select = $(this);

		var ddautowidth=false;
		if($(this).attr("data-dd-autowidth")===true){
			ddautowidth=true;
		}
		var selectautowidth=false;
		if($(this).attr("data-select-autowidth")===true){
			selectautowidth=true;
		}

		$(this)
			.select2({
				language: "ru",
				theme: "custom-theme",
				minimumResultsForSearch: Infinity,
				width: selectautowidth?"auto" : '100%',
				dropdownAutoWidth: ddautowidth,
				//width: "auto",
				templateResult: sel2WithIconsTheme,
				templateSelection: sel2WithIconsTheme,
				dropdownParent: $(this).siblings(".simple-select2-items-wrapper")
			})
			.on("select2:open", function (e) {
				$(this)
					.siblings(".simple-select2-items-wrapper")
					.addClass("simple-select2-items-wrapper--show");
			})
			.on("select2:closing", function (e) {
				if ($(this).attr("data-close-anvaliable") !== "1") {
					e.preventDefault();
					select.attr("data-close-anvaliable", "1");
					select
						.siblings(".simple-select2-items-wrapper")
						.removeClass("simple-select2-items-wrapper--show");
					setTimeout(function () {
						select.select2("close");
					}, 350);
				} else {
					$(this).attr("data-close-anvaliable", "2");
				}
				//$(this).select2('close');
			})
			.on("select2:select", function (e) {
				$(this).removeClass("simple-select2--placeholder-selected");
			});
	});


	$('.js-simple-input-file input').on('change', function(){
		var fname=$(this)[0].files[0].name;
		$(this).siblings('.simple-input-file__text').removeClass('simple-input-file__text--preview').html(fname);
	});

});
