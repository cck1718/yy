<template>
	<view>
		<uni-card title="微信用户" thumbnail="/static/yonghu.png" note="Tips">
		<uni-list>
			<uni-list-item title="电子健康卡" link showExtraIcon="true" to="/pages/user/myVisitCard/myVisitCard"></uni-list-item>
			<uni-list-item title="挂号记录" link showExtraIcon="true" to="/pages/user/registerRecord/registerRecord"></uni-list-item>
			<uni-list-item title="门诊缴费记录" link showExtraIcon="true" to="/pages/user/payRecord/payRecord"></uni-list-item>
			<uni-list-item title="住院充值记录" link showExtraIcon="true" to="/pages/user/inpatientRechargeRecord/inpatientRechargeRecord"></uni-list-item>
			<uni-list-item title="门诊病例记录" link showExtraIcon="true" to="/pages/user/outpatientMedicalRecord/outpatientMedicalRecord"></uni-list-item>
			<uni-list-item title="体检缴费记录" link showExtraIcon="true" to="/pages/user/physicalExamPayRecord/physicalExamPayRecord"></uni-list-item>
			<uni-list-item title="检查预约" link showExtraIcon="true" to="/pages/user/checkAppointment/checkAppointment"></uni-list-item>
			<uni-list-item title="我的收藏" link showExtraIcon="true" to="/pages/user/myCollection/myCollection"></uni-list-item>
		</uni-list>
		</uni-card>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
