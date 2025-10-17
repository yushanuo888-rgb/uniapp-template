<template>
	<u-popup 
		:show="show" 
		:mode="mode" 
		:closeOnClickOverlay="closeOnClickOverlay"
		bgColor="transparent"
		@open="open" 
		@close="close" 
	>
		<slot name="default"></slot>
	</u-popup>
</template>

<script>
	export default {
		name:"popup",
		props: {
			mode: {
				type: String,
				default: 'center'
			},
			closeOnClickOverlay: {
				type: Boolean,
				default: true
			},
			overlayOpacity: {
				type: Number | String,
				default: 0.5
			}
		},
		data() {
			return {
				show: false
			};
		},
		methods: {
			open() {
				this.show = true
				this.$emit('open')
			},
			close() {
				this.show = false
				this.$emit('close')
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>