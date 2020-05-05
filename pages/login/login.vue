<template>
	<view id="login">
		<view class="form">
			<text>today News</text>
			<form @submit="formSubmit" @reset="formReset">
				<view class="login-input">
					<text>用户名:</text>
					<input class="loginUserName" name="username" type="text" placeholder="请输入用户名" maxlength="10" />
				</view>
				<view class="loginPassword">
					<text>  密 码:</text>
					<input name="password" type="password" placeholder="请输入密码" maxlength="16" cursor-spacing="10px" />
				</view>
				<text class="msg" v-if="isMsg">{{msg}}</text>
				<button class="submit" form-type="submit">登录</button>
			</form>
		</view>
		<text class="registered" @click="registered">还没账号? 点击注册</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isPassword: true,
				isMsg: false,
				msg: "密码错误"
			};
		},
		methods: {
			formSubmit: function(e) {
				let {username,password} = e.detail.value
				console.log("用户名:" + username, "密码:" + password)
			},
			registered:function(){
				uni.navigateTo({
					url:"../registered/registered"
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#login {
		height: 99.7vh;
		padding: 1rpx 0;
		background-image: url(../../static/bg-login.png);
		background-size: 100vw 100vh;

		.form {
			width: 100vw;
			margin: 200rpx auto;
			text-align: center;
				position: relative;

			&>text {
				font-family: STLiti;
				font-size: 90rpx;
				color: #E07A76;
			}

			form {

				view {
					margin-top: 40rpx;

					text {
						height: 80px;
						font-size: 50rpx;
						vertical-align: bottom;
					}


					input {
						font-size: 20px;
						height: 40px;
						display: inline-block;
						text-align: left;
						vertical-align: bottom;
						margin-left: 10rpx;
						border-bottom: 10rpx solid #6dd5ed;
					}
				}
				
			}
				.msg {
					position: absolute;
					bottom: 100rpx;
					left: 34%;
					color: red;
					font-weight: 900;
				}

			.submit {
				margin-top: 90rpx;
				width: 480rpx;
				height: 80rpx;
				border-radius: 14px;
				background: #2193b0;
				/* fallback for old browsers */
				background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
				/* Chrome 10-25, Safari 5.1-6 */
				background: linear-gradient(to right, #6dd5ed, #2193b0);
				/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
			}
		}
		.registered{
			display: inline-block;
			position: relative;
			left: 50%;
			transform: translateX(-50%);
			color: #E07A76;
			font-weight: 800;
		}
	}
</style>
