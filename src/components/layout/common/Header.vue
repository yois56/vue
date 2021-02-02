<template>
	<header id="header">
		<ul class="menus">
			<li><router-link to="/" exact>Home</router-link></li>
			<li><router-link to="/about">About</router-link></li>
			<li><router-link to="/todo">ToDo</router-link></li>
		</ul>
	</header>
</template>

<script>
	export default {
		name: 'pageHeader',

	}
</script>