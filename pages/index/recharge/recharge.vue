<template>
	<view>
		<uni-section v-show="mark">
			<button class="btn" @click="addInpatient">初次使用，请添加住院人</button>
		</uni-section>
		<uni-list v-show="!mark">
			<uni-list-item :title=visitCard.name :note=visitCard.inpatientId rightText="点击切换住院人" clickable="true" @click="changeInpatient"></uni-list-item>
		</uni-list>
		<uni-card title="选择充值金额" extra="123">
			<uni-data-checkbox selectedColor="#2edfa3" mode="tag" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
			<button class="btn" @click="recharge">充值</button>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mark:true,
				value: 0,
				inpatientCard:{},
				range: [{"value": 200,"text": "￥200"},{"value": 500,"text": "￥500"},{"value": 1000,"text": "￥1000"},{"value": 2000,"text": "￥2000"},{"value": 3000,"text": "￥3000"},{"value": 5000,"text": "￥5000"},{"value": 8000,"text": "￥8000"},{"value": 10000,"text": "￥10000"},{"value": 20000,"text": "￥20000"}],
				order:{id:1,name:'住院充值',price:'3000:00',visitName:'李四',visitIdCard:'43092320049578385',hospital:'安化县人民医院'}
			}
		},
		methods: {
			change(e){
				//console.log(e.detail.value)
				//根据金额生成订单
				//跳转到收银台
				uni.navigateTo({
					url:'/pages/payment/payment?id?'+this.order.id
				})
			},
			//充值方法
			recharge(){
				//充值
				uni.navigateTo({
					url:'/pages/payment/payment'
				})
			},
			//添加住院人
			addInpatient(){
				//测试
				this.mark=false;
				this.inpatientCard={id:1,name:'张三',inpatientId:'00897'};
				
				//添加住院人
				uni.navigateTo({
					url:'/pages/index/inpatientList/addInpatient/addInpatient'
				})
			},
			//更改住院人
			changeInpatient(){
				uni.navigateTo({
					url:'/pages/index/inpatientList/addInpatient/addInpatient'
				})
			}
		}
	}
</script>

<style>

</style>
