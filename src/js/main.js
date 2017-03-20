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
		breakpoints: {
			992: {
				paginationBulletRender: function (swiper, index, className) {
					return '<span class="' +className + '"></span>';
				}
			}
		},
		paginationBulletRender: function (swiper, index, className) {
			var tabsName = ['Компонент-Телеком', 'Бабушкина и К', 'Дакан Сервис', 'Спэйсд Диджитал'];
			if ( index === (tabsName.length - 1) ) {
				return  '<span class="' +className + '">'
						+ tabsName[index] + '</span>'
						+ '<div class="active-mark "></div>';
			}
			return '<span class="' +className + '">' + tabsName[index] + '</span>';
		}
		
	});



	// Services slider init (on adaptive only)
	var servicesSlider = new Swiper('.swiper-container.services-slider', {
		loop: true,
		autoHeight: true,
		pagination: '.services-slider-pagination',
		paginationClickable: true
	});



	// Custom select plugin init
	$('select').niceSelect();



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
	var intervalId;
	$('.nav-panel.default .nav-panel__navigation .nav-panel__navigation__item.services').hover(
		function() {
			intervalId = setTimeout(function() {
				$('.nav-panel.default .services-menu').fadeIn(300);
				$('.nav-panel.default .services-menu').addClass('opened');
				$('.nav-panel.default .nav-panel__navigation .nav-panel__navigation__item.services').addClass('opened');
				$('.services-menu__bg').fadeIn(100);
			}, 300);
		},
		function() {
			setTimeout(function() {
				$('.nav-panel.default .services-menu').fadeOut(300);
				$('.nav-panel.default .services-menu').removeClass('opened');
				$('.nav-panel.default .nav-panel__navigation .nav-panel__navigation__item.services').removeClass('opened');
				$('.services-menu__bg').fadeOut(100);
			}, 100);
			clearInterval(intervalId);
		}
	);
	$('.nav-panel.fixed .nav-panel__navigation .nav-panel__navigation__item.services').hover(
		function() {
			intervalId = setTimeout(function() {
				$('.nav-panel.fixed .services-menu').fadeIn(300);
				$('.nav-panel.fixed .services-menu').addClass('opened');
				$('.nav-panel.fixed .nav-panel__navigation .nav-panel__navigation__item.services').addClass('opened');
				$('.services-menu__bg').fadeIn(100);
			}, 300);
		},
		function() {
			setTimeout(function() {
				$('.nav-panel.fixed .services-menu').fadeOut(300);
				$('.nav-panel.fixed .services-menu').removeClass('opened');
				$('.nav-panel.fixed .nav-panel__navigation .nav-panel__navigation__item.services').removeClass('opened');
				$('.services-menu__bg').fadeOut(100);
			}, 100);
			clearInterval(intervalId);
		}
	);



	// Smooth scroll
	$('a[href^="#"]').click(function(){
		var el = $(this).attr('href');
		$('body').animate({
			scrollTop: $(el).offset().top}, 800);
		return false;
	});



	// Menu appearance on scrollTop
	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var st = $(this).scrollTop();
		if (st > lastScrollTop) {
			$('.nav-panel.fixed').removeClass('is-open');
			if ( $('.nav-panel.fixed .services-menu').hasClass('opened') ) {
				$('.nav-panel.fixed .services-menu').fadeOut(300);
				$('.services-menu__bg').fadeOut(100);
			}
		} else {
			$('.nav-panel.fixed').addClass('is-open');
			if (st < 300) {
				$('.nav-panel.fixed').removeClass('is-open');
				if ( $('.nav-panel.fixed .services-menu').hasClass('opened') ) {
					$('.nav-panel.fixed .services-menu').fadeOut(300);
					$('.services-menu__bg').fadeOut(100);
				}
			}
		}
		lastScrollTop = st;
	});



	// Buttons hover effect
	$(function() {
		if ($(document).width() > 992) {
		  	$('.btn-js')
		    .on('mouseenter', function(e) {
					var parentOffset = $(this).offset(),
		      		relX = e.pageX - parentOffset.left,
		      		relY = e.pageY - parentOffset.top;
					$(this).find('span').css({top:relY, left:relX})
		    })
		    .on('mouseout', function(e) {
					var parentOffset = $(this).offset(),
		      		relX = e.pageX - parentOffset.left,
		      		relY = e.pageY - parentOffset.top;
		    	$(this).find('span').css({top:relY, left:relX})
		    });
	    }
	});



	// Parallax init
	$('.header').parallax({
		speed: 0.1
	});



	// Success popup variables
	var successPopUp = $('[data-remodal-id=success]').remodal(),
		errorPopUp = $('[data-remodal-id=error]').remodal(),
		freeAuditPopUp = $('[data-remodal-id=free-audit]').remodal(),
		freeConsultationPopUp = $('[data-remodal-id=free-consultation]').remodal(),
		bonusPopUp = $('[data-remodal-id=bonus-form]').remodal(),
		cooperationPopUp = $('[data-remodal-id=cooperation-form]').remodal();



	// Calculator tooltip
	$('.tooltip__icon').click(function() {
		$('.tooltip__block').toggleClass('opened');
	});



	//= controllers/form.handlers.js
	//= controllers/validation.js
});

//= controllers/calc.js