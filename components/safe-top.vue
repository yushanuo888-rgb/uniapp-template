<template>
	<view :style="{height: statusBarHeight + 'px', background: bgColor}"></view>
</template>

<script>
	export default {
		name:"safe-bottom",
		props: {
			bgColor: {
				type: String,
				default: '#ffffff'
			}
		},
		data() {
			return {
				statusBarHeight: this.$device.system.statusBarHeight,
			};
		}
	}
</script>