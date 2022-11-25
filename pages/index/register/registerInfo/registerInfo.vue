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
				  	<uni-list-item :title=doctor.name :note=doctor.position :thumb=doctor.img thumb-size="lg" :rightText=doctor.currentQuota clickable="true" @click="to(doctor.id)"></uni-list-item>
				</uni-list>
				
			</view>
		</view>
		<view v-show="value==1">
			<uni-list v-for="(doctor, index) in doctorList" :key="index">
			 	<uni-list-item :title=doctor.name :note=doctor.position :thumb=doctor.img thumb-size="lg" clickable="true" @click="to(doctor.id)" ></uni-list-item>
			</uni-list>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				id:'',
				dept:{id:this.id,name:'发热科'},
				time:new Date().toISOString().slice(0, 10),
				doctorList:[
					{id:1,img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.imeitou.com%2Fuploads%2Fallimg%2F2021053009%2F5bcjcu2z5pt.png&refer=http%3A%2F%2Fm.imeitou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671262013&t=4b12ea6281c24aa60a37ca4a45133ff3',name:'张三',position:'主任医师',currentQuota:'当前剩余13个名额'},
					{id:2,img:'https://img2.baidu.com/it/u=1329314752,875125660&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',name:'李四',position:'副主任医师',currentQuota:'当前剩余4个名额'},
					],
				value: 0,
				range: [{"value": 0,"text": "按日期预约"},{"value": 1,"text": "按医生预约"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			},
			open(){
				this.$refs.calendar.open();
			},
			confirm(e) {
				this.time=e.fulldate;
				//console.log(e.fulldate);
				//将当前日期e.fulldate上传到后端 判断是否有合法数据 如果有则用doctorList接收
			},
			//页面跳转
			to(id){
				uni.navigateTo({
					url: '/pages/index/register/registerInfo/byDoctor/byDoctor?id='+id
				})
			}
		},
		onLoad(e) {
			//根据当前部门id获取部门信息
			this.id=e.id
			//动态修改标题
			uni.setNavigationBarTitle({
				title:this.dept.name
			})
		}
	}
</script>

<style>
.t{
	margin-top: 15rpx;
}
</style>
