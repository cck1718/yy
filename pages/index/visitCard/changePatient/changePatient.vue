<template>
	<view>
		<uni-list v-for="(visitCard, index) in visitCardList" :key="index">
			<uni-list-item :title=visitCard.name :note=visitCard.idCard clickable="true" @click="choose(visitCard.id)">
				<template v-slot:footer v-if="visitCard.isDefault == 1">
					<view class="slot-box">
						<text class="slot-text">默认</text>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
		<button class="btn" @click="back">确定选择</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userid:'',
				visitCardList:[{id:1,name:'张三',idCard:430923222231234231,isDefault:1},
						  {id:2,name:'李四',idCard:430923331236251736,isDefault:0}]
			}
		},
		methods: {
			back(){
				//修改默认就诊人并返回上级页面
				let pages = getCurrentPages();
				let prePage = pages[pages.length - 2];
				for(let v of this.visitCardList){
					if(v.isDefault == 1){
						prePage.$vm.visitCard=v;
					}
				}
				uni.navigateBack();
			},
			choose(id){
				//通过isDefaul获取当前默认就诊卡 将isDefault改为0
				//通过id获取当前就诊卡 将isDefault改为1
				
				//修改默认就诊卡
				for(var visitCard of this.visitCardList){
					if(visitCard.isDefault == 1){
						visitCard.isDefault = 0;
					}
				}
				for(var visitCard of this.visitCardList){
					if(visitCard.id == id){
						visitCard.isDefault = 1;
					}
				}
				console.log(this.visitCardList)
			}
		},
		onLoad() {
			//获取当前用户绑定的就诊卡
			
		}
	}
</script>

<style>

</style>
