<template>
	<view class="rows">
		<view class="page" :style="{height: `calc(100vh - 55px - ${safeBottom}px)`}">
			<WeChat ref="WeChatRef" v-if="loads.includes(0)" v-show="page === 0" @changeUnread="changeUnread"></WeChat>
			<Friend ref="FriendRef" v-if="loads.includes(1)" v-show="page === 1"></Friend>
			<Discover ref="DiscoverRef" v-if="loads.includes(2)" v-show="page === 2"></Discover>
			<Me ref="MeRef" v-if="loads.includes(3)" v-show="page === 3"></Me>
		</view>
		<view class="tabs">
			<view class="tab">
				<template v-for="(item, index) in tabs">
					<view
						:key="index"
						class="tab-item" 
						:class="{active: page === index}"
						@click="changeTab(index)">
						<image :src="page === index ? item.activeIcon : item.icon" mode="aspectFill"></image>
						<text>{{item.text}}</text>
						<view class="badge">
							 <u-badge max="99" :value="item.unread"></u-badge>
						</view>
					</view>
				</template>
			</view>
			<safe-bottom />
		</view>
	</view>
</template>

<script>
	import WeChat from './components/wechat/wechat.vue'
	import Friend from './components/friend/friend.vue'
	import Discover from './components/discover/discover.vue'
	import Me from './components/me/me.vue'
	
	export default {
		data() {
			return {
				safeBottom: this.$device.system.safeBottom,
				statusBarHeight: this.$device.system.statusBarHeight,
				page: 0,
				loads: [0],
				refreshIndexs: [],
				tabs: [
					{
						icon: '/static/tabBar/wechat.png',
						activeIcon: '/static/tabBar/wechat-active.png',
						text: '首页',
						unread: 0
					},
					{
						icon: '/static/tabBar/friend.png',
						activeIcon: '/static/tabBar/friend-active.png',
						text: '联系人'
					},
					{
						icon: '/static/tabBar/discover.png',
						activeIcon: '/static/tabBar/discover-active.png',
						text: '发现'
					},
					{
						icon: '/static/tabBar/me.png',
						activeIcon: '/static/tabBar/me-active.png',
						text: '我'
					},
				]
			};
		},
		components: {
			WeChat,
			Friend,
			Discover,
			Me,
		},
		mounted() {
			this.mounted = true
			uni.$on('refresh', (index) => {
				if(this.refreshIndexs.includes(index)) return
				this.refreshIndexs.push(index)
			})
		},
		onShow() {
			if(!this.mounted) return;
			this.showChildren()
		},
		methods: {
			showChildren() {
				this.$nextTick(() => {
					if(this.loads.includes(0) && this.page === 0) this.$refs.WeChatRef.show && this.$refs.WeChatRef.show();
					if(this.loads.includes(1) && this.page === 1) this.$refs.FriendRef.show && this.$refs.FriendRef.show();
					if(this.loads.includes(2) && this.page === 2) this.$refs.DiscoverRef.show && this.$refs.DiscoverRef.show();
					if(this.loads.includes(3) && this.page === 3) this.$refs.MeRef.show && this.$refs.MeRef.show();
				})
			},
			changeTab(index) {
				this.page = index;
				if(!this.loads.includes(index)) {
					this.loads.push(index)
				}
				this.$nextTick(() => {
					this.refreshIndexs.forEach(reIndex => {
						if(reIndex === 0) this.$refs.WeChatRef && this.$refs.WeChatRef.show && this.$refs.WeChatRef.show();
						else if(reIndex === 1) this.$refs.FriendRef && this.$refs.FriendRef.show && this.$refs.FriendRef.show();
						else if(reIndex === 2) this.$refs.DiscoverRef && this.$refs.DiscoverRef.show && this.$refs.DiscoverRef.show();
						else if(reIndex === 3) this.$refs.MeRef && this.$refs.MeRef.show && this.$refs.MeRef.show();
						this.refreshIndexs = this.refreshIndexs.filter(it => it != reIndex)
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.rows{
		width: 100vw;
		height: 100vh;
		.page{
			width: 100%;
			overflow: hidden;
		}
		.tabs{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			background-color: #f9f9f9;
			border-top: 0.5px solid transparent;
			border-image: linear-gradient(to right, #bcbcbc, #bcbcbc) 1;
			.tab{
				width: 100%;
				height: 55px;
				display: flex;
				align-items: center;
				justify-content: space-around;
				.tab-item{
					position: relative;
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center; 
					.badge{
						position: absolute;
						top: 0;
						left: 50%;
						transform: translate(20%, -20%);
						text{
							color: #fff !important;
						}
					}
					image{
						width: 25px;
						height: 25px;
					}
					text{
						font-size: 10px;
						color: #000;
					}
					&.active{
						text{
							color: $primary;
						}
					}
				}
			}
			.avatar{
				@include flex-center;
				width: 58px;
				height: 58px;
				border-radius: 50%;
				transform: translateY(-10px);
				background-color: #fff;
				image{
					width: 98%;
					height: 98%;
				}
			}
		}
	}
	.word{
		user-select: text;
		/* 允许用户选择文本 */
		white-space: pre-wrap;
		word-break: break-all;
		-webkit-user-select: text;
		/* Chrome和Safari的前缀 */
		-moz-user-select: text;
		/* Firefox的前缀 */
		-ms-user-select: text;
		/* Internet Explorer的前缀 */
	}
</style>
