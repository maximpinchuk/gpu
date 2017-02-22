//= vendors.js

$(document).ready(function() {
	


	// Header Swiper init
	var interleaveOffset = 0,
		interleaveEffect = {

		onProgress: function(swiper, progress) {
		
			for ( var i = 0; i < swiper.slides.length; i++ ) {
			  
				var slide = swiper.slides[i];
				var translate, innerTranslate;
				progress = slide.progress;
					
				if (progress > 0) {
				translate = progress * swiper.width;
				innerTranslate = translate * interleaveOffset;        
				} else {        
				innerTranslate = Math.abs( progress * swiper.width ) * interleaveOffset;
				translate = 0;
				}

				$(slide).css({
				transform: 'translate3d(' + translate + 'px,0,0)'
				});

				$(slide).find('.slide-inner').css({
				transform: 'translate3d(' + innerTranslate + 'px,0,0)'
				});
			}
		},

		onTouchStart: function(swiper) {
			for ( var i = 0; i < swiper.slides.length; i++ ) {
				$(swiper.slides[i]).css({ transition: '' });
			}
		},

		onSetTransition: function(swiper, speed) {
			for (var i = 0; i < swiper.slides.length; i++) {
				$(swiper.slides[i])
				.find('.slide-inner')
				.addBack()
				.css({ transition: speed + 'ms' });
			}
		},

		onSlideChangeStart: function(swiper) {
			$('.slide-loader .st0').css({
				'stroke-dashoffset': '550',
				'stroke-dasharray': '550',
				'animation': 'none'
			});
			$('.swiper-slide-active .slide__title').removeClass('animated fadeInDown');
			$('.swiper-slide-prev .slide__title').addClass('animated fadeOutUp');
			$('.swiper-slide-next .slide__title').addClass('animated fadeOutUp');
			$('.swiper-slide-active .slide__link').removeClass('animated fadeInUp');
			$('.swiper-slide-prev .slide__link').addClass('animated fadeOutDown');
			$('.swiper-slide-next .slide__link').addClass('animated fadeOutDown');
		},

		onSlideChangeEnd: function(swiper) {
			$('.slide-loader .st0').css({
				'stroke-dashoffset': '550',
				'stroke-dasharray': '550',
				'animation': 'circle 5s linear backwards'
			});
			$('.swiper-slide-prev .slide__title').removeClass('animated fadeOutUp');
			$('.swiper-slide-next .slide__title').removeClass('animated fadeOutUp');
			$('.swiper-slide-active .slide__title').addClass('animated fadeInDown');
			$('.swiper-slide-prev .slide__link').removeClass('animated fadeOutDown');
			$('.swiper-slide-next .slide__link').removeClass('animated fadeOutDown');
			$('.swiper-slide-active .slide__link').addClass('animated fadeInUp');
		}

	};

	var swiperOptions = {
		loop: true,
		speed: 1000,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		paginationBulletRender: function (swiper, index, className) {
			return '<span class="' + className + '">0' + (index + 1) + '</span>';
		},
		autoplay: 5000,
		autoplayDisableOnInteraction: false,
		watchSlidesProgress: true,
		simulateTouch: false
	};

	swiperOptions = $.extend(swiperOptions, interleaveEffect);

	var headerSlider = new Swiper('.swiper-container.header-slider', swiperOptions);



	// Reviews slider init
	var reviewsSlider = new Swiper('.swiper-container.reviews-slider', {
		pagination: '.reviews-slider-pagination',
		paginationClickable: true,
		loop: true,
		autoHeight: true,
		simulateTouch: false,
		breakpoints: {
			992: {
				paginationBulletRender: function (swiper, index, className) {
					return '<span class="' +className + '"></span>';
				}
			}
		},
		paginationBulletRender: function (swiper, index, className) {
			var tabsName = ['Apple', 'Elem2', 'БГЭУ', 'Intel'];
			if ( index === (tabsName.length - 1) ) {
				return  '<span class="' +className + '">'
						+ tabsName[index] + '</span>'
						+ '<div class="active-mark "></div>';
			}
			return '<span class="' +className + '">' + tabsName[index] + '</span>';
		}
		
	});



	// Staff slider init
	var staffSlider = new Swiper('.swiper-container.staff-slider', {
		slidesPerView: 3,
		breakpoints: {
			480: {
				slidesPerView: 1
			},
			640: {
				slidesPerView: 2
			}
		}
	});



	// Services slider init (on adaptive only)
	var servicesSlider = new Swiper('.swiper-container.services-slider', {
		loop: true,
		autoHeight: true,
		pagination: '.services-slider-pagination',
		paginationClickable: true
	});



	// Adaptive menu
	$('.nav-panel__navigation-icon').click(function() {
		$(this).toggleClass('opened');
		$('.menu-adaptive').toggleClass('opened');
	});
	$('.menu-adaptive .consultation').click(function() {
		$('.nav-panel__navigation-icon').removeClass('opened');
		$('.menu-adaptive').removeClass('opened');
	});



	// Service menu fadeIn and fadeOut
	$('.nav-panel__navigation__item__link').mouseenter(function() {
		if( $(this).hasClass('services') ) {
			$('.services-menu').fadeIn(300);
			$('.nav-panel__navigation__item__link.services').addClass('opened');
			$('.services-menu__bg').fadeIn(100);

			// Придание фоновым элементам размитые (класс blur) и правильное поведение элементов навиации
			// при открытии меню с услугами
			$('.header-consultation').addClass('blur');
			$('.swiper-container.header-slider .swiper-pagination').addClass('blur');
			$('.slide-loader').addClass('blur');
			$('.slide-down__link').addClass('blur');
			$('.nav-panel__navigation__item__link').addClass('blur');
			$('.nav-panel__navigation__item__link').addClass('transparent');
			$('.nav-panel__navigation__item__link.services').removeClass('blur');
			$('.nav-panel__navigation__item__link.services').removeClass('transparent');
			$('.nav-panel__logo').addClass('blur');
			
		} else {
			$('.services-menu').fadeOut(300);
			$('.nav-panel__navigation__item__link.services').removeClass('opened');
			$('.services-menu__bg').fadeOut(100);

			// Удаление размитыя у фоновых элементов (класс blur) и правильное поведение элементов навиации
			// при открытии меню с услугами
			$('.header-consultation').removeClass('blur');
			$('.swiper-container.header-slider .swiper-pagination').removeClass('blur');
			$('.slide-loader').removeClass('blur');
			$('.slide-down__link').removeClass('blur');
			$('.nav-panel__navigation__item__link').removeClass('blur');
			$('.nav-panel__navigation__item__link').removeClass('transparent');
			$('.nav-panel__logo').removeClass('blur');
		} 
	});
	$('.services-menu').mouseleave(function() {
		$('.services-menu').fadeOut(300);
		$('.nav-panel__navigation__item__link.services').removeClass('opened');
		$('.services-menu__bg').fadeOut(100);

		// Удаление размитыя у фоновых элементов (класс blur) и правильное поведение элементов навиации
		// при открытии меню с услугами
		$('.header-consultation').removeClass('blur');
		$('.swiper-container.header-slider .swiper-pagination').removeClass('blur');
		$('.slide-loader').removeClass('blur');
		$('.slide-down__link').removeClass('blur');
		$('.nav-panel__navigation__item__link').removeClass('blur');
		$('.nav-panel__navigation__item__link').removeClass('transparent');
		$('.nav-panel__logo').removeClass('blur');
	});



	// Navigation hover effect
	$('.nav-panel__navigation__item').mouseenter(function() {
		$('.nav-panel__navigation').addClass('hover');
	});
	$('.nav-panel__navigation__item').mouseleave(function() {
		$('.nav-panel__navigation').removeClass('hover');
	});



	// Smooth scroll
	$('a[href^="#"]').click(function(){
		var el = $(this).attr('href');
		$('body').animate({
			scrollTop: $(el).offset().top}, 800);
		return false;
	});



	// Phone mask
	$("#tel").mask("+375 (99) 999 99 99");



	// $(window).scroll(function() {    
	// 	if ( $(this).scrollTop() > 560 ) {
	// 		$('.nav-panel').css({
	// 			position: 'fixed'
	// 		});      
	// 	} else {
	// 		$('.nav-panel').css({
	// 			position: 'absolute'
	// 		});
	// 	}
	// });

	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var st = $(this).scrollTop();
		if (st > lastScrollTop) {
			$('.nav-panel').removeClass('fixed');
		} else {
			$('.nav-panel').addClass('fixed');
			if (st < 300) {
				$('.nav-panel').removeClass('fixed');
			}
		}
		lastScrollTop = st;
	});



	//= controllers/form.handlers.js
	//= controllers/validation.js

});