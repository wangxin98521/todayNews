<template>
	<view id="attention">
		<view class="attention_top">
			<view class="attention_top_tab">
				<block v-for="(item,index) in title" :key="index">
					<text class="tab_child" :class="{color:index == nowIndex}" :data-id="index" @click="setContent">{{item}}</text>
				</block>
			</view>
		</view>
		<view class="attention_content">
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
				title: ["文章", "作者"],
				nowIndex: 0,
				newsData: []
			};
		},
		onReady() {
			this.getData()
		},
		methods: {
			setContent(e) {
				this.nowIndex = e.target.dataset.id
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 页面父元素
	#attention {
		width: 100vw;
		height: auto;
		min-height: 100vh;
		background-color: #F4F5F6;

		//页面顶部
		& .attention_top {
			height: 7vh;
			width: 100%;

			// 顶部tab栏
			& .attention_top_tab {
				width: 95%;
				height: 60%;
				border: 1.6px solid $uni-color-theme;
				border-radius: 1rem;
				position: relative;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				display: flex;
				justify-content: space-around;

				// tab蓝点击项
				& .tab_child {
					height: 1.2rem;
					font-size: 0.8rem;
					font-weight: 600;
					color: #666666;
					position: relative;
					top: 50%;
					transform: translateY(-50%);
				}

				& .color {
					color: $uni-color-theme;
				}

			}

			& .attention_top_tab:after {
				content: "";
				display: block;
				height: 100%;
				width: 0;
				border: 1px solid $uni-color-theme;
				position: absolute;
				top: 0;
				left: 50%;
			}
		}

		& .tips {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 20px;
			color: #ababab;
			letter-spacing: 2px;
		}
	}
</style>
