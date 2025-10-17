<template>
	<view :style="{height: safeBottom + 'px',  background: bgColor}"></view>
</template>

<script>
	export default {
		name:"safe-bottom",
		props: {
			bgColor: {
				type: String,
				default: 'transparent'
			}
		},
		data() {
			return {
				safeBottom: this.$device.system.safeBottomHeight,
			};
		}
	}
</script>