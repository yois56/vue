const commonUI = {};
commonUI.install = function (Vue) {
	Vue.prototype.$uiElClassAdd = function (elem, val) {
		if (elem.className === '') {
			elem.className = val;
		} else {
			elem.className += ' ' + val;
		}
	}
	
	Vue.prototype.$uiElClassRemove = function (elem, val) {
		const pattern = new RegExp('(?:^|\\s)'+ val + '(?:\\s|$)', 'g');
		elem.className = elem.className.replace(pattern, '');
	}
	
	Vue.prototype.$uiToggleClass = function (event) {
		if (event.target.classList.contains('active')) {
			event.target.classList.remove('active');
		} else {
			event.target.classList.add('active');
		}
	}

	Vue.prototype.$uiScrollSticky = function (stickyTab) {
		const posTop = stickyTab.offsetTop;

		window.onscroll = onScrollAction;
		document.ontouchmove = onScrollAction; // for mobile
		
		function onScrollAction() {
			const scrTop = window.pageYOffset;
			// document.querySelector('.console').textContent = `${scrTop}, ${posTop}`;
			
			if (scrTop >= posTop) {
				stickyTab.classList.add('active');
				document.querySelector('#wrap').style.paddingTop = stickyTab.offsetHeight+'px';
				
			} else {
				stickyTab.classList.remove('active');
				document.querySelector('#wrap').style.paddingTop = '';
			}
		}
		onScrollAction();

		// tab click
		stickyTab.querySelectorAll('a').forEach(tabA => {
			tabA.addEventListener('click', function() {
				if (stickyTab.classList.contains('active')) {
					window.scrollTo(0, posTop);
				}
			});
		});
	}
}

export default commonUI;
