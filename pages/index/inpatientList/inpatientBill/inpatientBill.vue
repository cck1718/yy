<template>
	<view>
		<uni-section>
			<text style="justify-content: center; align-items: center;display: flex;">本日花费金额{{dillDetial.totalCost}}（元）</text>
		</uni-section>
		<uni-table>
			<uni-tr>
				<uni-th align="center" width="100rpx">项目名称</uni-th>
				<uni-th align="center" width="100rpx">单价(元)</uni-th>
				<uni-th align="center" width="100rpx">数量</uni-th>
				<uni-th align="center" width="100rpx">金额(元)</uni-th>
			</uni-tr>
			<uni-tr v-for="(poject, index) in dillDetial.pojectList" :key="index">
				<uni-td align="center">{{poject.name}}</uni-td>
				<uni-td align="center">{{poject.price}}</uni-td>
				<uni-td align="center">{{poject.amount}}</uni-td>
				<uni-td align="center">{{poject.cost}}</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dillDetial:{id:'1',pojectList:[{name:'门诊预约',price:'80',amount:'1',cost:'80'}],totalCost:'80'}
			}
		},
		methods: {
			
		},
		onLoad(e) {
			//根据e.id获取当前住院人的当日消费清单
		}
	}
</script>

<style>

</style>
