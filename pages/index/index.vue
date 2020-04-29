<template>
	<view id="index">
		<i class="iconfont">&#xe602;</i>
		<i class="iconfont">&#xe601</i>
		<text class="title">{{title}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '！！！'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	#index {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.title {
			font-size: 36rpx;
			color: #8f8f94;
		}
	}
</style>
