<template>
	<view class="center">
		<view class="title">{{title}}</view>
		<view class="content">
			<u-line-progress :percentage="percentage" activeColor="#07c160"></u-line-progress>
		</view>
	</view>
</template>

<script>
	export default {
		name:"popup-progress",
		props: {
			title: {
				type: String,
				default: '加载进度'
			},
			percentage: {
				type: Number,
				require: true
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.center{
		position: fixed;
		bottom: 200rpx;
		left: 50%;
		transform: translateX(-50%);
		@include flex-center;
		flex-direction: column;
		width: 300rpx;
		border-radius: 6px;
		padding: 20rpx 30rpx 30rpx 30rpx;
		background-color: #fff;
		z-index: 999999999999999;
		
		.title{
			font-size: $fs-32;
			margin-bottom: 30rpx;
		}
		.content{
			width: 100%;
			
		}
	}
</style>