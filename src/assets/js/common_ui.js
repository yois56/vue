const classNamePattern = function (val) {
	return new RegExp('(?:^|\\s)'+ val + '(?:\\s|$)', 'g');
}

const commonUI = {};
commonUI.install = function (Vue) {
	// manipulate ClassName (add/remove/replace)
	Vue.prototype.$uiRefClass = {
		add: function (elem, val) {
			if (!classNamePattern(val).test(elem.className)) {
				if (elem.className === '') {
					elem.className = val;
				} else {
					elem.className += ' ' + val;
				}
			}
		},
		remove: function (elem, val) {
			elem.className = elem.className.replace(classNamePattern(val), '');
		},
		replace: function (elem, oldVal, newVal) {
			if (classNamePattern(oldVal).test(elem.className)) {
				this.remove(elem, oldVal);
				this.add(elem, newVal);
			}
		}
	}
	
	// Toggle ClassName
	Vue.prototype.$uiToggleClass = function (event) {
		if (event.target.classList.contains('active')) {
			event.target.classList.remove('active');
		} else {
			event.target.classList.add('active');
		}
	}

	// Sticky Tab
	Vue.prototype.$uiScrollSticky = function (stickyTab) {
		const posTop = stickyTab.offsetTop;

		window.onscroll = onScrollAction;
		document.ontouchmove = onScrollAction; // for Mobile
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

		// click tab
		stickyTab.querySelectorAll('a').forEach(function(tabA) {
			tabA.addEventListener('click', function() {
				if (stickyTab.classList.contains('active')) {
					window.scrollTo(0, posTop);
				}
			});
		});
	}
}

export default commonUI;
