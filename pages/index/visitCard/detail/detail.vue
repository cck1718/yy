<template>
	<view>
		健康码图片
		<uni-card>
			<uni-list>
				<uni-list-item  title="姓名" :rightText=visitCardDetail.name></uni-list-item>
				<uni-list-item  title="身份证" :rightText=visitCardDetail.idCard></uni-list-item>
				<uni-list-item  title="手机号" :rightText=visitCardDetail.phone></uni-list-item>
				<uni-list-item  title="登记号" :rightText=visitCardDetail.regNo></uni-list-item>
				<uni-list-item  title="设为默认就诊人" showSwitch="true" switchChecked="true"></uni-list-item>
			</uni-list>
		</uni-card>
		<button class="btn" @click="deleteById(visitCardDetail.id)">删除就诊人</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visitCardDetail:{id:1,name:'张三',idCard:430923222231234231,isDefault:1,phone:18837283728,regNo:'000011'}
			}
		},
		methods: {
			deleteById(id){
				//删除就诊人信息
				//退回上级页面
				uni.navigateBack();
			}
		},
		onLoad(e) {
			//通过就诊卡id获取就诊卡详情 e.id
			console.log(e.id)
		}
	}
</script>

<style>

</style>
