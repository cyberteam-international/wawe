(() => {

	const panel = document.querySelector('.a-panel__top');
	const more = document.querySelector('.a-panel__controls #more');
	const close = document.querySelector('.a-panel__t-close');
	const controls_size = document.querySelectorAll('.a-panel__controls [name="size"]');
	const controls_theme = document.querySelectorAll('.a-panel__controls [name="scheme"]');
	const control_image = document.querySelector('.a-panel__controls [name="image"]');

	more.addEventListener('click', (e) => panel.classList.toggle('showed'));
	close.addEventListener('click', (e) => panel.classList.remove('showed'));

	controls_theme.forEach((item) => {
		item.addEventListener('click', (e) => {
			document.documentElement.dataset.theme = item.id;
		});
	});

})();
