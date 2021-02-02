import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// CSS
import './assets/scss/global.scss';
import './assets/scss/layout.scss';

// 공통 UI스크립트 (플러그인) 추가
import commonUI from './assets/js/common_ui.js';
Vue.use(commonUI);

// 레이아웃 컴포넌트 전역 등록
import PagesLayout from "./components/layout/PagesLayout.vue";
Vue.component('pages-layout', PagesLayout);


// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt as fasExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // 전체 아이콘 가져오고 싶을 경우 { fas } 로 적용 (solid: fas / regular: far). but 번들 크기가 커지므로 필요한 것만 추가해서 사용하는 것을 권장함.
import { faSadTear as farSadTear } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fasExternalLinkAlt, farSadTear);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

