<template>
	<view>
		<uni-search-bar @confirm="search" @input="input" placeholder="搜索科室或医生"></uni-search-bar>
		<uni-list v-for="(dept, index) in deptList" :key="index">
			<uni-list-item  :title=dept.name link clickable="true" @click="to(dept.id)"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				deptList:[{id:1,name:'发热科'},{id:2,name:'口腔科'}]
			}
		},
		methods: {
			//携带id跳转到预约页面
			to(id){
				uni.navigateTo({
					url:'registerInfo/registerInfo?id='+id
				})
			}
		},
		onLoad() {
			//获取部门信息
		}
	}
</script>

<style>

</style>
