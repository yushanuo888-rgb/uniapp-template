<template>
	<view class="bg-white">
		<view class="menu" v-if="customRight">
			<view class="icon" v-if="icon">
				<image :src="icon" mode="aspectFit"></image>
			</view>
			<view class="flex1">
				<view class="info">
					{{name}}
				</view>
				<view class="arrow">
					<view v-if="text" class="text">{{ text }}</view>
					<u-icon v-if="iconShow" name="arrow-right" size="30rpx" color="#afafaf" bold></u-icon>
					<slot v-if="customRight" name="right"></slot>
				</view>
			</view>
		</view>
		<button v-else>
			<view class="menu">
				<view class="icon" v-if="icon">
					<image :src="icon" mode="aspectFit"></image>
				</view>
				<view class="flex1">
					<view class="info">
						{{name}}
					</view>
					<view class="arrow">
						<view v-if="text" class="text">{{ text }}</view>
						<u-icon v-if="iconShow" name="arrow-right" size="30rpx" color="#afafaf" bold></u-icon>
						<slot v-if="customRight" name="right"></slot>
					</view>
				</view>
			</view>
		</button>
	</view>
</template>

<script>
	export default {
		name:"menu-item",
		props: {
			icon: {
				type: String,
				default: ''
			},
			name: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			},
			iconShow: {
				type: Boolean,
				default: true
			},
			customRight: {
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
	}
	
	.menu{
		@include flex-between;
		height: 110rpx;
		padding: 0 30rpx;
		.icon{
			@include flex-center;
			width: 70rpx;
			height: 70rpx;
			border-radius: 6px;
			margin-right: 10rpx;
			image{
				width: 65rpx;
				height: 65rpx;
			}
		}
		.flex1{
			flex: 1;
			border-bottom: 0.5px solid transparent;
			border-image: linear-gradient(to right, #dadada, #dadada) 1;
			@include flex-center;
			height: 100%;
			.info{
				@include flex-center;
				justify-content: flex-start;
				flex: 1;
				font-size: $fs-32;
				height: 100%;
			}
			.arrow{
				@include flex-center;
				.text{
					font-size: $fs-32;
					font-weight: bold;
					color: #1a1a1a;
					margin-right: 20rpx;
					text-align: right;
					width: 300rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>