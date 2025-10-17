<template>
	<view class="bg">
		<u-navbar :autoBack="false" placeholder bgColor="#ededed">
			<view slot="left"></view>
			<view class="tab" slot="center">联系人</view>
			<view slot="right" class="right"></view>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bg {
		height: 100%;
		overflow-y: auto;

		.tab {
			font-size: $fs-32;
			font-weight: bold;
		}
	}
</style>