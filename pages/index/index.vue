<template>
	<view id="index">
		<!-- 主页顶部 -->
		<view class="index_top">
			<!-- 搜索框 -->
			<view class="index_top_search" @click="navToSearch">
				<!-- 放大镜图标 -->
				<text class="iconfont">&#xe65e;</text>
				<!-- 提示文字 -->
				<text class="index_top_search_placeholder">前端开发 Vue uniapp</text>
			</view>
		</view>
		<!-- 顶部导航栏 -->
		<view class="index_top_nav">
			<!-- 导航栏左边 分类部分 -->
			<view class="index_top_nav_left">
				<!-- 分类栏 -->
				<view class="nav_left_content">
					<!-- 遍历分类数组 -->
					<text :style="all" @click="allClass">全部</text>
					<block v-for="(item,index) in classification" :key="index">
						<!-- 渲染分类 -->
						<text class="index_top_nav_classiFication" :id="index" :data-name="item" :class="{color:index == nowIndex}"
						 @click="getClass">{{item}}</text>
					</block>
				</view>
			</view>
			<!-- 导航栏右边 图标 -->
			<view class="index_top_nav_right">
				<!-- 导航栏上右边设置图标 -->
				<text class="iconfont set">&#xe610;</text>
			</view>
		</view>
		<!-- 内容部分 -->
		<view class="index_content">
			<view class="tips" v-show="newsData.length<1">
				<text>暂无内容</text>
			</view>
			<!-- 内容组件 -->
			<block v-for="(item,index) in newsData">
				<contents :newsContent="item"></contents>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				classification: ["前端", "uniapp", "后端", "MySQL", "前端", "uniapp"],
				nowIndex: null,
				res: "我是主页信息",
				newsData: [],
				all: {
					color: "#E07A76",
					fontSize: 0.8 + "rem",
					lineHeight: 34 + "px"
				}
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getClass(e) {
				// 控制点击顶部tab栏点击变色,筛选不同内容
				this.nowIndex = e.currentTarget.id
				this.all.color = "black"
				const Cname = e.target.dataset.name
				this.getData(Cname)
			},
			navToSearch() {
				// 跳转到搜索页面
				uni.navigateTo({
					url: '../search/search'
				});
			},
			getData(Cname) {
				uni.showLoading({
					title: "努力加载中..."
				})
				uniCloud.callFunction({
					name: "test",
					data: {
						newClass: Cname
					},
					data: {
						Email: "2993863530@qq.com",
						password: "123456789"
					},
					success: (res) => {
						this.newsData = res.result.attention
						uni.hideLoading()
					},
					fail: (err) => {
						console.log(err);
						uni.hideLoading()
					}
				})
			},
			allClass() {
				this.nowIndex = null
				this.all.color = "#E07A76"
				this.getData()
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 页面父元素
	#index {
		width: 100vw;
		height: auto;
		min-height: auto;
		background-color: #F4F5F6;

		// 顶部红色区域
		& .index_top {
			height: 6vh;
			width: 100%;
			background-color: $uni-color-theme;

			// 顶部搜索框
			& .index_top_search {
				width: 90%;
				height: 75%;
				background-color: #fff;
				border-radius: 20px;
				position: relative;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				display: flex;

				// 放大镜图标
				& .iconfont {
					font-size: 1rem;
					height: 1rem;
					position: relative;
					top: 50%;
					transform: translateY(-50%);
					color: #999999;
					margin-left: 10px;
				}

				// 搜索框内提示文字
				& .index_top_search_placeholder {
					font-size: 0.6rem;
					height: 1rem;
					position: relative;
					top: 50%;
					transform: translateY(-50%);
					color: #999999;
					margin-left: 10px;
				}
			}
		}

		// 导航栏
		& .index_top_nav {
			height: 5vh;
			width: 100%;
			display: flex;
			margin-top: 10px;

			// 导航栏内容部分父元素
			& .index_top_nav_left {
				// border: 1px solid;
				width: 88%;
				height: 100%;
				padding-left: 10px;
				overflow: scroll;
				background-color: white;

				// 导航栏内容可滑动部分
				& .nav_left_content {
					width: 130%;
					height: 100%;
					display: flex;
					justify-content: space-between;

					// 导航栏内每个分类
					& .index_top_nav_classiFication {
						font-size: 0.8rem;
						line-height: 34px;
					}

					//点击字体变红
					& .color {
						color: $uni-color-theme;
					}
				}
			}

			//导航栏右侧小图标部分
			& .index_top_nav_right {
				height: 100%;
				width: 12%;
				text-align: center;
				position: relative;

				//导航栏小图标
				& .set {
					font-size: 26px;
					color: #999999;
					line-height: 34px;
				}
			}
		}

		& .tips {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			font-size: 20px;
			color: #ababab;
			letter-spacing: 2px;
		}
	}
</style>
