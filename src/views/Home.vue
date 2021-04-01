<template>
	<pages-layout class="main"><!-- div#wrap 에 클래스 필요할 경우 class="클래스네임" 추가 -->
		<h1 class="page-tit">Home.vue</h1>

		<div class="row">
			<img src="../assets/img/logo.png" alt="Vue">
		</div>
		
		<div class="row">
			<button class="btn-type1" @click="$uiToggleClass">Click - Method Type1</button>
			<button class="btn-type1" :class="{active: isActive}" @click="isActive = !isActive">Click - Method Type2</button>

			<button class="btn-type1" ref="btn" @click="$event.currentTarget.classList.toggle('active')">Click - Method Type3</button>
			<div class="textbox" :class="[isActive ? 'active' : '']">
				text
			</div>
		
		</div>
	</pages-layout>
</template>

<script>
	export default {
		name: 'Home',
		data () {
			return {
				isActive: false,
			}
		},
		methods: {
			// toggleActive () {
			// 	this.isActive = !this.isActive;
			// },

			console () {
				console.log(this.$refs.btn.classList.contains('active'));
				
			}
		}
		
	};
</script>
<style scoped>
	.textbox.active { color:red; }
</style>