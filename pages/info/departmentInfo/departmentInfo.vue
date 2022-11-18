<template>
	<view>
		<uni-list v-for="(name, index) in deptInfo" :key="index">
			<uni-list-item  :title=name link clickable="true" @click="goTo(index)"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mark:'',
				deptInfo:["发热科","门诊科"]
			}
		},
		methods: {
			goTo(index){
				if(this.mark == 1){
					//跳转到科室信息页面 传入科室下标
					uni.navigateTo({
						url: '/pages/info/departmentInfo/dept/dept?index='+index
					})
				}else{
					//跳转到医生信息页面 传入科室下标
					uni.navigateTo({
						url: '/pages/info/departmentInfo/doct/doct?index='+index
					})
				}
			}
		},
		onLoad(e) {
			this.mark=e.mark;
		}
	} 
</script>

<style>

</style>
