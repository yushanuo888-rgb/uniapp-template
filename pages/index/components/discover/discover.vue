<template>
	<view class="bg">
		<u-navbar :autoBack="false" placeholder bgColor="#ededed">
			<view slot="left"></view>
			<view class="tab" slot="center">发现</view>
		</u-navbar>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bg{
		position: relative;
		height: 100%;
		overflow-y: auto;
		background-color: $background-grey;
		.tab{
			font-size: $fs-32;
			font-weight: bold;
		}
	}
</style>