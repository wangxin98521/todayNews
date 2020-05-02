<template>
	<!-- <text>{{data}}</text> -->
	<view id="mine-info">
		<!-- 个人信息 头像 昵称 跳转主页 -->
		<view class="userInfo">
			<view class="userTitle">
				<view>
					<image v-if="userInfo.headPortrait" :src="userInfo.userImg" mode=""></image>
					<view v-else class="userImg">
						{{userInfo.userName}}
					</view>
				</view>
				<text>{{userInfo.userName}}</text>
			</view>
			<i class="iconfont icon-htbArrowright" @click="getPersonalCenter"></i>
		</view>
		<!-- 用户动态 粉丝 访客 -->
		<view class="userActiveNum">
			<view><text>{{userInfo.dynamicNum}}</text>动态</view>
			<view class="fans"><text>{{userInfo.fansNum}}</text>粉丝</view>
			<view><text>{{userInfo.focusedNum}}</text>已关注</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			userInfo: {
				type: Object
			}
		},
		data() {
			return {

			};
		},
		methods: {
			getPersonalCenter: function() {
				uni.navigateTo({
					url: "../../pages/userMine/userMine"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#mine-info {
		width: 100%;
		height: 300rpx;
		font-weight: 800;
		color: #FFFFFF;
		overflow: hidden;

		// 个人信息 头像 昵称 跳转主页
		.userInfo {
			height: 200rpx;
			display: flex;
			justify-content: space-between;
			line-height: 154rpx;
			padding: 30rpx 40rpx 0rpx;

			.userTitle {
				width: auto;
				display: flex;
				flex-direction: row;
				// background-color: #ccc;

				// 头像
				view {
					width: 140rpx;
					height: 140rpx;
					border-radius: 50%;
					box-shadow: 0.5px 0.5px 1.2px 1.5px #b9b9b9;
					overflow: hidden;

					view {
						width: 140rpx;
						height: 140rpx;
						border-radius: 50%;
						font-size: 24rpx;
						text-align: center;
						background-color: #279FE1;

					}

					image {
						padding: 0;
						margin: 0;
						width: 140rpx;
						height: 140rpx;
						border-radius: 50%;
						line-height: 140rpx;
						text-align: center;
					}
				}


				// 头像
				.headPortrait {
					width: 154rpx;
					height: 154rpx;
					// border: 2rpx solid #FFFFFF;
					box-shadow: 0.5px 0.5px 1.2px 1.5px #b9b9b9;
					border-radius: 50%;
					background-color: #279FE1;
					text-align: center;
					line-height: 154rpx;
					display: inline-block;
				}

				// 昵称
				text {
					display: inline-block;
					margin-left: 40rpx;
				}
			}
		}

		// 个人信息  个人动态 粉丝 七天内访客显示
		.userActiveNum {
			// background-color: #CCCCCC;
			width: 100%;
			// height: 100rpx;
			display: flex;
			justify-content: space-around;
			// line-height: 100rpx;
			// padding: 20rpx;

			// 每个小框
			view {
				display: flex;
				flex-direction: column;
				text-align: center;
				line-height: 40rpx;
				width: 180rpx;
				font-size: 24rpx;
				color: #a6a6a6;

				text {
					color: #FFFFFF;
					font-size: 34rpx;
				}
			}

			.fans {
				border-left: 1rpx solid #595959;
				border-right: 1rpx solid #595959;
			}
		}
	}
</style>
