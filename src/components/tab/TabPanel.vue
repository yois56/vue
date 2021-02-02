<template>
	<section :id="name" :class="['tabpanel', {hidden: !active}]" role="tabpanel">
		<h2 :is="labelTag" class="blind">{{ label }}</h2>
		<slot></slot>
	</section>
</template>

<script>
	export default {
		name: 'TabPanel',
		props: {
			name: {
				type: String,
				default: '',
				required: true
			},
			label: {
				type: String,
				default: '',
				required: true
			},
			labelTag: {
				type: String,
				default: 'h2'
			},
			active: {
				type: Boolean,
				default: false
			}
		},
	}
</script>