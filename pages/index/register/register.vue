<template>
	<view>
		<uni-search-bar  placeholder="搜索科室或医生" v-model="seach"></uni-search-bar>
		<uni-list v-for="(dept, index) in deptList" :key="index">
			<uni-list-item  :title=dept.ksmc link clickable="true" @click="to(dept.ksdm,dept.ksmc)"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	//引入URL
	import {url} from '@/request/request.js';
	import {params} from '@/request/request.js';
	
	export default {
		data() {
			return {
				search:'',
				deptList:[{id:1,name:'发热科'},{id:2,name:'口腔科'}]
			}
		},
		methods: {
			//携带id跳转到预约页面
			to(ksdm,ksmc){
				uni.navigateTo({
					url:'registerInfo/registerInfo?ksdm='+ksdm+'&ksmc='+ksmc
				})
			},
			async getDeptInfoByPost(){
				// let time = parseInt(new Date().getTime() / 1000) + '';
				// params.request.head.timestamp=time;
				params.request.head.tranCode='CDRGH001'
				params.request.body={"yydm":"01"};
				console.log(params);
				const {data:res} = await uni.$http.post(url,params);
				console.log(res);
				this.deptList=res.response.body;
			}
		},
		onLaunch() {
			
		},
		onLoad() {
			//获取部门信息
			this.getDeptInfoByPost();
			// console.log(res);
		},
	}
</script>

<style>

</style>
