<template>
	<view class="search">
		<view class="cct">
			<u-icon name="search" color="#999" size="42rpx"></u-icon>
			<text>搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "search",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.search {
		@include flex-center;
		width: 100%;
		height: 44px;
		background-color: $background-grey;
		padding: 0 15rpx;

		.cct {
			@include flex-center;
			width: 100%;
			height: 66rpx;
			background: #fff;
			border-radius: 6px;

			text {
				font-size: $fs-28;
				color: #999;
			}
		}
	}
</style>