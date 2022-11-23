<template>
	<view>
		<text style="font-size: 25; margin: 30rpx; color: #808080;">通过就诊人添加</text>
		<uni-list v-for="(visitCard, index) in visitCardList" :key="index">
			<uni-list-item :title=visitCard.name :note=visitCard.idCard showSwitch="true"></uni-list-item>
		</uni-list>
		<uni-list>
			<uni-list-item title="添加就诊人" note="还可添加5人" link to="/pages/index/visitCard/visitCard"></uni-list-item>
		</uni-list>
		<button class="btn" @click="add">确认添加</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visitCardList:[{id:1,name:'张三',idCard:43092303236374658}],
				visitCard:[{id:'',name:'',idCard:''}]
			}
		},
		methods: {
			add(){
				//上传就诊卡信息 根据就诊卡创建住院卡
				//返回上级页面
				uni.navigateBack()
			}
		},
		onLoad() {
			//获取就诊卡信息
		}
	}
</script>

<style>

</style>
