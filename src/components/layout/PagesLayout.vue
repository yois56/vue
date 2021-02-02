<template>
	<div id="wrap">
		<page-header></page-header>
		<main id="contents">
			<slot></slot>
		</main>
		<page-footer></page-footer>
	</div>
</template>


<script>
	import pageHeader from "./common/Header.vue";
	import pageFooter from "./common/Footer.vue";
	
	export default {
		name: 'PagesLayout',
		components: {
			pageHeader,
			pageFooter,
		},
	}
</script>