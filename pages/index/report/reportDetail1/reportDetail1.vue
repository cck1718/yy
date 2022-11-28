<template>
	<view>
		<uni-title type="h1" title="安化县人民医院检验报告单" align="center"></uni-title>
		<uni-list>
			<uni-list-item title="姓名" rightText="张三"></uni-list-item>
			<uni-list-item title="性别" rightText="男"></uni-list-item>
			<uni-list-item title="年龄" rightText="20"></uni-list-item>
			<uni-list-item title="采样时间" rightText="2022-11-28 15:23:43"></uni-list-item>
			<uni-list-item title="样本编号" rightText="20220298753334"></uni-list-item>
			<uni-list-item title="科室" rightText="门诊"></uni-list-item>
			<uni-list-item title="接收时间" rightText="2022-11-28 16:25:32"></uni-list-item>
			<uni-list-item title="样本种类" rightText="全血"></uni-list-item>
			<uni-list-item title="临床诊断" rightText=""></uni-list-item>
			<uni-list-item title="备注" rightText=""></uni-list-item>
			<uni-list-item title="检验时间" rightText="2022-11-28 17:25:32"></uni-list-item>
			<uni-list-item title="报告时间" rightText="2022-11-28 18:25:32"></uni-list-item>
			<uni-list-item title="报告人" rightText="李四"></uni-list-item>
			<uni-list-item title="审核人" rightText="王五"></uni-list-item>
			<uni-list-item title="声明" rightText="本结果仅对该检验标本负责"></uni-list-item>
			<uni-list-item title="检验详情"></uni-list-item>
		</uni-list>
		<uni-table>
			<uni-tr >
				<uni-th align="center" width="20rpx">代号</uni-th>
				<uni-th align="center" width="20rpx">项目</uni-th>
				<uni-th align="center" width="20rpx">检验结果</uni-th>
				<uni-th align="center" width="20rpx">单位</uni-th>
				<uni-th align="center" width="20rpx">参考值</uni-th>
			</uni-tr>
			<uni-tr v-for="(project, index) in reportDetail.projectList" :key="index">
				<uni-td align="center">{{project.code}}</uni-td>
				<uni-td align="center">{{project.name}}</uni-td>
				<uni-td align="center">{{project.result}}</uni-td>
				<uni-td align="center">{{project.unit}}</uni-td>
				<uni-td align="center">{{project.reference}}</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reportDetail:{
					id:1,name:'张三',sex:'男',age:'20',sampleTime:'2022-11-28 15:23:43',sampleNO:'23123141',dept:'门诊',receiveTime:'2022-11-28 16:25:32',sampleCategory:'全血',diagnosis:'',note:'',
					projectList:[{code:'WBC',name:'白细胞计数',result:'4.4',unit:'10^12/L',reference:'4-10'},
							{code:'HGB',name:'血红蛋白',result:'149.0',unit:'g/L',reference:'110-160'}
					],
					inspectTime:'2022-11-28 17:25:32',
					reportTime:'2022-11-28 18:25:32',
					reportBy:'李四',
					receiveBy:'王五',
				}
			}
		},
		methods: {
			
		},
		onLoad(e) {
			//通过报告id获取完整报告e.id
			
		}
	}
</script>

<style>

</style>
