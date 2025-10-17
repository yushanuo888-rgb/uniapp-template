<template>
	<view class="bg-white" :class="{mt}">
		<button class="action-item" :style="{height}">
			<image v-if="icon" :src="icon" mode="aspectFill"></image>
			<text :style="{color}" :class="{bold}">{{text}}</text>
		</button>
	</view>
</template>

<script>
	export default {
		name:"wide-button",
		props: {
			icon: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#1a1a1a'
			},
			bold: {
				type: Boolean,
				default: false
			},
			height: {
				type: String,
				default: '110rpx'
			},
			mt: {
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

<style lang="scss" scoped>
	.bg-white{
		background-color: #fff;
		.action-item{
			@include flex-center;
			width: 100vw;
			font-size: $fs-30;
			border-bottom: 0.5px solid transparent;
			border-image: linear-gradient(to right, #dadada, #dadada) 1;
			border-radius: 0;
			image{
				width: 45rpx;
				height: 45rpx;
				margin-right: 10rpx;
			}
			text{
				font-size: $fs-32;
				&.bold{
					font-weight: 700;
				}
			}
			&::after{
				border: 0;
			}
		}
		&.mt{
			margin-top: 10px;
			border: 0;
		}
	}
</style>