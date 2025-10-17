<template>
	<view>
		<u-datetime-picker
			:show="show"
			:value="val"
			closeOnClickOverlay
			@confirm="confirm"
			@close="show = false"
			@cancel="show = false"
			confirmColor="#08ba06"
			mode="datetime"
		></u-datetime-picker>
	</view>
</template>

<script>
	export default {
		name:"date-time-picker",
		props: {
			value: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				show: false
			};
		},
		computed: {
			val() {
				return this.value
			}
		},
		methods: {
			open() {
				this.show = true
			},
			confirm(e) {
				this.$emit('confirm', e.value)
				this.show = false
			}
		}
	}
</script>

<style>

</style>