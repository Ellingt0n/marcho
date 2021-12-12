$(function () {

	$('.blog-page__slider').slick({
		nextArrow:'<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 18" version="1.1"><path d="M 7.886719 9.597656 L 3.105469 14.378906 C 2.773438 14.710938 2.238281 14.710938 1.914062 14.378906 L 1.117188 13.585938 C 0.789062 13.253906 0.789062 12.71875 1.117188 12.390625 L 4.507812 9.003906 L 1.117188 5.613281 C 0.789062 5.285156 0.789062 4.75 1.117188 4.421875 L 1.910156 3.621094 C 2.238281 3.289062 2.773438 3.289062 3.101562 3.621094 L 7.882812 8.402344 C 8.214844 8.734375 8.214844 9.265625 7.886719 9.597656 Z M 7.886719 9.597656 "/></svg></button>',
		prevArrow:'<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 18" version="1.1"><path d="M 1.113281 8.402344 L 5.894531 3.621094 C 6.226562 3.289062 6.761719 3.289062 7.085938 3.621094 L 7.882812 4.414062 C 8.210938 4.746094 8.210938 5.28125 7.882812 5.609375 L 4.496094 9 L 7.886719 12.390625 C 8.214844 12.71875 8.214844 13.253906 7.886719 13.582031 L 7.089844 14.378906 C 6.761719 14.710938 6.226562 14.710938 5.898438 14.378906 L 1.117188 9.597656 C 0.785156 9.265625 0.785156 8.734375 1.113281 8.402344 Z M 1.113281 8.402344 "/></svg></button>',
		infinite:false,
	});
	
	$('.product-tabs__top-item').on('click', function(e){
		e.preventDefault();
		$(".product-tabs__top-item").removeClass('product-tabs__top-item--active');
		$(this).addClass('product-tabs__top-item--active')

		$('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
		$($(this).attr('href')).addClass('product-tabs__content-item--active');

	})
	
	$('.product-slide__thumb').slick({
		asNavFor: '.product-slide__big',
		focusOnSelect: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical:true,
		draggable:false,
		arrows:false,

	});
	$('.product-slide__big').slick({
		asNavFor: '.product-slide__thumb',
		draggable:false,
		arrows:false,	
		fade:true,
	});

	$('.shop-content__filter-btn').on('click', function () {
		$('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
		$(this).addClass('shop-content__filter-btn--active');
	});

	$('.button-list').on('click', function() {
		$('.product-item').addClass('product-item--list');
	});
	$('.button-grid').on('click', function() {
		$('.product-item').removeClass('product-item--list');
	});
	
	
	$('.select-style,.product-one__numb').styler();
	
	
	$('.top-slider__inner').slick({
		dots:true,
		arrows:false,
		fade:true,
		autoplay:true,
	})
	$(".filter-price__input").ionRangeSlider({
        type: "double",
		prefix: "$",
		onStart: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
		onChange: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
        },
    });
	$(".star").rateYo({
		starWidth: "17px",
		normalFill: "#ccccce",
		ratedFill: "#ffc35b",
		readOnly: true,
	  });

	  function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));
		
		return {
		  total,
		  days,
		  hours,
		  minutes,
		  seconds
		};
	  }
	  
	  function initializeClock(id, endtime) {
		const clock = document.querySelector('.promo__clock');
		const daysSpan = clock.querySelector('.days');
		const hoursSpan = clock.querySelector('.hours');
		const minutesSpan = clock.querySelector('.minutes');
		const secondsSpan = clock.querySelector('.seconds');
	  
		function updateClock() {
		  const t = getTimeRemaining(endtime);
	  
		  daysSpan.innerHTML = t.days;
		  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
	  
		  if (t.total <= 0) {
			clearInterval(timeinterval);
		  }
		}
	  
		updateClock();
		const timeinterval = setInterval(updateClock, 1000);
	  }
	  
	  const deadline = $('.promo__clock').attr('data-time');
	  initializeClock('.promo__clock', deadline);  
})