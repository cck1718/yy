<template>
	<view>
		<uni-card isFull="false">
			<uni-list>
				<uni-list-item  title="开方科室" :rightText=detail.byDept></uni-list-item>
				<uni-list-item  title="医生姓名" :rightText=detail.byDoctor></uni-list-item>
			</uni-list>
		</uni-card>
			<uni-table>
				<uni-tr>
					<uni-th align="center" width="100rpx">项目名称</uni-th>
					<uni-th align="center" width="100rpx">单价(元)</uni-th>
					<uni-th align="center" width="100rpx">数量</uni-th>
					<uni-th align="center" width="100rpx">金额(元)</uni-th>
				</uni-tr>
				<uni-tr v-for="(poject, index) in detail.pojectList" :key="index">
					<uni-td align="center">{{poject.name}}</uni-td>
					<uni-td align="center">{{poject.price}}</uni-td>
					<uni-td align="center">{{poject.amount}}</uni-td>
					<uni-td align="center">{{poject.cost}}</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">总额</uni-td>
					<uni-td></uni-td>
					<uni-td></uni-td>
					<uni-td align="center">{{detail.total}}</uni-td>
				</uni-tr>
			</uni-table>
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup" @buttonClick="buttonClick" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail:{id:1,byDept:'简易门诊',byDoctor:'张三',
					pojectList:[
						{name:'挂号费',price:'0.00',amount:1,cost:'0.00'},
						{name:'新型冠状病毒核酸检测试剂盒(荧光PCR法) 旧',price:'4.00',amount:1,cost:'4.00'},
						{name:'新型冠状病毒核酸检测(单检)',price:'11.00',amount:1,cost:'11.00'}],
					total:'15.00'
						},
				
				buttonGroup: [{
					text: '去缴费',
					backgroundColor: '#2edfa3',
					color: '#fff'
				}]
			}
		},
		methods: {
			buttonClick (e) {
				console.log('缴费')
				//收银台
				uni.navigateTo({
					url:'/pages/payment/payment'
				})
			}
		},
		onLoad(e) {
			//通过订单id e.id 获取当前代缴费项目的详细信息
		}
	}
</script>

<style>

</style>
