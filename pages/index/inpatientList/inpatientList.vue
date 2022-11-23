<template>
	<view>
		<view v-show="inpatientList">
			<uni-list v-for="(inpatient, index) in inpatientList" :key="index">
				<uni-list-item :title=inpatient.name note="电子健康卡" clickable="true" @click="to(inpatient.id)">
				</uni-list-item>
			</uni-list>
		</view>
		<view @click="toAdd" style="width: 700rpx; height: 300rpx; border: 1rpx; display: flex; justify-content: center; align-items: center; margin: 30rpx; border-style: dashed; border-color: #808080;">
			<text style="font-size: 30rpx;">添加住院人\n还可添加{{num}}人</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mark:999,
				inpatientList:[{id:1,name:'张三'},{id:2,name:'李四'}],
				num:''
			}
		},
		methods: {
			to(id){
				if(this.mark == 0){
					uni.navigateTo({
						url:'/pages/index/inpatientList/inpatientBill/inpatientBill?id='+id
					})
				}else if (this.mark == 1){
					uni.navigateTo({
						url:'/pages/index/inpatientList/inpatientInfo/inpatientInfo?id='+id
					})
				}else if(this.mark == 2){
					uni.navigateTo({
						url:'/pages/index/inpatientList/inpatientPrepare/inpatientPrepare?id='+id
					})
				}
			},
			/**
			 * 跳转到添加住院人页面
			 */
			toAdd(){
				uni.navigateTo({
					url:'/pages/index/inpatientList/addInpatient/addInpatient'
				})
			}
		},
		onLoad(e) {
			//获取标记
			this.mark=e.id;
			console.log('e',e.id)
			
			//获取我的住院人信息
			//剩余可添加住院人个数
			this.num=10 - this.inpatientList.length;
		}
	}
</script>

<style>

</style>
