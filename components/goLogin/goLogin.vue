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
				alert("去登入吧")
			}
		}
	}
</script>

<style lang="scss" scoped>
	#goLogin {
		width: 100%;
		line-height: 300rpx;
		text-align: center;

		text {
			font-weight: 900;
			font-size: 60rpx;
			color: #FFFFFF;
		}
	}
</style>
