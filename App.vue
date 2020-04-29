<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 公共样式 */
	@import url("./static/css/comment.css");
	/* 字体 */
	@font-face {
	  font-family: 'iconfont';  /* project id 1563611 */
	  src: url('https://at.alicdn.com/t/font_1563611_woq8bonln3.eot');
	  src: url('https://at.alicdn.com/t/font_1563611_woq8bonln3.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_1563611_woq8bonln3.woff2') format('woff2'),
	  url('https://at.alicdn.com/t/font_1563611_woq8bonln3.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_1563611_woq8bonln3.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_1563611_woq8bonln3.svg#iconfont') format('svg');
	}
</style>
