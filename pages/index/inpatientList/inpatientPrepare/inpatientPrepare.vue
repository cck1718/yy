<template>
	<view>
		<uni-list>
			<uni-list-item title="住院号:" :rightText=inpatient.inpatientNO></uni-list-item>
			
			<uni-list-item title="申请住院预约" link></uni-list-item>
			<uni-list-item title="住院预约结果查询" link></uni-list-item>
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

		}
	}
</script>

<style>

</style>
