<template>
	<view id="userMine">
		<!-- 个人信息展示 -->
		<userMineInfo class="userMineInfo" :userMineInfo="userMineInfo"></userMineInfo>
		<view class="dynamic"><text>动态</text></view>
		<!-- 个人动态展示 -->
	</view>
</template>

<script>
	import userMineInfo from '../../components/userMineInfo/userMineInfo.vue' // 用户个人中心
	 // 用户个人中心
	export default {
		components: {
			userMineInfo
		},
		data() {
			return {
				userMineInfo: {
					userName: "苏年璟", //自定义昵称
					headPortrait: false, //判断是否有头像
					userImg: "https://profile.csdnimg.cn/3/0/4/1_wangxin1029", //头像地址
					fansNum: 0, //粉丝数量
					focusedNum: 0 //已关注数量
				}
			};
		}
	}
</script>

<style lang="scss">
	#userMine {
		width: 100vw;
		height: auto;

		.userMineInfo {
			width: 100%;
			height: 400rpx;
			background-color: #3e3e3e;
		}

		.dynamic{
			width: 100%;
			// height: 70rpx;
			padding: 0 20rpx;
			color: #E07A76;
			background-color: #FFFFFF;
			text{
				display: inline-block;
				height: 70rpx;
				// background-color: #000000;
				margin-left: 20rpx;
				line-height: 90rpx;
				font-size: 30rpx;
				font-weight: 900;
				border-bottom: 8rpx solid #E07A76;
			}
		}
	}
</style>
