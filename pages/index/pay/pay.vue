<template>
	<view>
		<uni-list>
			<uni-list-item :title=visitCard.name :note=visitCard.idCard></uni-list-item>
		</uni-list>
		
		<uni-list v-for="(pay, index) in payList" :key="index">
			<uni-list-item :title=pay.name :note=pay.date :rightText=pay.cost link clickable="true" @click="toPay(pay.id)"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visitCard:{id:1,name:'张三',idCard:430923222231234231},
				payList:[{id:1,name:'简易门诊',date:'2022-11-21 08:19:14',cost:'￥15.00'},
						 {id:2,name:'简易门诊',date:'2022-11-21 08:49:14',cost:'￥15.00'}
				]
			}
		},
		methods: {
			toPay(id){
				uni.navigateTo({
					url: '/pages/index/pay/payDetail/payDetail?id=' + id
				})
			}
		},
		onLoad() {
			//获取当前就诊卡信息
			//获取当前就诊卡代缴费项目
		}
	}
</script>

<style>

</style>
