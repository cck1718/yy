<template>
	<view class="oneplice">
		<view class="dept">
			<text>{{deptInfo.name}}</text>
			<view class="line"></view>
		</view>
		<uni-row class="demo-uni-row">
			<uni-col>
				<text class="title">科室地址：</text>
				<text class="t">{{deptInfo.add}}</text>
			</uni-col>
			<uni-col>
				<text class="title">科室电话：</text>
				<text class="t">{{deptInfo.phone}}</text>
			</uni-col>
		</uni-row>
		<text class="t">{{deptInfo.info}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:"",
				deptInfo:{name:"发热科",add:"暂无",phone:"暂无",info:"科室介绍"}
			}
		},
		methods: {
			
		},
		onLoad(e) {
			this.index=e.index;
			//调用接口 传入index获取科室信息 deptInfo接收
		}
	}
</script>

<style>
.dept text{
	display: flex;
	justify-content: center;
	align-content: center;
	font-size: 40rpx;
	font-weight: 500;
	margin: 5rpx;
}
.line{
	margin-top: 20rpx;
	margin-bottom: 25rpx;
	width:100%;
	height:1rpx;
	background:#aaa;
}
.title{
	margin-top: 20rpx;
	font-size: 24rpx;
	color: #808080;
}
.t{
	margin-top: 20rpx;
	font-size: 24rpx;
}
.oneplice{
	margin: 40rpx;
}
</style>
