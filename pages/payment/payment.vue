<template>
	<view>
		<uni-section>
			<view style="display: flex; align-items: center; justify-content: center; font-size: 25rpx; color: #dcdcdc;">支付金额（元）</view>
			<view style="display: flex; align-items: center; justify-content: center; font-size: 70rpx; color: #ffd700;">{{order.price}}</view>
		</uni-section>

		<uni-card>
			<uni-list>
				<uni-list-item title="费用类型" :rightText=order.name></uni-list-item>
				<uni-list-item title="医院名称" :rightText=order.hospital></uni-list-item>
				<uni-list-item title="就诊科室" :rightText=order.dept></uni-list-item>
				<uni-list-item title="医生名称" :rightText=order.doctor></uni-list-item>
				<uni-list-item title="就诊人" :rightText=order.visitName></uni-list-item>
				<uni-list-item title="就诊卡号" :rightText=order.visitIdCard></uni-list-item>
			</uni-list>
		</uni-card>
		<button class="btn">微信支付</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order:{id:1,name:'门诊缴费',price:'15:00',doctor:'张三',dept:'发热科',visitName:'李四',visitIdCard:'43092320049578385',hospital:'安化县人民医院'}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
