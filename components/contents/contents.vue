<!-- 内容组件 -->
<template>
	<!-- 组件父元素 -->
	<view id="content" :style="height">
		<!-- 组件标题 -->
		<view class="content_title" :style="[widths,tops]">
			<!-- 标题 -->
			<text class="title_text">{{res.title}}</text>
			<!-- 收藏 -->
			<text class="iconfont love" v-if="flag" @click="love">&#xe601;</text>
			<text class="iconfont love" v-else @click="love">&#xe604;</text>
		</view>
		<!-- 如果没有图片 -->
		<view class="content_pic_none" v-if="res.img.length == 0">
			<text class="none_tenxt">{{res.context}}</text>
		</view>
		<!-- 如果只显示一张图片 -->
		<view class="content_pic_one" v-if="res.img.length==1 ||res.img.length==2">
			<image class="content_pic_img" :src="res.img[0]" mode=""></image>
		</view>
		<!-- 显示三张图片 -->
		<view class="content_pic" v-if="res.img.length >=3">
			<image class="content_pic_img" :src="res.img[0]" mode=""></image>
			<image class="content_pic_img" :src="res.img[1]" mode=""></image>
			<image class="content_pic_img" :src="res.img[2]" mode=""></image>
		</view>
		<!-- 底部内容 -->
		<view class="content_buttom" :style="widths">
			<!-- 标签 -->
			<text class="content_buttom_name">{{res.label[0]}}</text>
			<!-- 浏览量 -->
			<text class="content_buttom_see">{{res.see}}人浏览</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["newsContent"],
		data() {
			return {
				res: {},
				flag: false,
				// 需要添加的行内样式
				height: {
					height: "auto"
				},
				widths: {
					width: 70 + "%",
					float: "right"
				},
				tops: {
					height: 65 + "%"
				},
				rest: {}
			}
		},
		methods: {
			love() {
				uniCloud.callFunction({
					name: "aaa",
					data: {
						isFlag: this.flag
					},
					success: (res) => {
						console.log(res);
						this.flag = !this.flag
						if (this.flag) {
							uni.showToast({
								title: '添加收藏',
								icon: "none",
								duration: 2000
							});
						} else {
							uni.showToast({
								title: '取消收藏',
								icon: "none",
								duration: 2000
							});
						}
					},
					fail: (err) => {
						console.log(err);
						if (this.flag) {
							uni.showToast({
								title: '取消失败',
								icon: "none",
								duration: 2000
							});
						} else {
							uni.showToast({
								title: '添加失败',
								icon: "none",
								duration: 2000
							});
						}
					}
				})
			}
		},
		created() {
			this.res = this.$props.newsContent
			this.res.see = 152
			// 判断几张图片，如果是小于三张大于零张就改变添加行内样式
			if (this.res.img.length == 1 || this.res.img.length == 2) {
				this.height.height = 120 + "px";
				this.widths = {
					width: 60 + "%",
					float: "right"
				}
			} else {
				this.height.height = "auto"
				this.widths = null;
			}
		}
	}
</script>

<style lang="scss">
	// 页面父元素
	#content {
		width: 95%;
		padding: 8px 8px;
		margin: 10px auto 0 auto;
		background-color: #fff;

		//页面标题
		& .content_title {
			width: 100%;
			height: auto;
			display: flex;
			justify-content: space-between;

			// 标题文本
			& .title_text {
				font-size: 18px;
				letter-spacing: 1px;
				color: #444444;

			}

			// 点赞
			& .love {
				color: $uni-color-theme;
				float: right;
				font-size: 20px;
				line-height: 25px;
			}
		}

		// 三张图片
		& .content_pic {
			width: 100%;
			height: auto;
			display: flex;
			justify-content: space-around;

			// 图片
			& .content_pic_img {
				width: 140px;
				height: 80px;
				margin: 10px 0;
			}
		}

		// 图片显示一张
		& .content_pic_one {
			height: 95%;
			width: 38%;
			float: left;
			margin-right: 5px;

			// 图片
			& .content_pic_img {
				width: 100%;
				max-width: 160px;
				height: 100%;
			}
		}

		//没有图片时
		& .content_pic_none {
			width: 100%;
			height: auto;
			margin: 10px 0;

			// 内容
			& .none_tenxt {
				font-size: 14px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box; //作为弹性伸缩盒子模型显示。
				-webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
				-webkit-line-clamp: 2; //显示的行
			}
		}

		// 底部
		& .content_buttom {
			height: auto;
			width: 100%;

			// 标签
			& .content_buttom_name {
				display: inline-block;
				font-size: 16px;
				letter-spacing: 1px;
				color: $uni-color-theme;
				border: 2px solid;
				height: 26px;
				width: 90px;
				text-align: center;
				line-height: 22px;
				border-radius: 15px;
			}

			// 浏览量
			& .content_buttom_see {
				float: right;
				font-size: 14px;
				color: #999999;
				letter-spacing: .6px;
				line-height: 25px;
			}
		}
	}
</style>
