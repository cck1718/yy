<template>
	<view>
		<uni-list v-for="(healthCard, index) in healthCardList" :key="index" v-show="healthCardList.length>=1">
			<uni-list-item :title=healthCard.name :note=healthCard.idCard rightText="点击选择此健康卡" clickable="true" @click="select(healthCard)"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				healthCardList:[{id:1,name:'张三',idCard:430923002942134213,address:'家',phone:'13347284627'}]
			}
		},
		methods: {
			//选择健康卡
			select(healthCard){
				uni.navigateTo({
					url:'/pages/index/visitCard/info/info?name='+healthCard.name+'&idCard='+healthCard.idCard+'&address='+healthCard.address+'&phone='+healthCard.phone
				})
			}
		},
		onLoad() {
			//获取健康卡信息
			
			//如果健康卡信息为空则手动填写信息
			if(this.healthCardList.length<1){
				uni.navigateTo({
					url:'/pages/index/visitCard/visitCard'
				})
			}
		}
	}
</script>

<style>

</style>
