<template>
	<view>
		<uni-list v-for="(dept, index) in deptInfo" :key="index">
			<uni-list-item  :title=dept.name link clickable="true" @click="goTo(dept.id)"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mark:'',
				deptInfo:[{id:1,name:'发热科'},{id:2,name:'口腔科'}]
			}
		},
		methods: {
			goTo(id){
				if(this.mark == 1){
					//跳转到科室信息页面 传入科室id
					uni.navigateTo({
						url: '/pages/info/departmentInfo/dept/dept?index='+id
					})
				}else{
					//跳转到医生信息页面 传入科室id
					uni.navigateTo({
						url: '/pages/info/departmentInfo/doct/doct?index='+id
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
