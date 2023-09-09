// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

(() => {
	let header = document.querySelector('.header');

	let swiper = new Swiper(".header__slider", {
		modules: [ Autoplay, EffectFade ],
		spaceBetween: 30,
		loop: true,
		speed: 2000,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 5000,
		},
		on: {
			slideChange: function () {
				// console.log(swiper.realIndex);
				header.className = 'header';
				header.classList.add(`header_type-${swiper.realIndex}`);
			}
		}
	});
	
})();