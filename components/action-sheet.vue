<template>
	<view>
		<u-popup :mode="mode" :round="10" :show="show" bgColor="transparent" @close="show = false">
			<view class="action" :class="mode">
				<view class="tips" v-if="tips">
					{{tips}}
				</view>
				<view class="bg-white">
					<button
						@click="changeItem(item)"
						v-for="(item, index) in list" 
						:key="index"
						class="action-item"
						:class="item.active && 'red'" 
						>
						{{item.name}}
					</button>
				</view>
				<view class="bg-white cancel">
					<button class="action-item" @click="show = false">取消</button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name:"action-sheet",
		props: {
			mode: {
				type: String,
				default: 'bottom'
			},
			tips: {
				type: String,
				default: ''
			},
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				show: false
			};
		},
		methods: {
			changeItem(item){
				this.close()
				this.$emit('select', item)
			},
			open(){
				this.show = true
			},
			close(){
				this.show = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.action{
		@include flex-center;
		flex-direction: column;
		width: 100vw;
		background-color: #f7f7f7;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		overflow: hidden;
		.tips{
			@include flex-center;
			text-align: center;
			width: 100%;
			color: #999;
			font-size: $fs-24;
			background-color: #fff;
			padding: 30rpx 10rpx;
			border-bottom: 0.5px solid transparent;
			border-image: linear-gradient(to right, #dadada, #dadada) 1;
		}
		.bg-white{
			background-color: #fff;
			.action-item{
				@include flex-center;
				width: 100vw;
				height: 95rpx;
				color: #000;
				font-size: $fs-32;
				border-bottom: 0.5px solid transparent;
				border-image: linear-gradient(to right, #dadada, #dadada) 1;
				border-radius: 0;
				&::after{
					border: 0;
				}
				&.red{
					color: #f0331c;
				}
			}
			&.cancel{
				margin-top: 10px;
				border: 0;
			}
		}
		
		&.top{
			transform: rotate(180deg);
		}
	}

</style>