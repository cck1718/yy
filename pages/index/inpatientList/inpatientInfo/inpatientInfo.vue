<template>
	<view>
		<uni-list>
			<uni-list-item title="住院号:" :rightText=inpatient.inpatientNO></uni-list-item>
			<!-- <uni-list-item title="住院人信息"></uni-list-item> -->
			<uni-list-item title="押金情况" note="预缴金" :rightText=inpatient.prePrice></uni-list-item>
			<uni-list-item title="住院费用日清单" link clickable="true" @click="toBill(inpatient.id)"></uni-list-item>
			<uni-list-item title="押金补交" link></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inpatient:{id:1,name:'张三',prePrice:'80:00',inpatientNO:'0083'}
			}
		},
		methods: {
			toBill(id){
				uni.navigateTo({
					url:'/pages/index/inpatientList/inpatientBill/inpatientBill?id=' + id
				})
			}
		},
		onLoad(e) {
			//根据e.id获取当前住院人的住院人详情
		}
	}
</script>

<style>

</style>
