// vue.config.js
module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "/vue/" : "/",	// 빌드 경로 설정
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
	},
	transpileDependencies: [ 'dom7', 'swiper' ],	// swiper 관련 추가 - 하위 버전 트랜스파일 오류 때문에 추가 (IE, 모바일 브라우저)
}