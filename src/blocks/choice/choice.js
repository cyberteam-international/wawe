(() => {

	document.querySelectorAll('.choice').forEach((item, i) => {
		item.addEventListener('click', (e) => {
			if (getComputedStyle(item).clear == 'both')
				item.classList.toggle('opened');
		});

		document.addEventListener('mouseup', (e) => { 
			if (!item.contains(e.target)) 
				item.classList.remove('opened');
		});
	});

})();