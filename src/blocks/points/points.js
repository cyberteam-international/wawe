import Swiper from 'swiper';

(() => {
	new Swiper(".points__slider", {
		slidesPerView: 3.15,
		spaceBetween: 40,
		breakpoints: {
			0: {
				spaceBetween: 15,
				slidesPerView: 1.38
			},
			480: {
				spaceBetween: 15,
				slidesPerView: 1.7
			},
			640: {
				spaceBetween: 10,
				slidesPerView: 3.15
			},
			780: {
				spaceBetween: 15,
				slidesPerView: 3.15
			},
			1100: {
				spaceBetween: 20,
				slidesPerView: 3.15,
			},
			1280: {
				spaceBetween: 30,
				slidesPerView: 3.15,
			},
			1440: {
				spaceBetween: 30,
				slidesPerView: 3.05,
			},
			1680: {
				spaceBetween: 30,
				slidesPerView: 3.15,
			}
		}
	});

})();
