<template>
	<view id="goLogin">
		<text @click="goLogin">请先登入</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			goLogin: function() {
				uni.navigateTo({
					url:"../../pages/login/login"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#goLogin {
		width: 100%;
		line-height: 400rpx;
		text-align: center;

		text {
			font-weight: 900;
			font-size: 60rpx;
			color: #FFFFFF;
		}
	}
</style>
