<template>
	<li :class="{active: active, disabled: disabled}" role="presentation">
		<span v-if="disabled === true" role="tab" :aria-selected="[active || false]" aria-disabled="true">
			<slot></slot>
		</span>

		<a v-else :href="url" :target="target" @click="uiTab" role="tab" :aria-selected="[active || false]">
			<slot></slot>
		</a>
	</li>
</template>
	

<script>
	export default {
		name: 'TabNav',
		data () {
			return {
				
			}
		},
		props: { // props : 부모 컴포넌트로부터 데이터를 받아올 수 있는 속성
			url: {
				type: String,
				default: '#',
				required: true
			},
			target: {
				type: String,
				default: null
			},
			active: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			uiTab (e) {
				const eTarget = e.target;

				if (eTarget.getAttribute('href').indexOf('#') === 0) { // href 값이 #으로 시작할때만 실행
					e.preventDefault();

					const tabLi = eTarget.parentNode,
						tabNav = tabLi.parentNode,
						tabPanel = document.querySelector(eTarget.getAttribute('href'));
					
					// tab
					if (tabNav.nodeName === 'UL') {
						tabNav.querySelectorAll('li').forEach(function(tabItems) {
							tabItems.classList.remove('active');
							tabItems.children[0].setAttribute('aria-selected', false);
						});
					}
					tabLi.classList.add('active');
					eTarget.setAttribute('aria-selected', true);
					
					// tabpanel
					for (let sibling of tabPanel.parentNode.children) { // ES6
						if (sibling.classList.contains('tabpanel')) {
							sibling.classList.add("hidden");
						}
					}
					tabPanel.classList.remove('hidden');
				}
			}
		},
	}
</script>

<style lang="scss">
	@import '@/assets/scss/tab.scss';
</style>