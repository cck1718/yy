<template>
	<view>
		<view class="doct">
			<text>{{deptInfo.name}}共有{{doctInfo.length}}名医生</text>
		</view>
		<uni-list v-for="(doct, index) in doctInfo" :key="index">
		 	<uni-list-item :title=doct.name :note=doct.position :thumb=doct.src thumb-size="lg" clickable="true" @click="to(doct.id)" ></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:"",
				deptInfo:{name:'发热科'},
				doctInfo:[
					{id:1,src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.imeitou.com%2Fuploads%2Fallimg%2F2021053009%2F5bcjcu2z5pt.png&refer=http%3A%2F%2Fm.imeitou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671262013&t=4b12ea6281c24aa60a37ca4a45133ff3',name:'张三',position:'主任'},
					{id:2,src:'https://img2.baidu.com/it/u=1329314752,875125660&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',name:'李四',position:'副主任'},
					]
			}
		},
		methods: {
			//携带id跳转到医生详情页
			to(id){
				uni.navigateTo({
					url: 'doctInfo/doctInfo?id='+id
				})
			}
		},
		onLoad(e) {
			this.index=e.index;
			//调用接口 传入index获取科室信息 deptInfo接收
			//调用接口 传入index获取医生信息 doctInfo接收
		}
	}
</script>

<style>
.doct text{
	display: flex;
	justify-content: center;
	align-content: center;
	font-size: 40rpx;
	font-weight: 500;
	margin: 5rpx;
}
</style>
