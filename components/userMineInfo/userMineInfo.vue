<template>
	<view id="userMineInfo">
		<view class="block"></view>
		<view class="white">
			<view class="userInfo">
				<view class="titleImg">
					<image v-if="userMineInfo.headPortrait" :src="userMineInfo.userImg"></image>
					<view v-else class="headPortrait">{{userMineInfo.userName}}</text></view>
				</view>
				<!-- 昵称 -->
				<text class="userName">{{userMineInfo.userName}}</text>
				<view class="userNum">
					<text>{{userMineInfo.focusedNum}}</text>关注
					<text>{{userMineInfo.fansNum}}</text>粉丝
				</view>
			</view>
			<view class="editor">
				<text class="addV">申请加V</text>
				<text class="editData">编辑资料</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			userMineInfo: {
				type: Object
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	#userMineInfo {
		width: 100%;
		height: 100%;

		// background-color: red;
		.block {
			width: 100%;
			height: 200rpx;
		}

		.white {
			width: 100%;
			height: 200rpx;
			background-color: white;
			border-bottom: 1rpx solid #efefef;
			display: flex;
			position: relative;
			.userInfo{
				width: 60vw;
				height: 200rpx;
				// background-color: red;
				margin-top: -100rpx;
				color: #222222;
				font-weight: 800;
				padding: 0 20rpx;
				.titleImg{
					margin-bottom: 20rpx;
					image{
						width: 140rpx;
						height: 140rpx;
						border-radius: 50%;
						border: 7rpx solid #FFFFFF;
					}
					.headPortrait{
						width: 154rpx;
						height: 154rpx;
						border-radius: 50%;
						background-color: #279FE1;
						border: 7rpx solid #FFFFFF;
						line-height: 154rpx;
						text-align: center;
						color: #FFFDEF;
					}
				}
				.userName{
					padding: 0 20rpx;
				}
				.userNum{
					font-size: 30rpx;
					color: #a6a6a6;
					margin-top: 20rpx;
					padding: 0 20rpx;
					text{
						margin-right: 5rpx;
						margin-left: 20rpx;
						color: #7477a6;
					}
					text:first-child{
						margin-left: 0;
					}
				}
			}
			.editor{
				// width: 40vw;
				width: auto;
				height: 150rpx;
				float: left;
				// background-color: #CCCCCC;
				padding: 30rpx 10rpx;
				font-size: 24rpx;
				color: #613dbc;
				position: absolute;
				font-weight: 700;
				right: 0;
				text{
					padding: 10rpx 0;
				}
				.editData{
					color: #0068d8;
					margin: 0 20rpx;
					padding: 10rpx;
					border: 2rpx solid #0068d8;
				}
			}
		}
	}
</style>
