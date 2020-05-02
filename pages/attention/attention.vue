<template>
	<view id="attention">
		<button type="default" @click="test">点击获取数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			test:function(){
				// alert('aaa')
				uniCloud.callFunction({
					name:"Getuser",
					data:{
						name:"杜瑞",
						age:"100"
					}
				}).then(res=>alert(res))
			}
		}
	}
</script>

<style lang="scss" scoped>
#attention{}
</style>
