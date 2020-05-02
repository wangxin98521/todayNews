<template>
	<!-- 我的主页 -->
	<view id="mine">
		<!-- 登入部分 -->
		<view class="login">
			<!-- 没授权的状态下 -->
			<goLogin v-if="!isLogin"></goLogin>
			<!-- 个人信息展示 -->
			<userInfo v-else :userInfo="userInfo"></userInfo>
		</view>

		<!-- 主体内容显示 -->
		<view class="mine-main">
			<!-- 应用展示 -->
			<application></application>
		</view>
	</view>
</template>

<script>
	import goLogin from '../../components/goLogin/goLogin.vue' // 登入
	import userInfo from '../../components/userInfo/userInfo.vue' // 个人信息展示
	import application from '../../components/application/application.vue' // 应用列表展示
	export default {
		components: {
			goLogin,
			userInfo,
			application
		},
		data() {
			return {
				isLogin: true, //是否登录
				userInfo: {
					userName: "苏年璟", //自定义昵称
					headPortrait: false, //判断是否有头像
					userImg: "https://profile.csdnimg.cn/3/0/4/1_wangxin1029", //头像地址
					dynamicNum: 0, //发布动态数量
					fansNum: 0, //粉丝数量
					focusedNum: 0, //已关注数量
				}
			};
		}
	}
</script>

<style lang="scss" scoped>
	* {
		color: $uni-text-color-red;
	}

	#mine {
		width: 100vw;
		height: auto;
		background-color: #F4F5F6;

		// padding: 1vh 2vw;
		// 关于登入
		.login {
			width: 100%;
			height: 300rpx;
			background-color: #3e3e3e;
		}

		// 主体内容
		.mine-main {
			width: 100%;
			height: auto;
			background-color: #F4F5F6;
		}
	}
</style>
