// vue.config.js
module.exports = {
	css: {
		loaderOptions: { // 모든 컴포넌트에서 scss 전역 변수 및 mixin 사용할 수 있도록 preload (main.js 에서 import 한 CSS 보다 먼저 로드 됨)
			scss: {
				prependData: `
					@import "@/assets/scss/_rem.scss";
					@import "@/assets/scss/_variables.scss";
					@import "@/assets/scss/_mixins.scss";
				`
			}
		},
		extract: true,	// 내부 스타일시트로 임베드 되는 형식이 아닌, .css 파일로 추출
		sourceMap: true
	},
	configureWebpack: {
		devtool: 'source-map'	// 개발시 디버깅을 위해 소스맵 추가
	}
}