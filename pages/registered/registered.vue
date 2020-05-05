<template>
	<view id="registered">
		<text class="title">today News</text>
		<form @submit="formSubmit" @reset="">
			<view>
				<input type="text" name="username" maxlength="10" placeholder="请输入十位以内的昵称" />
				<text>用户名：</text>
			</view>
			<view>
				<input type="password" id="pwd" v-model="pwd" name="password" maxlength="16" placeholder="请输入16位以内的密码" />
				<text>密码：</text>
			</view>
			<view>
				<input type="password" id="repwd" v-model="repwd" maxlength="16" placeholder="请输入16位以内的密码" @focus="removeMsg" @blur="pwdMsg" />
				<text>确认密码：</text>
			</view>
			<view>
				<input type="Email" name="Email" v-model="Email" placeholder="请输入你的常用邮箱" @focus="removeMsg" :disabled="isDisabled"
				 @blur="EmailMsg" />
				<text>邮箱：</text>
			</view>
			<view>
				<input type="text" name="introduction" placeholder="选填" maxlength="30" />
				<text>简介：</text>
			</view>
			<text class="msg" v-if="msg">{{msg}}</text>
			<view class="botton">
				<button form-type="reset">重新填写</button>
				<button form-type="submit">提交注册</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: "",
				pwd: "",
				repwd: "",
				Email: "",
				isDisabled: false
			};
		},
		methods: {
			formSubmit: function(e) {
				let {
					username,
					password,
					Email,
					introduction
				} = e.detail.value;
				console.log(password)
				if (username == '' || password == '' || Email == '') {
					alert("请检查填写内容")
					return
				}
				console.log("11")
			},
			removeMsg: function() {
				this.msg = ""
			},
			pwdMsg: function() {
				if (this.pwd != this.repwd) {
					this.msg = "两次输入密码不一致"
					this.isDisabled = true;
				} else {
					this.isDisabled = false;
				}
			},
			EmailMsg: function() {
				const emailreg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
				if (emailreg.test(this.Email) == false) {
					this.msg = "邮箱格式不正确"
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	#registered {
		width: 100vw;
		height: 99.7vh;
		padding: 90rpx 0;
		background-image: url(../../static/bg-login.png);
		background-size: 100vw 100vh;

		.title {
			color: #E07A76;
			font-family: STLiti;
			font-size: 90rpx;
			display: inline-block;
			position: relative;
			left: 50%;
			transform: translateX(-50%);
		}

		form {
			margin-top: 40rpx;
			width: 680rpx;
			display: inline-block;
			position: relative;
			left: 50%;
			transform: translateX(-50%);

			view {
				// background-color: red;
				width: 680rpx;
				// display: flex;
				margin-bottom: 30rpx;
				height: 80rpx;
				font-size: 40rpx;

				text {
					float: right;
				}

				input {
					width: 450rpx;
					float: right;
					margin-right: 30rpx;
					font-size: 40rpx;
					border-bottom: 10rpx solid #6dd5ed;
				}
			}

			.msg {
				position: absolute;
				bottom: 140rpx;
				left: 30%;
				color: red;
				font-weight: 900;
			}

			.botton {
				margin-top: 80rpx;
				display: flex;

				button {
					font-weight: 900;
				}
			}
		}
	}
</style>
