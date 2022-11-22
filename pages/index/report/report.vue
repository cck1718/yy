<template>
	<view>
		<view style="margin: 30rpx;">
		<uni-list v-show="cardList.length > 0" v-for="(card, index) in cardList" :key="card" >
			<uni-list-item  :title=card.userName :note=card.idCard link clickable="true" @click="to('/pages/index/report/checkoutReport/checkoutReport')"></uni-list-item>
		</uni-list>
		</view>
		<view style="margin: 30rpx;">
		<uni-list v-show="cardList.length <= 5">
			<uni-list-item  title="添加就诊人" :note=cardQuota link clickable="true" @click="to('/pages/index/visitCard/visitCard')">
				<!-- <template v-slot:header>
					<image class="slot-image" src="/static//tianjia.png" mode="aspectFit"></image>
				</template> -->
			</uni-list-item>
		</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//就诊卡信息
				cardList:[{id:1,userName:'张三',idCard:430923222231234231,isDefault:1},
						  {id:2,userName:'李四',idCard:430923331236251736,isDefault:0}
				],
				cardQuota:''
			}
		},
		methods: {
			//页面跳转
			to(uurl){
				uni.navigateTo({
					url: uurl
				})
			}
		},
		onLoad() {
			//还可以添加多少人
			this.cardQuota='还可以添加' + (5-this.cardList.length) + '人';
			//获取就诊卡信息
		}
	}
</script>

<style>

</style>
