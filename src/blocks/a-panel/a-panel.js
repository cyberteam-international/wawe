import Cookies from 'js-cookie';

(() => {

	const panel = document.querySelector('.a-panel');
	if (!panel) return;

	let data = JSON.parse(Cookies.get('dataset') || '{}');

	const controls = [...panel.querySelectorAll('.a-panel__buttons [name="font"], .a-panel__controls [name="size"], .a-panel__controls [name="theme"], .a-panel__buttons [name="spacing"], .a-panel__controls [name="image"]')];

	for (const key in data) {
		if (Object.hasOwnProperty.call(data, key)) {
			document.documentElement.dataset[key] = data[key];
			controls.forEach(control => {
				if (control.name == key) {
					if (control.id == data[key])
						control.checked = true;
					
					if (control.type == 'checkbox')
						control.checked = data[key];
				}
			});
		}
	}
	
	const panel_top = panel.querySelector('.a-panel__top');
	const more = panel.querySelector('.a-panel__controls #more');
	const close = panel.querySelector('.a-panel__t-close');
	const settings = document.querySelector('.a-header__settings');
	
	more.addEventListener('click', () => panel_top.classList.toggle('showed'));
	
	close.addEventListener('click', () => {
		panel_top.classList.remove('showed');
		panel.classList.remove('showed');
	});

	settings.addEventListener('click', () => panel.classList.toggle('showed'));
	
	controls.forEach((control) => {
		control.addEventListener('click', () => {
			const value = (control.type == 'checkbox') ? control.checked : control.id;
			document.documentElement.dataset[control.name] = value;
			data[control.name] = value;
			Cookies.set('dataset', JSON.stringify(data));
		});
	});

})();