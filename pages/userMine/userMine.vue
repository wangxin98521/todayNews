<template>
	<view id="userMine">
		<userMineInfo class="userMineInfo" :userMineInfo="userMineInfo"></userMineInfo>
		<personalDynamic class="personalDynamic" :personalDynamic="personalDynamic"></personalDynamic>
	</view>
</template>

<script>
	import userMineInfo from '../../components/userMineInfo/userMineInfo.vue' // 用户个人中心
	import personalDynamic from '../../components/personalDynamic/personalDynamic.vue' // 用户个人中心
	export default {
		components: {
			userMineInfo,
			personalDynamic
		},
		data() {
			return {
				userMineInfo: {
					userName: "苏年璟", //自定义昵称
					headPortrait: false, //判断是否有头像
					userImg: "", //头像地址
					fansNum: 0, //粉丝数量
					focusedNum: 0 //已关注数量
				},
				personalDynamic: {
					articleLength: false,
					newsContent: {}
				}
			};
		}
	}
</script>

<style lang="scss">
	#userMine {
		width: 100vw;
		height: 94.5vh;
		padding: 1vh 2vw;
		background-color: #3e3e3e;
		.userMineInfo{
			width: 100%;
			height: 24vh;
		}
		.personalDynamic{
			width: 100%;
			height: 69vh;
			background-color: #F4F5F6;
		}
	}
</style>
