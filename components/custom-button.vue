<template>
	<u-button type="primary" :color="color" :text="text" :disabled="disabled"></u-button>
</template>

<script>
	export default {
		name:"custom-button",
		props: {
			color: {
				type: String,
				default: '#4ac364'
			},
			text: {
				type: String,
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>