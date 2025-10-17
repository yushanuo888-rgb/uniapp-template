<template>
	<view class="container">
		 <u-navbar 
			v-if="showNavbar" 
			:autoBack="autoBack" 
			:height="navbarHeight"
			:bg-color="navColor"
			:border="border"
			:leftIcon="leftIcon"
			:leftIconColor="leftIconColor"
			placeholder>
				<view slot="left" v-if="!leftIconShow">
					<slot name="left"></slot>
				</view>
				<view slot="center">
					<slot name="center"></slot>
				</view>
				<view slot="right">
					<slot name="right"></slot>
				</view>
			</u-navbar>
			<view :style="{height: autoContentHeight ? 'auto' : contentHeight + 'px', background: pageColor}" class="content">
				<slot 
					:statusBarHeight="statusBarHeight" 
					:safeBottom="safeBottom"
					:contentHeight="contentHeight"
				></slot>
			</view>
		<safe-bottom />
	</view>
</template>

<script>
	export default {
		name:"container",
		props: {
			navColor: {
				type: String,
				default: 'transparent'
			},
			pageColor: {
				type: String,
				default: 'transparent'
			},
			leftIcon: {
				type: String,
				default: 'arrow-left'
			},
			leftIconShow: {
				type: Boolean,
				default: true
			},
			leftIconColor: {
				type: String,
				default: '#303133'
			},
			showNavbar: { // 是否展示导航栏
				type: Boolean,
				default: true
			},
			autoBack: { // 是否显示返回按钮
				type: Boolean,
				default: true
			},
			border: { // 导航栏底部是否显示下边框
				type: Boolean,
				default: false
			},
			autoContentHeight: { // 自动内容高度
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				safeBottom: this.$device.system.safeBottomHeight,
				statusBarHeight: this.$device.system.statusBarHeight,
				navbarHeight: 44
			};
		},
		computed: {
			contentHeight(){
				const {statusBarHeight, safeBottom, screenHeight} = this.$device.system
				if(this.showNavbar){
					return screenHeight - statusBarHeight - safeBottom - this.navbarHeight
				}else {
					return screenHeight - statusBarHeight - safeBottom
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 100vh;
		.content{
			overflow-y: auto;
		}
	}
</style>