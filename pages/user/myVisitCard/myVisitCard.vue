<template>
	<view>
		
		此处调用电子健康卡
		<view @click="toAdd" style="width: 700rpx; height: 300rpx; border: 1rpx; display: flex; justify-content: center; align-items: center; margin: 30rpx; border-style: dashed; border-color: #808080;">
			<text style="font-size: 30rpx;">添加就诊卡\n还可添加{{num}}人</text>
		</view>
		<view style="display: flex; justify-content: center; align-items: center; font-size: 25rpx; color: #2edfa3;">
		<a href="#" @click="toHealthCard">一键授权，已有健康卡用户直接绑定</a>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				healthCardList:[],
				num:''
			}
		},
		methods: {
			//页面跳转
			toAdd(){
				uni.navigateTo({
					url:'/pages/index/visitCard/visitCard'
				})
			},
			//跳转到健康卡页面
			toHealthCard(){
				uni.navigateTo({
					url:'/pages/healthCard/healthCard'
				})
			}
		},
		onLoad() {
			//获取就诊卡信息
			this.num=5-this.healthCardList.length;
		}
	}
</script>

<style>

</style>
