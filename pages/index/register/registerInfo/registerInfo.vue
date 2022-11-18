<template>
	<view >
		<uni-row class="demo-uni-row">
			<uni-col :span="10">
				<view v-show="value == 0">日期：{{time}}</view>
			</uni-col>
			<uni-col :span="14">
				<uni-data-checkbox v-model="value" :localdata="range" @change="change" mode="tag" selectedColor="#2edfa3"></uni-data-checkbox>
			</uni-col>
		</uni-row>
		<view v-show="value==0">
			<view>
				<uni-calendar 
				ref="calendar"
				:insert="false"
				@confirm="confirm"
				 />
				 <button @click="open">打开日历</button>
			</view>
		</view>
		<view v-show="value==1">123</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				id:'',
				dept:{id:this.id,name:'发热科'},
				time:new Date().toISOString().slice(0, 10),
				
				value: 0,
				range: [{"value": 0,"text": "按日期预约"	},{"value": 1,"text": "按医生预约"}]
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
								console.log(e);
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

</style>
