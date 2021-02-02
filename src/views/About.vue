<template>
	<pages-layout class="about-page"><!-- div#wrap 에 클래스 추가 필요할 경우 class="클래스네임" 추가 -->
		<h1 class="page-tit">About.vue</h1>

		<div class="tablist-sticky">
			<tab-list><!-- ul.tablist 에 클래스 추가 필요할 경우 class="클래스네임" 추가 -->
				<tab url="#tabView1" active>TAB1</tab><!-- ul.tablist >li 에 클래스 추가 필요할 경우 class="클래스네임" 추가 -->
				<tab url="#tabView2">TAB2</tab>
				<tab url="#tabView3">TAB3</tab>
				<tab url="#" disabled>TAB4 (disabled)</tab>
				<tab url="http://www.naver.com" target="_blank">NAVER <font-awesome-icon :icon="['fas', 'external-link-alt']" size="xs"></font-awesome-icon></tab>
			</tab-list>
		</div>

		<tab-panel name="tabView1" label-tag="h3" label="TAB1" active><!-- div.tabpanel 에 클래스 추가 필요할 경우 class="클래스네임" 추가. label-tag="" 로 히든타이틀 태그 지정 가능 (기본값은 h2) -->
			<div style="height: 200vh;">
				@TAB1
			</div>
		</tab-panel>

		<tab-panel name="tabView2" label-tag="h3" label="TAB2">
			<div style="height: 200vh;">
				@TAB2
			</div>
		</tab-panel>

		<tab-panel name="tabView3" label-tag="h3" label="TAB3">
			<div style="height: 200vh;">
				@TAB3
			</div>
		</tab-panel>
		

		<!-- <div style="position:fixed; bottom:0; left:0; color: #fff;" class="console"></div> -->

	</pages-layout>
</template>


<script>
	import Tab from "@/components/tab/Tab.vue";
	import TabList from "@/components/tab/TabList.vue";
	import TabPanel from "@/components/tab/TabPanel.vue";

	export default {
		name: 'About',
		components: {
			Tab,
			TabList,
			TabPanel,
		},
		mounted () {
			this.$uiElClassAdd(document.querySelector('html'), 'dark'); // html 요소에 클래스 추가
			this.$uiScrollSticky(document.querySelector('.tablist-sticky'));
		},
		destroyed () {
			this.$uiElClassRemove(document.querySelector('html'), 'dark'); // html 요소에 클래스 추가 (html 요소는 DOM이 동적으로 랜더링 되지 않는 영역이기 때문에 추가 - 라우팅과 관련)
		},	
	};
</script>

<style lang="scss">
	
</style>