<template>
	<view>
		<uni-title type="h1" title="安化县人民医院检查报告单" align="center"></uni-title>
		<uni-list>
			<uni-list-item title="姓名" rightText="张三"></uni-list-item>
			<uni-list-item title="性别" rightText="男"></uni-list-item>
			<uni-list-item title="年龄" rightText="20"></uni-list-item>
			<uni-list-item title="采样时间" rightText="2022-11-28 15:23:43"></uni-list-item>
			<uni-list-item title="样本编号" rightText="20220298753334"></uni-list-item>
			<uni-list-item title="科室" rightText="发热科"></uni-list-item>
			<uni-list-item title="接收时间" rightText="2022-11-28 16:25:32"></uni-list-item>
			<uni-list-item title="样本种类" rightText=""></uni-list-item>
		</uni-list>
		<uni-table>
			<uni-tr>
				<uni-th></uni-th>
			</uni-tr>
			<uni-tr>
				<uni-td>{{}}</uni-td>
			</uni-tr>
		</uni-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reportDetail:{}
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
