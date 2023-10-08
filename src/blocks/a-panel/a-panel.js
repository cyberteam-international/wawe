(() => {

	const panel = document.querySelector('.a-panel');
	if (!panel) return;

	const panel_top = panel.querySelector('.a-panel__top');
	const more = panel.querySelector('.a-panel__controls #more');
	const close = panel.querySelector('.a-panel__t-close');
	const settings = document.querySelector('.a-header__settings');
	const controls = panel.querySelectorAll('.a-panel__buttons [name="font"], .a-panel__controls [name="size"], .a-panel__controls [name="theme"], .a-panel__buttons [name="spacing"]');
	const control_image = panel.querySelector('.a-panel__controls [name="image"]');

	more.addEventListener('click', (e) => panel_top.classList.toggle('showed'));
	
	close.addEventListener('click', (e) => {
		panel_top.classList.remove('showed');
		panel.classList.remove('showed');
	});

	settings.addEventListener('click', (e) => panel.classList.toggle('showed'));
	
	control_image.addEventListener('click', ({target: t}) => {
		document.documentElement[((t.checked) ? 'set' : 'remove') + 'Attribute']('data-image', '');
	});

	controls.forEach((item) => {
		item.addEventListener('click', (e) => {
			document.documentElement.dataset[item.name] = item.id;
		});
	});

})();