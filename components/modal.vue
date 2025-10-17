<template>
	<view>
		<u-modal 
			:show="show" 
			:title="titleShow ? (title || '提示') : ''" 
			:content="content"
			:showConfirmButton="showConfirmButton"
			:confirmText="confirmText || '确认'"
			:showCancelButton="showCancelButton"
			:cancelText="cancelText || '取消'"
			:cancelColor="cancelColor"
			:confirmColor="confirmColor"
			@confirm="confirm"
			@cancel="cancel"
		>
			<slot name="default" v-if="customContent"></slot>
		</u-modal>
	</view>
</template>

<script>
	export default {
		name:"modal",
		props: {
			title: {
				type: String,
				default: ''
			},
			titleShow: {
				type: Boolean,
				default: true
			},
			content: {
				type: String,
				default: 'content'
			},
			customContent: {
				type: Boolean,
				default: false
			},
			showConfirmButton: {
				type: Boolean,
				default: true
			},
			confirmText: {
				type: String,
				default: ''
			},
			showCancelButton: {
				type: Boolean,
				default: true
			},
			cancelText: {
				type: String,
				default: ''
			},
			confirmColor: {
				type: String,
				default: '#5c6993'
			},
			cancelColor: {
				type: String,
				default: '#1a1a1a'
			}
		},
		data() {
			return {
				show: false
			};
		},
		methods: {
			open(){
				this.show = true
			},
			close(){
				this.show = false
			},
			confirm(){
				this.$emit('confirm', () => {
					this.close();
				});
			},
			cancel(){
				this.$emit('cancel');
				this.close();
			}
		}
	}
</script>
