<template>
	<view class="bg-white">
		<view class="menu" v-if="customRight">
			<view class="border">
				<view class="info">
					{{name}}
				</view>
				<view class="arrow">
					<view class="avatar" v-if="avatar">
						<image :src="avatar" mode="aspectFill"></image>
					</view>
					<view v-if="text" class="text">{{ text }}</view>
					<u-icon v-if="iconShow" name="arrow-right" size="30rpx" color="#afafaf" bold></u-icon>
					<slot v-if="customRight" name="right"></slot>
				</view>
			</view>
		</view>
		<button v-else>
			<view class="menu">
				<view class="border">
					<view class="info">
						{{name}}
					</view>
					<view class="arrow">
						<view class="avatar" v-if="avatar">
							<image :src="avatar" mode="aspectFill"></image>
						</view>
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
			name: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			},
			avatar: {
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
		height: 110rpx;
		padding-left: 30rpx;
		
		.border{
			@include flex-between;
			width: 100%;
			height: 100%;
			padding-right: 30rpx;
			border-bottom: 0.5px solid transparent;
			border-image: linear-gradient(to right, #dadada, #dadada) 1;
		}
		
		.info{
			@include flex-center;
			justify-content: flex-start;
			flex: 1;
			font-size: $fs-32;
			height: 100%;
		}
		.arrow{
			@include flex-center;
			.avatar{
				@include flex-center;
				width: 70rpx;
				height: 70rpx;
				border-radius: 3px;
				margin-right: 10rpx;
				image{
					width: 60rpx;
					height: 60rpx;
					border-radius: 3px;
				}
			}
			.text{
				font-size: $fs-32;
				color: #6a6a6a;
				margin-right: 20rpx;
				text-align: right;
				width: 300rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
</style>