<template>
	<view >
		<uni-row class="demo-uni-row">
			<uni-col :span="14">
				<uni-data-checkbox v-model="value" :localdata="range" @change="change" mode="tag" selectedColor="#40e0d0"></uni-data-checkbox>
			</uni-col>
			<uni-col :span="10">
				<view v-show="value == 0" class="t">日期：{{time}}</view>
			</uni-col>
		</uni-row>
		<view v-show="value==0">
			<view>
				<uni-calendar ref="calendar":insert="false"@confirm="confirm"/>
				<button @click="open" class="btn">打开日历</button>
				
				<uni-list v-for="(doctor, index) in doctorList" :key="index">
				  	<uni-list-item :title=doctor.ysmc :note=doctor.yszc :thumb=doctor.img thumb-size="lg" clickable="true" @click="to(doctor.ysdm,newTime)"></uni-list-item>
				</uni-list>
				
			</view>
		</view>
		<view v-show="value==1">
			<uni-list v-for="(doctor, index) in doctorList" :key="index">
			 	<uni-list-item :title=doctor.ysmc :note=doctor.yszc :thumb=doctor.img thumb-size="lg" clickable="true" @click="to(doctor.ysdm,newTime)" ></uni-list-item>
			</uni-list>
		</view>
	</view>

</template>

<script>
	import {url} from '@/request/request.js';
	import {params} from '@/request/request.js';
	
	export default {
		data() {
			return {
				ksdm:'',
				newTime:'',
				dept:{id:this.id,name:'发热科'},
				time:new Date().toISOString().slice(0, 10),
				doctorList:[],
				value: 0,
				range: [{"value": 0,"text": "按日期预约"},{"value": 1,"text": "按医生预约"}]
			}
		},
		methods: {
			getDate(){
				let date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth()+1;
				if (month >= 1 && month <= 9){month = '0'+month;}
				let day = date.getDate();
				if (day >=1 && day < 9){day = '0'+day;}
				return year+''+month+day;
			},
			subStr(time){
				let year = time.slice(0,4);
				let month = time.slice(5,7);
				let day = time.slice(8,10);
				let date = year+''+month+day;
				return date;
			},
			change(e){
				console.log('e:',e);
			},
			open(){
				this.$refs.calendar.open();
			},
			confirm(e) {
				this.time=e.fulldate;
				let t = this.subStr(e.fulldate);
				console.log(t)
				console.log(e.fulldate);
				this.newTime = t;
				//更改日期再次调用接口
				this.getDoctorInfo(this.ksdm,t,t)
			},
			//页面跳转
			to(ysdm,time){
				uni.navigateTo({
					url: '/pages/index/register/registerInfo/byDoctor/byDoctor?ysdm='+ysdm+'&time='+time
				})
			},
			async getDoctorInfo(ksdm,ksrq,jsrq){
				params.request.head.tranCode="CYYGH005";
				params.request.body={"ksdm":ksdm,"ksrq":ksrq,"jsrq":jsrq};
				console.log(params)
				const {data:res} = await uni.$http.post(url,params);
				this.doctorList=res.response.body;
				console.log(res.response.body);
			}
		},
		onLoad(e) {
			//根据当前部门id获取部门信息
			let date = this.getDate();
			console.log("date",date)
			this.ksdm = e.ksdm;
			this.getDoctorInfo(e.ksdm,date,date)
			//动态修改标题
			uni.setNavigationBarTitle({
				title:e.ksmc
			})
		}
	}
</script>

<style>
.t{
	margin-top: 15rpx;
}
</style>
