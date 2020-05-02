<template>
	<!-- 我的主页下各项应用列表 -->
	<view id="application">
		<!-- 收藏 历史 夜间 -->
		<view class="application">
			<view class="collection">
				<i class="iconfont icon-shoucang1"></i>
				<text>收藏</text>
			</view>
			<view class="history">
				<i class="iconfont icon-lishi"></i>
				<text>历史</text>
			</view>
			<view class="night">
				<i v-if="isNight" class="iconfont" @click="isNights">&#xe609;</i><!-- 夜间 -->
				<i v-else class="iconfont iconfont-night" @click="isNights">&#xe65a;</i><!-- 日间 -->
				<text>夜间</text>
			</view>
		</view>
		<!-- 列表 -->
		<view class="lists">
			<view>
				<text>消息通知</text>
				<i class="iconfont">&#xe60d;</i>
			</view>
		</view>
		<view class="lists">
			<view>
				<text>头条商城</text>
				<view>
					<text>邀请好友得200元现金奖励</text>
					<i class="iconfont">&#xe60d;</i>
				</view>
			</view>
			<view>
				<text>京东特供</text>
				<view>
					<text>新人领188现金</text>
					<i class="iconfont">&#xe60d;</i>
				</view>
			</view>
		</view>
		<view class="lists">
			<view>
				<text>我要爆料</text>
				<i class="iconfont">&#xe60d;</i>
			</view>
			<view>
				<text>用户反馈</text>
				<i class="iconfont">&#xe60d;</i>
			</view>
			<view>
				<text>系统设置</text>
				<i class="iconfont">&#xe60d;</i>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isNight: false, // 是否开启夜间
			};
		},
		methods: {
			isNights: function() {
				this.isNight = !this.isNight
				console.log(this)
			}
		}
	}
</script>

<style lang="scss" scoped>
	#application {
		width: 100%;
		height: 100%;

		view {
			background-color: $uni-bg-color;
			color: #333333;
			font-size: 30rpx;
			font-weight: 700;
		}

		// 收藏 历史 夜间
		.application {
			display: flex;
			justify-content: space-around;
			height: 120rpx;
			padding-top: 20rpx;

			view {
				display: flex;
				flex-direction: column;
				text-align: center;
				width: 180rpx;
				line-height: 60rpx;

				i {
					font-size: 60rpx;
				}

				.icon-shoucang1 {
					color: #F39A4F;
				}

				.icon-lishi {
					color: #F1678C;
				}

				.iconfont-night {
					color: #7B9FF8;
				}
			}
		}

		// 列表样式
		.lists {
			width: 100%;
			margin-top: 30rpx;

			&>view {
				padding: 0 20rpx;
				display: flex;
				justify-content: space-between;
				height: 80rpx;
				line-height: 80rpx;
				border-bottom: 1rpx solid #e6e6e6;
				font-weight: 400;

				&>view {
					text {
						font-weight: 500;
						font-size: 20rpx;
					}
				}

				i {
					color: #CCCCCC;
				}
			}

			&>view:last-child {
				border-bottom: none;
			}
		}
	}
</style>
