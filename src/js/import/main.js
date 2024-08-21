jQuery(function ($) {
	function sel2WithIconsTheme(state) {
		if (!state.id) {
			return state.text;
		}
		var imgSrc = $(state.element).attr("data-img-src");
		if (typeof imgSrc !== "undefined" && imgSrc.length > 0) {
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

		var ddautowidth = false;
		if ($(this).attr("data-dd-autowidth") === true) {
			ddautowidth = true;
		}
		var selectautowidth = false;
		if ($(this).attr("data-select-autowidth") === true) {
			selectautowidth = true;
		}

		$(this)
			.select2({
				language: "ru",
				theme: "custom-theme",
				minimumResultsForSearch: Infinity,
				width: selectautowidth ? "auto" : '100%',
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


	$('.js-simple-input-file input').on('change', function () {
		var fname = $(this)[0].files[0].name;
		$(this).siblings('.simple-input-file__text').removeClass('simple-input-file__text--preview').html(fname);
	});




	$('.js-lslider-with-thumbs').each(function () {
		var main_slider = $(this).find('.js-lslider-main');
		var thumbs_slider = $(this).find('.js-lslider-thumbs');
		var prevArrow = $(this).find('.js-lslider-main-prev');
		var nextArrow = $(this).find('.js-lslider-main-next');

		let thumbsSlider = new Swiper(thumbs_slider[0], {
			spaceBetween: 10,
			slidesPerView: 3,
			watchSlidesProgress: true,
			navigation: false,
			pagination: false,
			breakpoints: {
				480: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				640: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 5,
					spaceBetween: 19,
				}
			}
		});

		let mainSlider = new Swiper(main_slider[0], {
			spaceBetween: 10,
			slidesPerView: 1,
			thumbs: {
				swiper: thumbsSlider,
			},
			navigation: {
				nextEl: nextArrow[0],
				prevEl: prevArrow[0]
			},
			breakpoints: {
				768: {
					slidesPerView: 1,
				}
			},
			pagination: false
		});
	})

	$('.js-lslider-no-thumbs').each(function () {
		var main_slider = $(this).find('.js-lslider-main');
		var prevArrow = $(this).find('.js-lslider-main-prev');
		var nextArrow = $(this).find('.js-lslider-main-next');

		let mainSlider = new Swiper(main_slider[0], {
			spaceBetween: 10,
			slidesPerView: 1.1,
			navigation: {
				nextEl: nextArrow[0],
				prevEl: prevArrow[0]
			},
			breakpoints: {
				768: {
					slidesPerView: 1,
				}
			},
			pagination: false
		});
	})


	$('.main-slider .swiper').each(function(){
		let slider = $(this);

		if (slider.length > 0){
			mainSlider = new Swiper(slider[0], {
				// watchOverflow: true,
				// watchSlidesVisibility: true,
				// watchSlidesProgress: true,
				// preventInteractionOnTransition: true,
				// loop: true,
				slidesPerView: 1,
				navigation: {
					nextEl: slider.find('.swiper-button-next')[0],
					prevEl: slider.find('.swiper-button-prev')[0]
				},
				pagination: {
					el: slider.find('.swiper-pagination')[0],
					type: 'bullets',
					clickable: true
				},
				autoplay: {
					delay: 10000,
					// reverseDirection: true,
					disableOnInteraction: false,
				},
			});
		}
	});
	

	$('.js-cards-slider').each(function () {
		var slider = $(this);
		var prevArrow = $(this).find('.js-cards-slider-prev');
		var nextArrow = $(this).find('.js-cards-slider-next');

		let mainSlider = new Swiper(slider[0], {
			spaceBetween: 19,
			slidesPerView: 1.5,
			watchSlidesProgress: true,
			navigation: false,
			pagination: false,
			navigation: {
				nextEl: nextArrow[0],
				prevEl: prevArrow[0]
			},
			breakpoints: {
				480: {
					slidesPerView: 1.5,
					spaceBetween: 10,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 19,
				}
			}
		});
	})

	$('.js-init-simplebar').each(function(){
		new SimpleBar($(this)[0], {

			autoHide: false
		 });
	});

	$('.js-range-slider').each(function(){
		var rs=$(this);
		var rs_inp_l=rs.find('.js-range-slider__inp-left');
		var rs_inp_r=rs.find('.js-range-slider__inp-right');
		var rs_range=rs.find('.js-range-slider__range');

		var start_l=parseFloat(rs.attr('data-start-left'));
		var start_r=parseFloat(rs.attr('data-start-right'));
		var min=parseFloat(rs.attr('data-min'));
		var max=parseFloat(rs.attr('data-max'));
		var format=rs.attr('data-format');
		var step=rs.attr('data-step');


		if(isNaN(min)){
			min=0;
		}
		if(isNaN(max)){
			max=100;
		}
		if(isNaN(start_l)){
			start_l=min;
		}
		if(isNaN(start_r)){
			start_r=max;
		}
		if(typeof(format)==='undefined'){
			format='int';
		}
		if(typeof(step)==='undefined'){
			step='1';
		}

		var slider_params={
			start: [start_l, start_r],
			connect: true,
			range: {
				'min': min,
				'max': max
			},


			pips: {
				mode: 'count',
				values: 2,
				density: -1
			}
		};

		if(format==='int'){
			slider_params.step=parseInt(step);
			slider_params.format= wNumb({
				decimals: 0
			});
		}
		else if(format==='float'){
			slider_params.step=parseFloat(step);
		}


		var slider=noUiSlider.create(rs_range[0], slider_params);

		var timer;
		var delay = 100;

		slider.on('update', function (values, handle) {

			var value = values[handle];

			if (handle===0) {
				rs_inp_l[0].value = value;

				window.clearTimeout(timer);
				timer = window.setTimeout(function(){
					$(rs_inp_l[0]).trigger( 'change' );	
				}, delay);
			}
			else if (handle===1) {
				rs_inp_r[0].value = value;
				
				window.clearTimeout(timer);
				timer = window.setTimeout(function(){
					$(rs_inp_r[0]).trigger( 'change' );
				}, delay);
			}
		});
		rs_inp_l[0].addEventListener('change', function () {
			slider.set([this.value, null]);
		});
		rs_inp_r[0].addEventListener('change', function () {
			slider.set([null, this.value]);
		});
	});



	$('.js-filter-accordion').each(function(){
		var acc=$(this);
		var head=acc.find('.filter-accordion__head');
		var body=acc.find('.filter-accordion__body');
		head.on('click',function(){
			if(acc.hasClass('filter-accordion--active')){
				acc.removeClass('filter-accordion--active');
				body.stop(true).slideUp(300);
			}
			else{
				acc.addClass('filter-accordion--active');
				body.stop(true).slideDown(300);

			}

		});
	});

	$('.js-trigger-filters-screen').on('click', function () {
		var sbar=$('.js-filter-block');
		if(sbar.hasClass('layout-catalog__sidebar--active')){
			$('body').removeClass('scroll-locked')
			sbar.removeClass('layout-catalog__sidebar--active');
		}else{
			$('body').addClass('scroll-locked')
			sbar.addClass('layout-catalog__sidebar--active');
		}


	});

	$('.js-home-partners-slider').each(function () {
		let slider = $(this).find('.swiper');
		if (slider.length > 0){

			let mainSlider = new Swiper(slider[0], {
				spaceBetween: 30,
				speed: 2000,
				freeMode: true,
				loop: true,
				pagination: false,
				// centeredSlides: true,
				slidesPerView: 'auto',
				// setWrapperSize: true,
				allowTouchMove: false,
				autoplay: {
					delay: 0,
					// reverseDirection: true,
					disableOnInteraction: false,
				},
			});
		}
	})


	$('.js-home-product-slider').each(function () {
		let slider = $(this).find('.swiper');
		if (slider.length > 0){
			let prevArrow = $(this).find('.section__slider-nav--prev');
			let nextArrow = $(this).find('.section__slider-nav--next');

			let mainSlider = new Swiper(slider[0], {
				slidesPerView: 1,
				spaceBetween: 26,
				watchSlidesProgress: true,
				pagination: false,
				loop: true,
				navigation: {
					nextEl: nextArrow[0],
					prevEl: prevArrow[0]
				},
				breakpoints: {
					768: {
						slidesPerView: 2,
					},
					1100: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 4,
					}
				}
			});
		}
	})

	$('.js-home-clients-slider').each(function () {
		let slider = $(this).find('.swiper');
		if (slider.length > 0){
			let prevArrow = $(this).find('.section__slider-nav--prev');
			let nextArrow = $(this).find('.section__slider-nav--next');

			let mainSlider = new Swiper(slider[0], {
				slidesPerView: 1,
				spaceBetween: 26,
				watchSlidesProgress: true,
				pagination: false,
				loop: true,
				navigation: {
					nextEl: nextArrow[0],
					prevEl: prevArrow[0]
				},
				breakpoints: {
					768: {
						slidesPerView: 2,
					},
					1100: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 4,
					}
				}
			});
		}
	})

	$('.js-home-news-slider').each(function () {
		let slider = $(this).find('.swiper');
		if (slider.length > 0){
			let prevArrow = $(this).find('.section__slider-nav--prev');
			let nextArrow = $(this).find('.section__slider-nav--next');

			let mainSlider = new Swiper(slider[0], {
				slidesPerView: 1,
				spaceBetween: 20,
				watchSlidesProgress: true,
				pagination: false,
				loop: true,
				navigation: {
					nextEl: nextArrow[0],
					prevEl: prevArrow[0]
				},
				breakpoints: {
					768: {
						slidesPerView: 2,
					},
					1100: {
						slidesPerView: 3,
					},
				}
			});
		}
	})

	$('.catalog-partners').each(function () {
		let slider = $(this).find('.swiper');
		if (slider.length > 0){

			let mainSlider = new Swiper(slider[0], {
				spaceBetween: 30,
				loop: true,
				breakpoints: {
					878: {
						slidesPerView: 4,
					},
					1100: {
						slidesPerView: 5,
					},
				}
			});
		}
	})

	$('.js-catalog-detail').each(function () {
		
		var thumbs = {};
		var main_slider = $(this).find('.js-catalog-detail-main');
		var thumbs_slider = $(this).find('.js-catalog-detail-thumbs');
		var prevArrow = $(this).find('.js-catalog-detail-main-prev');
		var nextArrow = $(this).find('.js-catalog-detail-main-next');

		if (thumbs_slider.length > 0){
			let thumbsSlider = new Swiper(thumbs_slider[0], {
				spaceBetween: 10,
				slidesPerView: 2,
				watchSlidesProgress: true,
				navigation: false,
				pagination: false,
				breakpoints: {
					400: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					520: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					640: {
						slidesPerView: 4,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 19,
					},
					3000: {
						slidesPerView: 5,
						spaceBetween: 19,
					}
				}
			});

			thumbs = {
				swiper: thumbsSlider
			};
		}

		let mainSlider = new Swiper(main_slider[0], {
			spaceBetween: 10,
			slidesPerView: 1,
			autoHeight: true,
			thumbs: thumbs,
			navigation: {
				nextEl: nextArrow[0],
				prevEl: prevArrow[0]
			},
			breakpoints: {
				768: {
					slidesPerView: 1,
				}
			},
			pagination: false
		});
	})

	$('.js-product-slider').each(function () {
		let slider = $(this).find('.swiper');
		if (slider.length > 0){
			let prevArrow = $(this).find('.js-products-slider-prev');
			let nextArrow = $(this).find('.js-products-slider-next');

			let mainSlider = new Swiper(slider[0], {
				slidesPerView: 1,
				spaceBetween: 14,
				watchSlidesProgress: true,
				pagination: false,
				loop: true,
				navigation: {
					nextEl: nextArrow[0],
					prevEl: prevArrow[0]
				},
				breakpoints: {
					768: {
						slidesPerView: 2,
					},
					1100: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 4,
					}
				}
			});
		}
	})

	$('.js-detail-tabs').each(function () {
		let head = $(this).find('.detail-tabs__head-item');
		let tabContainer = $(this);
		
		$(head).click(function(e) {
			e.preventDefault();
			let tabId = $(this).data('container-id');

			if( !$(this).hasClass('detail-tabs__head-item--active') ){
				$(head).removeClass('detail-tabs__head-item--active');
				$(this).addClass('detail-tabs__head-item--active');

				$(tabContainer).find('.detail-tabs__tab').removeClass('detail-tabs__tab--active');
				$(tabContainer).find(".detail-tabs__tab[data-container='" + tabId +  "']").addClass('detail-tabs__tab--active');
			}
		});
	});

	$('.js-product-basket-slider').each(function () {
		let slider = $(this).find('.swiper');
		if (slider.length > 0){
			let prevArrow = $(this).find('.js-products-slider-prev');
			let nextArrow = $(this).find('.js-products-slider-next');

			let mainSlider = new Swiper(slider[0], {
				slidesPerView: 1,
				spaceBetween: 14,
				watchSlidesProgress: true,
				pagination: false,
				loop: true,
				navigation: {
					nextEl: nextArrow[0],
					prevEl: prevArrow[0]
				},
				breakpoints: {
					768: {
						slidesPerView: 2,
					},
					1100: {
						slidesPerView: 3,
					}
				}
			});
		}
	})

	$('.js-product-partners-slider').each(function () {
		let slider = $(this).find('.swiper');
		if (slider.length > 0){
			let prevArrow = $(this).find('.js-products-slider-prev');
			let nextArrow = $(this).find('.js-products-slider-next');

			let mainSlider = new Swiper(slider[0], {
				slidesPerView: 1,
				spaceBetween: 14,
				watchSlidesProgress: true,
				pagination: false,
				loop: false,
				navigation: {
					nextEl: nextArrow[0],
					prevEl: prevArrow[0]
				},
				breakpoints: {
					768: {
						slidesPerView: 2,
					},
					1100: {
						slidesPerView: 3,
					}
				}
			});
		}
	})

	$(document).on('click', '.js-catalog-detail-proprties--scroll', function (event) {
		event.preventDefault();

		$('[data-container-id="proprties"]').trigger('click');

		$('html, body').animate({
			scrollTop: $('[data-container-id="proprties"]').offset().top
		}, 500);
	});

	$(document).on('click', '.js-catalog-detail-text--scroll', function (event) {
		event.preventDefault();

		$('[data-container-id="text"]').trigger('click');

		$('html, body').animate({
			scrollTop: $('[data-container-id="text"]').offset().top
		}, 500);
	});

	$('.header__phones').hover(function () {
		$('.header__phones-dropdown').stop().slideDown(200);
	}, function (){
		$('.header__phones-dropdown').stop().slideUp(200);
	});
});
