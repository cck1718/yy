<template>
	<view>
		安化县人民医院新冠肺炎疫情防控告知书
		<button @click="back" class="btn">我已了解</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				uni.navigateBack();
			}
		}
	}
</script>

<style>

</style>
