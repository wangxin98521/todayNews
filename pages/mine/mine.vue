<template>
	<!-- 我的主页 -->
	<view id="mine">
		<!-- 个人信息展示 -->
		<view class="mine-info">
			<!-- 个人信息 头像 昵称 跳转主页 -->
			<view class="mine-info-title">
				<view>
					<image v-if="data=headPortrait" :src="data"></image>
					<view v-else class="headPortrait"><text>{{userName}}</text></view>
					<text>{{userName}}</text>
				</view>
				<i class="iconfont">&#xe60d;</i>
			</view>
			<!-- 个人信息  个人动态 粉丝 七天内访客显示 -->
			<view class="mine-info-record"></view>
		</view>

		<!-- 主体内容显示 -->
		<view class="mine-main">
			<!-- 应用展示 -->
			<view class="mine-info-application"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headPortrait: false, //判断是否有头像
				userName: "苏年璟", //自定义昵称
				dynamicNum: 0, //发布动态数量
				fansNum: 0, //发布动态数量
				visitorsNum: 0, //发布动态数量
			};
		}
	}
</script>

<style lang="scss" scoped>
	#mine {
		width: 100vw;
		height: 100vh;
		padding: 2vh 2vw;

		.mine-info {
			background-color: #3e3e3e;
			color: white;
			font-weight: 800;
		}
	}
</style>
