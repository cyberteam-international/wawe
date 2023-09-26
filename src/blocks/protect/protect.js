import { default as Lottie } from "lottie-web/build/player/esm/lottie_svg.min";

(() => {

	let animation = Lottie.loadAnimation({
		container: document.querySelector('.protect__scene'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'protect-animation.json',
		rendererSettings: {
			scaleMode: 'noScale',
			progressiveLoad: true,
		  }
	});

})();