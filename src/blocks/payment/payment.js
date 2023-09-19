import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

(() => {
	new Swiper('.payment__row:nth-child(1).swiper', {
		modules: [ Autoplay ],
		spaceBetween: 40,
		speed: 4000,
		autoplay: { delay: 0 },
		loop: true,
		slidesPerView: 4,
		allowTouchMove: false,
		breakpoints: {
			0: { 
				slidesPerView: 3,
				spaceBetween: 10
			},
			640: {
				slidesPerView: 4,
				spaceBetween: 20 
			},
			1100: { 
				spaceBetween: 30 
			},
			1280: { 
				spaceBetween: 40 
			}
		}
	});

	new Swiper('.payment__row:nth-child(2).swiper', {
		modules: [ Autoplay ],
		spaceBetween: 40,
		speed: 3500,
		autoplay: {
			delay: 0,
			reverseDirection: true
		},
		loop: true,
		slidesPerView: 4.2,
		allowTouchMove: false,
		breakpoints: {
			0: { 
				slidesPerView: 2.5,
				spaceBetween: 10
			},
			640: {
				slidesPerView: 4,
				spaceBetween: 20 
			},
			1100: { 
				spaceBetween: 30 
			},
			1280: { 
				spaceBetween: 40 
			}
		}
	});

	new Swiper('.payment__row:nth-child(3).swiper', {
		modules: [ Autoplay ],
		spaceBetween: 40,
		speed: 2000,
		autoplay: { delay: 0 },
		loop: true,
		slidesPerView: 5,
		allowTouchMove: false,
		breakpoints: {
			0: { 
				slidesPerView: 3.5,
				spaceBetween: 10
			},
			640: {
				slidesPerView: 5,
				spaceBetween: 20 
			},
			1100: { 
				spaceBetween: 30 
			},
			1280: { 
				spaceBetween: 40 
			}
		}
	});

	new Swiper('.payment__row:nth-child(4).swiper', {
		modules: [ Autoplay ],
		spaceBetween: 40,
		speed: 3500,
		autoplay: {
			delay: 0,
			reverseDirection: true
		},
		loop: true,
		slidesPerView: 4,
		allowTouchMove: false,
		breakpoints: {
			0: { 
				slidesPerView: 2.8,
				spaceBetween: 10 
			},
			640: {
				slidesPerView: 4,
				spaceBetween: 20 
			},
			1100: { 
				spaceBetween: 30 
			},
			1280: { 
				spaceBetween: 40 
			}
		}
	});

})();
